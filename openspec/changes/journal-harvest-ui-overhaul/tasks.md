## 1. 数据模型升级（checkin-notes）

- [x] 1.1 在 checkinStorage.js 中新增 v2→v3 迁移函数 migrateV2toV3，将 `number[]` 转换为 `{ ts, note: '' }[]`
- [x] 1.2 修改 loadCheckins，支持检测 version=3 直接加载，version=2 自动迁移为 v3，更新 STORAGE_VERSION 为 3
- [x] 1.3 修改 saveCheckins，以 version=3 格式写入
- [x] 1.4 修改 checkin() 函数签名为 checkin(habitId, timestamp?, note?)，存储 `{ ts, note }` 对象
- [x] 1.5 修改 getCheckins(habitId) 内部提取 `.map(e => e.ts)` 返回 `number[]`，保持兼容
- [x] 1.6 修改 getTodayCount、getCheckinCount 适配 v3 对象数组
- [x] 1.7 修改 removeCheckinByTimestamp 适配 v3 对象数组（匹配 `.ts` 属性）
- [x] 1.8 修改 getCheckinsByDate 适配 v3 对象数组（返回时间戳数组）
- [x] 1.9 修改 getAllCheckinDates 适配 v3 对象数组
- [x] 1.10 修改 timestampToDateStr 导出保持不变
- [x] 1.11 新增 getCheckinsWithNotes(habitId) 返回 `{ ts, note }[]`
- [x] 1.12 新增 getCheckinsByDateWithNotes(habitId, dateStr) 返回 `{ ts, note }[]`

## 2. 打卡弹窗组件（checkin-modal）

- [x] 2.1 新建 src/components/CheckinModal.jsx，接收 props: habit, onCheckin(note?), onClose
- [x] 2.2 实现弹窗遮罩层（点击遮罩关闭）
- [x] 2.3 实现弹窗卡片，底色基于 habit.color（低透明度背景 + 左侧色带）
- [x] 2.4 展示习惯名称、寄语、今日打卡状态（getTodayCount）
- [x] 2.5 添加 textarea 输入区域（placeholder："记录此刻的想法…"），可选输入
- [x] 2.6 添加打卡按钮，点击时调用 onCheckin(note) 并关闭弹窗
- [x] 2.7 在 App.css 中添加打卡弹窗样式（遮罩、卡片、色带、输入区、按钮）

## 3. 今日记页面改造（todo-list-app 修改）

- [x] 3.1 修改 HabitHome.jsx：移除 handleCheckin 函数中的 e.stopPropagation 和直接打卡逻辑
- [x] 3.2 移除色块中的打卡按钮（btn habit-tile__btn）
- [x] 3.3 移除色块中的累计次数（habit-tile__count）和今日次数（habit-tile__today）
- [x] 3.4 在色块右下角添加"前去打卡"文案提示
- [x] 3.5 修改色块点击行为：从 navigate(/habit/:id) 改为打开 CheckinModal
- [x] 3.6 引入 CheckinModal 组件，管理 selectedHabit 状态
- [x] 3.7 实现弹窗 onCheckin 回调：调用 checkin(habitId, undefined, note) + fireConfetti + refresh + 关闭弹窗
- [x] 3.8 移除 useNavigate 导入（不再需要跳转详情）
- [x] 3.9 在 App.css 中更新习惯色块样式：增强卡片感（box-shadow、border-radius 加大、内阴影层次）
- [x] 3.10 移除色块上打卡按钮和计数相关的 CSS 规则

## 4. 日历渐变与选中样式（todo-list-app 修改）

- [x] 4.1 修改 Calendar.jsx 中 getMarkStyle 函数：多色渐变改为 `linear-gradient(135deg, ...colors)` 无硬断点
- [x] 4.2 修改选中日期样式：增加 transform: scale(1.15)、双层环 box-shadow（白色内环 + 粉色外环）
- [x] 4.3 调整选中+有标记日期的合并样式逻辑，确保缩放和双层环在渐变背景上可见
- [x] 4.4 在 App.css 中为 .is-selected 添加 z-index 提升和 transition 动画
- [x] 4.5 移除旧的 is-selected + is-marked 合并 boxShadow inset 样式

