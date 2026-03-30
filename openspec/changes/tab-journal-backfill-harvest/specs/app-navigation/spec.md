## MODIFIED Requirements

### Requirement: 底部导航栏
底部 Tab 导航栏 MUST 展示三个 Tab：「今日记」「时光补」「收获集」。

#### Scenario: 导航栏展示
- **WHEN** 用户打开应用
- **THEN** 底部显示导航栏，包含「今日记」(/)、「时光补」(/backfill)、「收获集」(/harvest) 三个入口

#### Scenario: 点击导航切换页面
- **WHEN** 用户点击底部导航的某一 Tab
- **THEN** 应用切换到对应模块的页面，当前 Tab 高亮显示

### Requirement: 默认路由
应用 MUST 在无特定路由时默认显示今日记首页。

#### Scenario: 首次访问
- **WHEN** 用户首次打开应用或访问根路径
- **THEN** 应用显示今日记首页

## ADDED Requirements

### Requirement: 时光补独立路由
时光补（补卡日历）MUST 作为独立的 Tab 路由 /backfill，不再是首页的子路由。

#### Scenario: 时光补路由
- **WHEN** 路由配置初始化
- **THEN** /backfill 路由指向补卡日历页面组件

### Requirement: 收获集路由
收获集统计页面 MUST 注册为 /harvest 路由。

#### Scenario: 收获集路由
- **WHEN** 路由配置初始化
- **THEN** /harvest 路由指向收获集页面组件

## EXISTING Requirements (unchanged)

### Requirement: 路由与 URL 同步
应用 MUST 使用 Hash 路由将当前页面状态同步到 URL，支持浏览器前进后退。

#### Scenario: URL 反映当前页面
- **WHEN** 用户导航到某个页面
- **THEN** 浏览器 URL 的 hash 部分更新为对应路由路径

### Requirement: Garfish 子应用路由兼容
路由方案 MUST 兼容 Garfish 子应用的 basename 隔离机制。

#### Scenario: 作为 Garfish 子应用加载
- **WHEN** 主应用通过 Garfish 加载本应用并传入 basename
- **THEN** 应用内所有路由正常工作，不与主应用路由冲突

### Requirement: 习惯详情页路由
路由配置 MUST 保留 /habit/:id 路由，用于展示单个习惯详情。

#### Scenario: 详情页路由注册
- **WHEN** 路由配置初始化
- **THEN** /habit/:id 路由指向 HabitDetail 页面组件
