## EXISTING Requirements (from app-navigation)

### Requirement: 路由与 URL 同步
应用 MUST 使用 Hash 路由将当前页面状态同步到 URL，支持浏览器前进后退。

#### Scenario: URL 反映当前页面
- **WHEN** 用户导航到某个页面
- **THEN** 浏览器 URL 的 hash 部分更新为对应路由路径

#### Scenario: 浏览器后退
- **WHEN** 用户从详情页按下浏览器后退按钮
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

## MODIFIED Requirements

### Requirement: 底部导航栏精简（原：底部导航栏）
底部 Tab 导航栏 MUST 移除"待办计划"和"Todo List"入口，仅保留"习惯打卡"入口。导航栏组件本身保留，为后续扩展预留。

#### Scenario: 导航栏展示
- **WHEN** 用户打开应用
- **THEN** 底部显示导航栏，仅包含"习惯打卡"入口，不再展示"待办计划"和"Todo List"

#### Scenario: Tab 栏可扩展
- **WHEN** 后续需要增加新模块
- **THEN** 仅需在 BottomNav 组件的 tabs 配置中添加新项即可

## ADDED Requirements

### Requirement: 习惯详情页路由
路由配置 MUST 新增 `/habit/:id` 路由，用于展示单个习惯详情（含时间轴与编辑/删除功能）。

#### Scenario: 详情页路由注册
- **WHEN** 路由配置初始化
- **THEN** `/habit/:id` 路由指向 HabitDetail 页面组件

#### Scenario: 详情页返回
- **WHEN** 用户在详情页点击返回
- **THEN** 导航回习惯打卡首页
