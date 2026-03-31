## ADDED Requirements

### Requirement: 双列色块网格
首页习惯列表 SHALL 采用 `grid-template-columns: repeat(2, 1fr)` 的双列网格布局，每个习惯占据一个完整网格单元。

#### Scenario: 网格渲染
- **WHEN** 首页加载且用户有 N 个习惯
- **THEN** 页面 SHALL 展示 N 个习惯色块卡片 + 1 个"新增"卡片，按 2 列网格排列
- **THEN** 网格间距 SHALL 为 `16px`

### Requirement: 沉浸式色块卡片
每个习惯卡片 SHALL 以该习惯的专属颜色作为卡片整体背景色（实心色块），而非当前的白底+色条模式。

#### Scenario: 卡片背景色
- **WHEN** 习惯数据包含 `color` 字段
- **THEN** 对应卡片的 `background-color` SHALL 为该色值
- **THEN** 卡片 MUST NOT 显示左侧色条伪元素（`::before`）

#### Scenario: 卡片内文字
- **WHEN** 卡片以高饱和色为底色渲染
- **THEN** 习惯名称 SHALL 使用 `#FFFFFF` 白色，字号 SHALL ≥ `1.6rem`，字体 SHALL 为 `ZCOOL KuaiLe`
- **THEN** 打气寄语 SHALL 使用 `rgba(255,255,255,0.8)` 半透明白色
- **THEN** 底部提示文字 SHALL 使用 `rgba(255,255,255,0.6)` 半透明白色

#### Scenario: Emoji 展示
- **WHEN** 习惯数据包含 `emoji` 字段
- **THEN** 卡片 SHALL 在名称上方显示该 Emoji，字号 SHALL ≥ `2rem`
- **WHEN** 习惯数据无 `emoji` 字段
- **THEN** 卡片 SHALL 不显示 Emoji 区域，名称直接居中

### Requirement: 卡片圆角与尺寸
习惯卡片 SHALL 采用超大圆角和适当的最小高度，营造圆润手帐贴纸感。

#### Scenario: 卡片几何参数
- **WHEN** 习惯卡片渲染
- **THEN** `border-radius` SHALL 为 `24px`
- **THEN** `min-height` SHALL 为 `180px`
- **THEN** 内边距 SHALL 为 `24px 20px`

### Requirement: 新增卡片融入网格
"新增习惯"入口 SHALL 作为网格中的最后一个卡片存在，而非独立的按钮或悬浮入口。

#### Scenario: 新增卡片样式
- **WHEN** 首页渲染
- **THEN** 网格最后一个单元 SHALL 为"新增"卡片
- **THEN** 新增卡片背景 SHALL 为浅灰半透明（`rgba(200,200,200,0.15)`）配虚线边框
- **THEN** 新增卡片中央 SHALL 显示大号 `+` 符号和"新增习惯"文字

#### Scenario: 新增卡片交互
- **WHEN** 用户点击"新增"卡片
- **THEN** 系统 SHALL 弹出习惯编辑面板（而非直接跳转）

### Requirement: 首页标题区
首页顶部 SHALL 显示大字号标题和治愈系副标题。

#### Scenario: 标题展示
- **WHEN** 首页加载
- **THEN** 页面 SHALL 显示标题「今日记」，字体为 `ZCOOL KuaiLe`，字号 ≥ `2rem`
- **THEN** 标题后 SHALL 跟随一个装饰性 Emoji
- **THEN** 标题下方 SHALL 显示一句碎碎念寄语，使用次要文字色
