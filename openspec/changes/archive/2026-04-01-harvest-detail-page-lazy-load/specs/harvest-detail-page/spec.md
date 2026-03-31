## ADDED Requirements

### Requirement: 收获集详情页路由
系统 SHALL 在 `/harvest/:id` 路由下渲染 `HarvestDetail` 页面，其中 `:id` 为习惯的唯一标识符。

#### Scenario: 正常导航到详情页
- **WHEN** 用户在收获集概览中点击某个习惯卡片
- **THEN** 应用跳转至 `/harvest/<habitId>` 路由，渲染对应习惯的详情页

#### Scenario: 直接访问详情页 URL
- **WHEN** 用户通过 URL 直接访问 `/harvest/<habitId>`
- **THEN** 系统从 localStorage 加载该习惯数据并正常渲染详情页

#### Scenario: 习惯不存在
- **WHEN** URL 中的 habitId 在 localStorage 中不存在
- **THEN** 页面显示"习惯不存在或已被删除"提示，并提供返回收获集的按钮

### Requirement: 详情页展示习惯摘要信息
详情页 SHALL 展示习惯的名称、座右铭（motto）、开始日期、主题颜色、累计打卡次数、今日打卡状态。

#### Scenario: 展示完整习惯信息
- **WHEN** 详情页加载完成
- **THEN** 页面显示习惯名称、座右铭（如有）、开始日期、累计打卡次数和今日打卡状态

### Requirement: 详情页操作按钮
详情页 SHALL 提供编辑和删除操作。

#### Scenario: 编辑习惯
- **WHEN** 用户点击"编辑"按钮
- **THEN** 弹出 HabitForm 编辑弹窗，提交后更新习惯数据并刷新页面

#### Scenario: 删除习惯
- **WHEN** 用户点击"删除"按钮
- **THEN** 弹出确认对话框；确认后删除习惯及其全部打卡记录，然后导航回收获集

### Requirement: 详情页内嵌打卡时间线
详情页 SHALL 以懒加载模式展示该习惯的全部打卡时间线。

#### Scenario: 详情页渲染时间线
- **WHEN** 详情页加载完成
- **THEN** 页面展示该习惯的打卡时间线，启用懒加载（lazy 模式）

### Requirement: 概览卡片点击跳转
概览列表中的习惯卡片点击后 SHALL 跳转到 `/harvest/:id` 详情页，而非在原地展开手风琴。

#### Scenario: 卡片点击导航
- **WHEN** 用户在收获集概览列表中点击某个习惯卡片
- **THEN** 应用导航至 `/harvest/<habitId>`，概览页不展开任何内容

### Requirement: 详情页返回导航
详情页 SHALL 提供固定返回按钮，点击后导航回 `/harvest`。

#### Scenario: 返回收获集
- **WHEN** 用户在详情页点击"← 返回收获集"按钮
- **THEN** 应用导航至 `/harvest` 路由