## 5. 收获集概览模式（habit-overview）

- [x] 5.1 在 HarvestHome.jsx 中添加 viewMode 状态（'overview' | 'charts'），默认 'overview'
- [x] 5.2 修改 header 区域，右上角添加概览/图表切换按钮
- [x] 5.3 新建 src/components/HabitOverviewList.jsx 概览卡片列表组件
- [x] 5.4 实现概览卡片：展示习惯名称、寄语、累计打卡次数、今日是否已打卡（✅/⬜）
- [x] 5.5 实现卡片点击展开/收起逻辑（同时只展开一个），管理 expandedHabitId 状态
- [x] 5.6 展开面板：复用 Timeline 组件展示完整打卡记录（传入 getCheckinsWithNotes 数据）
- [x] 5.7 展开面板：添加编辑按钮，点击弹出 HabitForm 编辑弹窗
- [x] 5.8 展开面板：添加删除按钮 + 确认对话框，删除习惯及打卡记录
- [x] 5.9 在 App.css 中添加概览卡片、展开面板、切换按钮样式

## 6. Timeline 组件增强

- [x] 6.1 修改 Timeline.jsx 支持接收 `{ ts, note }[]` 对象数组（同时兼容 `number[]`）
- [x] 6.2 有 note 的记录在时间戳下方展示文案文本

## 7. 松树时间轴图表（pine-tree-chart）

- [x] 7.1 新建 src/components/PineTreeChart.jsx
- [x] 7.2 实现 getRecentDays(30) 获取最近 30 天日期列表
- [x] 7.3 按天聚合各习惯的打卡数据：`{ date, habits: [{ name, color, count }] }`
- [x] 7.4 实现 SVG 绘制：灰色长方形树干（8×40px）
- [x] 7.5 实现 SVG 绘制：按习惯顺序从下往上叠加三角形树冠（底部最宽、顶部最窄）
- [x] 7.6 无打卡的天仅绘制灰色短树桩
- [x] 7.7 每棵树下方添加 MM-DD 日期标签
- [x] 7.8 外层 div 设置 overflow-x: auto 实现横向滚动
- [x] 7.9 在 App.css 中添加松树图表滚动容器和间距样式

## 8. 内嵌渔获区域（inline-fishing-catch）

- [x] 8.1 新建 src/components/InlineFishingCatch.jsx
- [x] 8.2 实现默认状态：大色块区域，居中 🎣 + "点击获取渔获"提示
- [x] 8.3 实现点击获取：调用 fetchInsight()，区域内展示 emoji + 文案
- [x] 8.4 实现再次点击刷新：重新调用 fetchInsight 更新内容
- [x] 8.5 移除自动关闭逻辑（无 setTimeout 自动 dismiss）
- [x] 8.6 在 App.css 中添加内嵌渔获区域样式（圆角、渐变背景、120px 高度、居中布局）

## 9. 收获集图表模式组装

- [x] 9.1 修改 HarvestHome.jsx 图表模式：第一张图替换为 PineTreeChart
- [x] 9.2 图表模式第二张图替换为 InlineFishingCatch
- [x] 9.3 保留 TrendLine 和 DonutChart 作为第三、第四张图
- [x] 9.4 移除 FishingCatch 浮动组件的引入和渲染

## 10. 清理与验证

- [x] 10.1 确认 HabitDetail.jsx 仍可通过路由 /habit/:id 访问（保留路由兼容）
- [x] 10.2 确认 v2 数据自动迁移为 v3 后所有页面功能正常
- [x] 10.3 执行 vite build 确认 0 错误
- [x] 10.4 手动验证三个页签的完整交互流程
