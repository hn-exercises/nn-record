## ADDED Requirements

### Requirement: 暖色治愈系主色板
应用 MUST 定义以下 5 个 CSS 自定义属性作为全局主色板：
- `--nature-orange: #F98C53`（主色调 / CTA）
- `--nature-green: #D2E0AA`（成功态 / 成长）
- `--nature-blue: #ABD7FB`（信息态 / 数据）
- `--nature-peach: #FCCEB4`（辅助色 / 点缀）
- `--nature-cream: #F9F2EF`（基底色 / 全局背景）

#### Scenario: 主色板变量声明
- **WHEN** 检查 `:root` 中的 CSS 自定义属性
- **THEN** 上述 5 个变量 MUST 存在且色值正确

#### Scenario: 多巴胺色系变量移除
- **WHEN** 搜索整个样式表中的 `--dopamine-` 前缀变量
- **THEN** 不存在任何 `--dopamine-` 变量的声明或引用

### Requirement: 全局背景为纯色暖白
应用 MUST 使用 `--nature-cream`（`#F9F2EF`）作为全局 `body` 背景色，不使用渐变。

#### Scenario: 页面背景渲染
- **WHEN** 用户打开应用任意页面
- **THEN** `body` 背景为纯色 `#F9F2EF`，不存在 `linear-gradient` 背景

#### Scenario: 渐变变量移除
- **WHEN** 检查 `:root` 中的 CSS 自定义属性
- **THEN** `--gradient-page` 变量 MUST 不存在

### Requirement: 卡片质感为实底暖白 + 超大圆角 + 色彩化弥散阴影
所有卡片类组件（`.habit-tile`、`.calendar`、`.habit-form`、`.harvest-chart`、`.overview-card`、`.checkin-modal`、`.habit-detail__card`、`.harvest-detail__card`、`.confirm-dialog`、`.checkin-confirm`、`.overview-detail`、`.day-records`）MUST 满足以下视觉标准：
- 背景为纯白 `#FFFFFF`（不使用 `rgba` 半透明白）。
- 不使用 `backdrop-filter` 或 `-webkit-backdrop-filter`。
- 不使用 `--glass-border` 描边（边框为 `none` 或仅用于语义区分的色彩边框）。
- 圆角 MUST ≥ 22px（大卡片 MUST ≥ 28px）。
- 阴影 MUST 使用暖色系 `rgba(249, 140, 83, ...)` 而非黑灰 `rgba(0, 0, 0, ...)`。

#### Scenario: 习惯瓷片卡片样式
- **WHEN** 检查 `.habit-tile` 的 computed style
- **THEN** `background` 为 `#FFFFFF`，`backdrop-filter` 为 `none`，`border-radius` ≥ `24px`，`box-shadow` 包含暖色 rgba 值

#### Scenario: 玻璃拟态变量移除
- **WHEN** 搜索整个样式表中的 `--glass-blur` 和 `--glass-border`
- **THEN** 不存在任何声明或引用

### Requirement: 阴影系统为色彩化弥散阴影
全局阴影变量 MUST 使用暖橙色系：
- `--shadow-soft: 0 4px 20px rgba(249, 140, 83, 0.06)`
- `--shadow-medium: 0 8px 30px rgba(249, 140, 83, 0.10)`
- `--shadow-glow: 0 0 20px rgba(249, 140, 83, 0.15)`

#### Scenario: 阴影变量色值
- **WHEN** 检查 `:root` 中的阴影变量
- **THEN** 所有阴影变量 MUST 使用 `rgba(249, 140, 83, ...)` 色彩成分

### Requirement: 交互反馈色统一为暖橙系
所有交互反馈场景（包括 `input:focus` 环、`is-today` 脉冲动画、`is-selected` 高亮、滚动条、文本选中、底部导航激活态、空状态虚线边框、色块选中光晕）MUST 使用 `--nature-orange`（`#F98C53`）或其透明度变体，不使用 `#FF6B9D` 或 `rgb(255, 107, 157)` 系列。

#### Scenario: 输入框 focus 状态
- **WHEN** 用户聚焦到输入框
- **THEN** focus 光环颜色为 `rgba(249, 140, 83, 0.12)`

#### Scenario: 日历今日脉冲
- **WHEN** 日历渲染当天格子
- **THEN** `is-today` 边框和脉冲动画颜色基于 `rgba(249, 140, 83, ...)`

#### Scenario: 底部导航激活态
- **WHEN** 用户处于某个 Tab 页
- **THEN** 激活的导航项文字颜色为 `--nature-orange`，背景为 `rgba(249, 140, 83, 0.08)`

#### Scenario: 滚动条颜色
- **WHEN** 页面出现滚动条
- **THEN** 滚动条 thumb 颜色为 `rgba(249, 140, 83, 0.25)`

### Requirement: 底部导航栏为实底暖白
`.bottom-nav` MUST 使用纯白实底 + 暖色阴影，不使用毛玻璃效果。

#### Scenario: 底部导航栏样式
- **WHEN** 检查 `.bottom-nav` 的 computed style
- **THEN** `background` 为纯白或 `#FFFFFF`，`backdrop-filter` 为 `none`

### Requirement: 排版留白增大
应用 MUST 在全局层面增大组件内边距和间距，以提升呼吸感：
- `.app-layout__content` 水平 padding MUST ≥ 20px。
- `.habit-tile` padding MUST ≥ `28px 20px`。
- `.habit-grid` gap MUST ≥ 16px。
- 卡片类组件内 padding MUST ≥ 22px。

#### Scenario: 习惯网格间距
- **WHEN** 检查 `.habit-grid` 的 gap 值
- **THEN** gap MUST ≥ `16px`

#### Scenario: 卡片内边距
- **WHEN** 检查 `.calendar` 的 padding 值
- **THEN** padding MUST ≥ `22px`

### Requirement: backdrop-filter 降级规则移除
`@supports not (backdrop-filter: blur(1px))` 规则块 MUST 被移除，因为不再使用 backdrop-filter。

#### Scenario: 降级规则不存在
- **WHEN** 搜索整个样式表中的 `@supports not`
- **THEN** 不存在该规则块
