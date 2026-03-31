## ADDED Requirements

### Requirement: 底部导航栏
应用 MUST 提供底部 Tab 导航栏，用户可在主要功能模块间快速切换。

#### Scenario: 导航栏展示
- **WHEN** 用户打开应用
- **THEN** 底部显示导航栏，包含"习惯打卡"、"待办计划"、"Todo List"三个入口

#### Scenario: 点击导航切换页面
- **WHEN** 用户点击底部导航的某一 Tab
- **THEN** 应用切换到对应模块的页面，当前 Tab 高亮显示

### Requirement: 路由与 URL 同步
应用 MUST 使用 Hash 路由将当前页面状态同步到 URL，支持浏览器前进后退。

#### Scenario: URL 反映当前页面
- **WHEN** 用户导航到待办计划页面
- **THEN** 浏览器 URL 的 hash 部分更新为对应路由路径

#### Scenario: 浏览器后退
- **WHEN** 用户从待办计划页面按下浏览器后退按钮
- **THEN** 应用返回上一个访问的页面

### Requirement: 默认路由
应用 MUST 在无特定路由时默认显示习惯打卡首页。

#### Scenario: 首次访问
- **WHEN** 用户首次打开应用或访问根路径
- **THEN** 应用显示习惯打卡首页

### Requirement: Garfish 子应用路由兼容
路由方案 MUST 兼容 Garfish 子应用的 basename 隔离机制。

#### Scenario: 作为 Garfish 子应用加载
- **WHEN** 主应用通过 Garfish 加载本应用并传入 basename
- **THEN** 应用内所有路由正常工作，不与主应用路由冲突
