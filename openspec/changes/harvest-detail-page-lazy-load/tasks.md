## 1. Timeline 懒加载增强

- [x] 1.1 在 `Timeline` 组件中新增 `lazy`（boolean，默认 false）和 `pageSize`（number，默认 20）两个 props
- [x] 1.2 在 `Timeline` 内部新增 `visibleCount` 状态，初始值为 `pageSize`；当 `lazy=false` 时直接渲染全部数据
- [x] 1.3 对传入的 `groups` 按 `visibleCount` 进行切片（按条目数而非分组数），仅渲染前 `visibleCount` 条记录
- [x] 1.4 在渲染列表底部添加哨兵元素 `<div ref={sentinelRef}>`，使用 `IntersectionObserver` 监听其进入视口
- [x] 1.5 哨兵进入视口时，将 `visibleCount` 增加 `pageSize`；当所有数据已渲染完毕时 disconnect observer
- [x] 1.6 添加加载状态 UI：未全部加载时显示"加载中..."（带 CSS 动画），全部加载完毕时显示"已全部加载 🎉"
- [x] 1.7 在 `App.css` 中添加 `.timeline__loader` 和 `.timeline__end` 样式（居中、淡色文字、适当间距）

## 2. 新增 HarvestDetail 页面

- [x] 2.1 创建 `src/pages/HarvestDetail.jsx`，使用 `useParams` 获取 habitId，从 `habitStorage` 加载习惯数据
- [x] 2.2 实现习惯不存在时的空状态提示 + 返回按钮
- [x] 2.3 实现习惯摘要卡片区域：名称、座右铭、开始日期、累计打卡次数、今日打卡状态（复用 `checkinStorage` API）
- [x] 2.4 实现操作按钮区域：编辑按钮（弹出 `HabitForm`）、删除按钮（弹出确认对话框）
- [x] 2.5 实现删除确认逻辑：确认后调用 `removeHabit` + `removeCheckins`，然后 `navigate('/harvest')`
- [x] 2.6 实现编辑逻辑：提交后调用 `updateHabit`，刷新页面数据
- [x] 2.7 集成 Timeline 组件（`lazy={true}`），传入 `getCheckinsWithNotes(habitId)` 和 `habit.color`
- [x] 2.8 实现页面顶部"← 返回收获集"按钮，点击后 `navigate('/harvest')`

## 3. 路由注册

- [x] 3.1 在 `src/router.jsx` 中 import `HarvestDetail` 并新增 `{ path: 'harvest/:id', element: <HarvestDetail /> }` 路由条目

## 4. 概览卡片简化

- [x] 4.1 在 `HabitOverviewList.jsx` 中引入 `useNavigate`，移除 `expandedId`、`toggleExpand`、`editHabit`、`confirmDeleteId` 等状态和对应的 handler
- [x] 4.2 将卡片 `onClick` 从 `toggleExpand(habit.id)` 改为 `navigate('/harvest/${habit.id}')`
- [x] 4.3 移除卡片展开后的 `overview-detail` 区域（内嵌 Timeline + 编辑/删除按钮）
- [x] 4.4 移除 `HabitOverviewList` 内部的编辑弹窗和删除确认对话框代码
- [x] 4.5 移除不再需要的 import：`Timeline`、`HabitForm`、`updateHabit`、`removeHabit`、`removeCheckins`、`getCheckinsWithNotes`
- [x] 4.6 为卡片添加导航引导视觉提示（右箭头 icon 或 chevron），暗示可点击跳转

## 5. 样式

- [x] 5.1 在 `App.css` 中新增 `.harvest-detail` 页面基础布局样式
- [x] 5.2 新增 `.harvest-detail__header`（返回按钮 + 操作按钮区域）样式
- [x] 5.3 新增 `.harvest-detail__card`（习惯摘要卡片）样式，复用 glassmorphism 变量
- [x] 5.4 新增 `.harvest-detail__stats`（统计数字区域）样式
- [x] 5.5 新增 `.harvest-detail__timeline-section`（时间线区域）样式
- [x] 5.6 更新 `.overview-card` 样式：移除 `.is-expanded` 相关样式，添加 chevron / 点击引导态

## 6. 验证

- [x] 6.1 `npx vite build` 确认 0 错误
- [ ] 6.2 手动验证：收获集概览卡片点击后跳转 `/harvest/:id` 详情页
- [ ] 6.3 手动验证：详情页显示习惯信息、操作按钮、懒加载时间线
- [ ] 6.4 手动验证：Timeline 懒加载——首屏仅渲染约 20 条，滚动触底自动加载更多，终态显示"已全部加载 🎉"
- [ ] 6.5 手动验证：详情页编辑和删除功能正常工作
- [ ] 6.6 手动验证：习惯不存在时的空状态页面正确展示
- [ ] 6.7 手动验证：未设置 `lazy` 的 Timeline（如 HabitDetail 页）行为不受影响
