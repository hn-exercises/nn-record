## Context

当前「收获集」概览模式下，`HabitOverviewList` 以手风琴（accordion）方式展开习惯详情：

- 点击卡片 → `expandedId` 切换 → 渲染内嵌 `<Timeline>` + 编辑/删除按钮
- `Timeline` 接收 `getCheckinsWithNotes(habitId)` 的完整数组，一次性渲染全部记录
- 编辑和删除的弹窗也在 `HabitOverviewList` 内部管理

这种架构在记录数较少时尚可，但当某习惯累积数百条打卡记录时，展开瞬间 DOM 节点激增，滚动体验下降，且手风琴内空间有限，不利于后续扩展更多交互。

已有 `HabitDetail` 页面（`/habit/:id`）作为从今日记进入的详情页，但它不包含懒加载机制，且与收获集的概览详情逻辑重复。本次变更将为收获集创建专属的详情页路由 `/harvest/:id`，复用已有组件但引入懒加载能力。

## Goals / Non-Goals

**Goals:**
- G1：概览卡片点击后跳转到独立详情页 `/harvest/:id`，提供完整的习惯信息与操作
- G2：详情页中的打卡时间线支持懒加载，首屏仅加载最近 20 条记录，滚到底部自动追加
- G3：保持视觉风格与现有设计系统一致（glassmorphism、Nunito 字体、粉色系）
- G4：无新外部依赖

**Non-Goals:**
- 不改造 `/habit/:id`（今日记的详情页）——保持现有逻辑不变
- 不引入虚拟滚动（virtual scroll）——数据量级暂不需要
- 不做服务端分页（纯前端 localStorage）

## Decisions

### D1：新增 `/harvest/:id` 路由 + `HarvestDetail` 页面

**选择**：为收获集创建独立的 `HarvestDetail.jsx` 页面，而非复用 `/habit/:id`。

**替代方案**：复用已有 `HabitDetail` 并添加 query 参数区分来源。

**理由**：两个详情页的职责不同——`HabitDetail` 偏向即时打卡场景（有打卡按钮），`HarvestDetail` 偏向回顾统计场景（侧重时间线浏览）。独立页面可分别演进，且不会给已有页面引入条件分支。

### D2：Timeline 懒加载采用 IntersectionObserver + 内部分页

**选择**：在 `Timeline` 组件内部维护 `visibleCount` 状态，配合 `IntersectionObserver` 监听哨兵元素，触底后增加 `visibleCount`，从已传入的完整数据中切片渲染。

**替代方案 A**：在 `checkinStorage` 中实现分页查询函数，按需从 localStorage 中读取。
**替代方案 B**：引入 `react-virtuoso` 等虚拟滚动库。

**理由**：
- localStorage 读取极快（< 1ms），无需真正的"分页请求"，瓶颈在 DOM 渲染而非数据读取。
- 只需控制渲染数量即可解决性能问题，无需虚拟滚动库（数据量级为千条以内）。
- 内部分页方案对外部调用者透明，仅需传入 `lazy` prop 即可启用。

### D3：Timeline 懒加载参数设计

```
<Timeline
  dates={allEntries}
  color={habit.color}
  lazy                     // 启用懒加载（默认 false，向后兼容）
  pageSize={20}            // 每批加载条数，默认 20
/>
```

- `lazy=false`（默认）：行为与现有完全一致，一次性渲染全部——不影响 HabitDetail 等其他调用方
- `lazy=true`：首屏渲染 `pageSize` 条，底部放置哨兵 `<div ref={sentinelRef}>`，进入视口后追加下一批
- 展示"加载中..."微动画和"已全部加载 🎉"终态提示

### D4：概览卡片简化——移除手风琴，改为导航

**选择**：`HabitOverviewList` 中移除 `expandedId` / `toggleExpand` 逻辑和内嵌的 `<Timeline>` / 编辑弹窗 / 删除确认。卡片 `onClick` 改为 `navigate('/harvest/${habit.id}')`。

**理由**：详情页承担了原来手风琴内的全部功能，概览页回归纯列表展示职责，代码量大幅精简。

### D5：详情页返回导航

**选择**：页面顶部放置"← 返回收获集"按钮，使用 `navigate('/harvest')` 而非 `navigate(-1)`。

**理由**：用户可能通过直接 URL 进入详情页（如 PWA 书签），`navigate(-1)` 会导致意外跳出应用。固定返回收获集更可靠。

## Risks / Trade-offs

- **[风险] 首次加载全量数据到内存** → 由于 localStorage 同步读取极快且数据量可控（千条以内），这是可接受的。未来若接入远程存储，再考虑真正的分页 API。
- **[风险] IntersectionObserver 兼容性** → 现代浏览器均支持（iOS Safari 12.2+），目标用户群（25-30 岁女性）设备覆盖无问题。
- **[权衡] 两个详情页并存** → `/habit/:id` 和 `/harvest/:id` 功能有部分重叠，但职责不同。后续可考虑合并，但当前分离更清晰。
- **[权衡] 移除手风琴即为 breaking UI change** → 用户原有的"展开即看"交互消失，需通过卡片 hover/点击态引导用户点击跳转。
