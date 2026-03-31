## 1. 基础架构搭建

- [x] 1.1 安装 `react-router-dom` 依赖
- [x] 1.2 创建应用路由配置文件 `src/router.jsx`，使用 HashRouter，定义所有路由路径
- [x] 1.3 重构 `src/main.jsx` 入口文件，集成 Router Provider
- [x] 1.4 创建底部 Tab 导航组件 `src/components/BottomNav.jsx` 及样式
- [x] 1.5 创建应用布局组件 `src/layouts/AppLayout.jsx`，包含页面内容区域与底部导航
- [x] 1.6 确保 Garfish 子应用生命周期（mount/unmount）与新路由方案兼容

## 2. 习惯打卡模块 — 数据层

- [x] 2.1 创建习惯数据存储工具 `src/utils/habitStorage.js`，实现习惯的增删查与 Local Storage 持久化（Storage Key: `habit-tracking/habits`）
- [x] 2.2 创建打卡记录存储工具 `src/utils/checkinStorage.js`，实现打卡记录的读写（Storage Key: `habit-tracking/checkins`），记录格式为 habitId → 日期字符串数组
- [x] 2.3 实现打卡去重逻辑：同一习惯同一日期不重复记录
- [x] 2.4 实现累计打卡天数计算：返回某习惯的打卡日期数组长度

## 3. 习惯打卡模块 — 页面与组件

- [x] 3.1 创建习惯打卡首页 `src/pages/HabitHome.jsx`，展示习惯列表与当日打卡按钮
- [x] 3.2 实现习惯卡片组件，展示习惯名称、寄语、开始时间、累计天数，使用用户选择的颜色作为卡片主色调
- [x] 3.3 实现当日一键打卡功能：点击后记录当天日期，按钮切换为已打卡状态
- [x] 3.4 创建新增习惯表单组件，包含名称、寄语、开始时间、颜色选择器
- [x] 3.5 创建补卡日历页面 `src/pages/HabitCalendar.jsx`
- [x] 3.6 实现轻量月历网格组件 `src/components/Calendar.jsx`，支持月份切换、日期选择，已打卡日期用习惯颜色标记
- [x] 3.7 实现补卡流程：选择日期 → 选择习惯 → 确认补卡，不允许选择未来日期

## 4. 待办计划模块 — 数据层

- [x] 4.1 创建待办数据存储工具 `src/utils/plannerStorage.js`，实现待办的增删改查与 Local Storage 持久化（Storage Key: `todo-planner/items`）
- [x] 4.2 实现排序逻辑：维护 `sortOrder` 字段，支持调整排序并更新所有项的 sortOrder
- [x] 4.3 实现截止日期推算逻辑：按 sortOrder 升序，从今天开始依次累加 `durationDays` 计算每项的推算截止日期
- [x] 4.4 实现完成标记逻辑：标记 `completed: true` 并记录 `completedAt` 时间戳

## 5. 待办计划模块 — 页面与组件

- [x] 5.1 创建待办计划页面 `src/pages/PlannerHome.jsx`，展示未完成待办列表（按排序）与新增入口
- [x] 5.2 实现待办卡片组件，展示事项名称、预计时长、推算截止日期
- [x] 5.3 实现排序交互：拖拽排序或上下移动按钮，排序变更后所有截止日期自动重算
- [x] 5.4 创建新增待办表单组件，包含名称和预计完成时长输入
- [x] 5.5 实现完成操作：点击确认完成后显示表扬反馈（emoji 🎉 + 鼓励文字）
- [x] 5.6 创建已完成事项页面 `src/pages/PlannerDone.jsx`，按完成时间倒序展示灰显条目

## 6. 原 Todo List 模块迁移

- [x] 6.1 将现有 `App.jsx` 中的 Todo List 逻辑提取为独立页面组件 `src/pages/TodoList.jsx`
- [x] 6.2 重构 `App.jsx` 为应用壳组件，仅包含路由与布局
- [x] 6.3 确保原有 Todo List 功能（增删改查、持久化）在迁移后正常工作

## 7. 样式与体验

- [x] 7.1 设计底部导航栏样式，当前 Tab 高亮
- [x] 7.2 设计习惯卡片样式，支持自定义颜色主题
- [x] 7.3 设计日历网格样式，打卡日期颜色标记
- [x] 7.4 设计待办列表样式，包含排序手柄/按钮、截止日期标签
- [x] 7.5 设计已完成事项灰显样式与表扬动效
- [x] 7.6 整体响应式适配，确保移动端 PWA 体验良好

## 8. 集成验证

- [x] 8.1 验证所有路由切换正常，浏览器前进后退可用
- [x] 8.2 验证习惯打卡全流程：创建 → 当日打卡 → 日历补卡 → 累计统计
- [x] 8.3 验证待办计划全流程：创建 → 排序 → 截止日期推算 → 完成 → 归档展示
- [x] 8.4 验证 Local Storage 数据各模块隔离，刷新后数据恢复正常
- [x] 8.5 验证 PWA 离线缓存覆盖新增页面与资源
- [x] 8.6 验证 Garfish 子应用 mount/unmount 生命周期正常
