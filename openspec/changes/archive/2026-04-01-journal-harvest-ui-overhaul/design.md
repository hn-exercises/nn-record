## Context

本应用为基于 React 18 + Vite 的习惯打卡 PWA，当前包含三个页签：今日记（首页打卡）、时光补（日历补卡）、收获集（数据可视化）。

当前数据模型 checkinStorage v2 以 `{ [habitId]: number[] }` 存储打卡时间戳。本次变更涉及交互流程重组（打卡弹窗化、详情页迁移、概览/图表切换）、视觉升级（柔和渐变、卡片阴影）和数据模型扩展（打卡文案）。

技术约束：
- 纯 SVG 图表，不引入外部图表库
- 所有样式在 App.css 中维护
- localStorage 持久化，需向下兼容迁移

## Goals / Non-Goals

**Goals：**
- 今日记色块简化为仅展示名称+寄语，打卡行为通过弹窗完成
- 打卡支持可选文案输入，数据模型平滑升级
- 日历渐变从硬色带优化为柔和调色盘风格
- 收获集支持概览/图表双模式，概览提供习惯维度钻取
- 新增松树时间轴和内嵌渔获区域两个可视化组件

**Non-Goals：**
- 不重构路由结构（保持现有 4 条路由）
- 不引入状态管理库（继续使用 useState + localStorage）
- 不改变 PWA 配置或 Service Worker 策略
- 不重写现有 TrendLine、DonutChart 组件

## Decisions

### Decision 1：checkinStorage v3 数据结构

**选项 A**：时间戳数组改为对象数组 `{ ts: number, note?: string }[]`
**选项 B**：保持时间戳数组不变，另建 `habit-tracking/checkin-notes` 存储 `{ [habitId]: { [ts]: string } }`

**选择：方案 A**

理由：
- 数据内聚，一条记录一个对象，查询无需跨 key 合并
- 迁移简单：v2 `number[]` → v3 每个 ts 映射为 `{ ts, note: '' }`
- 所有现有 API（getCheckins、getTodayCount 等）只需在内部 `.map(e => e.ts)` 或直接访问 `.ts` 属性即可兼容
- 新增 `checkinWithNote(habitId, ts?, note?)` API，旧 `checkin()` 保持签名不变（note 默认空）

迁移方案：
```
v2: { version: 2, records: { habitId: [ts1, ts2, ...] } }
v3: { version: 3, records: { habitId: [{ ts: ts1, note: '' }, { ts: ts2, note: '' }, ...] } }
```
loadCheckins 中检测 version，v2 自动迁移为 v3。

### Decision 2：打卡弹窗组件设计

新建 `CheckinModal.jsx` 组件：
- Props：`habit`（习惯对象）、`onCheckin(note?)`、`onClose`
- 布局：全屏半透明遮罩 + 居中卡片
- 卡片底色：习惯颜色（20% 透明度背景 + 左侧色带）
- 内容区：习惯名称、寄语、今日打卡状态
- textarea 输入区（可选，placeholder："记录此刻的想法…"）
- 打卡按钮触发 `checkin()` + `fireConfetti()` + 关闭弹窗
- 不使用 Portal，直接在 HabitHome 内渲染

### Decision 3：日历柔和渐变算法

**当前**：radial-gradient 硬色带（`color1 0%, color1 25%, color2 25%, ...`）

**新方案**：使用 linear-gradient 对角线混合，色与色之间自然过渡
- 单色：保持 color-mix 半透明方案
- 2 色：`linear-gradient(135deg, color1, color2)`
- 3 色：`linear-gradient(135deg, color1, color2, color3)`
- 4 色：`linear-gradient(135deg, color1, color2, color3, color4)`
- 所有颜色不设固定百分比断点，让浏览器自动均匀过渡

选中日期样式：
- 增加 `transform: scale(1.15)` + `box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--dopamine-pink)` 双层环效果
- z-index 提升，确保缩放不被裁切

### Decision 4：收获集概览/图表切换

- 使用 useState 管理 `viewMode: 'overview' | 'charts'`
- 右上角 header 区域放置两个 tab 按钮（概览 / 图表）
- **概览模式**：
  - 渲染 HabitOverviewList 组件（习惯卡片列表）
  - 卡片信息：名称、寄语、累计打卡次数、今日是否已打卡（✅/⬜）
  - 卡片点击：展开内联详情面板（不跳转路由），展示完整打卡时间线（复用 Timeline 组件）+ 编辑/删除操作
  - 替代原 HabitDetail 页面在今日记中的入口角色
- **图表模式**：
  - 第一图：PineTreeChart（松树时间轴）
  - 第二图：InlineFishingCatch（内嵌渔获）
  - 第三图起：TrendLine + DonutChart（保持不变）

### Decision 5：松树时间轴 SVG 设计

PineTreeChart 组件：
- 横向滚动容器，每天一棵"松树"
- 树干：灰色窄长方形（宽 8px，高 40px）
- 树冠：由各习惯颜色三角形从下往上叠加（每个习惯打卡 = 一个三角形）
  - 三角形宽度从下到上递减（底部大、顶部小），形成松树轮廓
  - 无打卡的天不画树冠，只画灰色树桩
- 日期标签在树干下方，格式 MM-DD
- 展示最近 30 天数据
- 纯 SVG 实现，外层 div overflow-x: auto 实现滚动

### Decision 6：内嵌渔获区域

InlineFishingCatch 组件替代原 FishingCatch：
- 样式：大长条色块区域（圆角、渐变背景），高度约 120px
- 默认状态：居中显示 🎣 图标 + "点击获取渔获" 提示文字
- 点击后：调用 fetchInsight()，在区域内展示 emoji + 文案（替换提示文字）
- 再次点击：刷新获取新的文案（无自动关闭）
- 移除原固定定位浮动按钮和 slide-in 动画

## Risks / Trade-offs

- **[v3 迁移] → 缓解**：v2→v3 迁移在 loadCheckins 中自动执行，与 v1→v2 相同模式，风险低。对象数组比纯数字数组占用更多存储空间，但习惯打卡数据量有限，影响可忽略。
- **[概览详情面板] → 缓解**：内联展开详情而非路由跳转，避免路由变更。但长列表下展开面板可能导致页面跳动，需加 scrollIntoView 平滑滚动。
- **[松树 SVG 性能] → 缓解**：30 天 × 最多 8 个习惯 = 最多 240 个三角形，SVG 渲染无压力。
- **[色块样式删减] → 权衡**：移除色块上的打卡按钮和计数信息，首页信息密度降低，但换来更清晰的视觉层次和弹窗打卡的仪式感。
- **[日历渐变] → 权衡**：linear-gradient 对角线混合在 4 色以上时可能变"脏"，限制最多 4 色保持美观。

## Open Questions

- 概览模式的习惯详情面板是否需要支持编辑/删除习惯操作？（当前设计为保留，复用 HabitDetail 的编辑/删除逻辑）
- 松树时间轴的三角形排列顺序是否按习惯创建顺序固定？（当前设计为按习惯列表顺序，底部先绘制）
