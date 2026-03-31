## Why

当前「收获集-概览」中，点击某个习惯卡片后以手风琴（accordion）方式在原地展开详情和打卡记录。存在两个核心问题：

1. **性能瓶颈**：展开时会一次性渲染该习惯的全部打卡记录（`getCheckinsWithNotes` → `<Timeline>`），当记录达到数百条甚至上千条时，DOM 节点暴增，渲染阻塞明显。
2. **体验受限**：手风琴内空间有限，无法承载编辑、删除、数据统计等更丰富的交互；多习惯同时展开时页面抖动且信息密度过高。

将详情独立为完整页面，并对打卡记录实施懒加载（分页 / 无限滚动），可从根本上解决性能与扩展性问题。

## What Changes

- **新增独立习惯详情页** `/harvest/:id`：点击概览卡片后路由跳转到详情页，展示习惯信息、统计摘要、操作按钮（编辑/删除）和打卡时间线。
- **打卡记录懒加载**：Timeline 组件支持分批加载，首屏仅渲染最近 N 条（如 20 条），滚到底部自动加载更多，附加"加载中"和"已全部加载"状态提示。
- **概览卡片简化**：移除手风琴展开逻辑，卡片点击后直接跳转 `/harvest/:id`；卡片仅保留名称、累计次数、今日状态等摘要信息。
- **复用 & 统一**：新详情页复用已有的 `HabitForm`（编辑弹窗）、`Timeline`（增强后支持懒加载）、删除确认对话框等组件。

## Capabilities

### New Capabilities
- `harvest-detail-page`: 收获集独立详情页——路由、布局、统计摘要、操作按钮、打卡时间线集成
- `timeline-lazy-load`: 打卡记录懒加载——分批数据获取、无限滚动 / 加载更多按钮、加载状态 UI

### Modified Capabilities
（无需修改现有 spec 级别的行为约束）

## Impact

- **路由**：`src/router.jsx` 新增 `/harvest/:id` 路由条目
- **页面**：新增 `src/pages/HarvestDetail.jsx`
- **组件**：`HabitOverviewList.jsx` 移除手风琴展开 + 内嵌 Timeline，改为导航跳转；`Timeline.jsx` 增加懒加载 props 与内部分页逻辑
- **存储工具**：`checkinStorage.js` 可能新增分页查询辅助函数（如 `getCheckinsWithNotesPaged`）
- **样式**：`App.css` 新增详情页样式（`.harvest-detail`），调整 `.overview-card` 点击态（去除展开 indicator）
- **依赖**：无新外部依赖，使用 `IntersectionObserver` 原生 API 实现滚动检测
