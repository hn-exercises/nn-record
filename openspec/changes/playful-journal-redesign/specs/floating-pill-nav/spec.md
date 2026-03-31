## ADDED Requirements

### Requirement: 悬浮胶囊形态
底部导航 SHALL 从全宽白底横条改为居中悬浮的胶囊形态。

#### Scenario: 胶囊渲染
- **WHEN** 应用在任意页面
- **THEN** 底导 SHALL 以 `width: fit-content` 居中显示
- **THEN** 底导背景色 SHALL 为 `#1A1A1A`（近乎纯黑）
- **THEN** `border-radius` SHALL ≥ `28px`（全圆角胶囊形）
- **THEN** 底导 SHALL 悬浮于页面底部，距离底边 ≥ `16px`（加上 safe-area-inset）

#### Scenario: 胶囊阴影
- **WHEN** 底导渲染
- **THEN** 底导 SHALL 显示 `0 8px 32px rgba(0,0,0,0.3)` 的投影

### Requirement: 仅图标导航
胶囊底导 SHALL 仅显示图标，不显示文字标签，以保持紧凑的胶囊造型。

#### Scenario: 图标展示
- **WHEN** 底导渲染
- **THEN** 每个导航项 SHALL 仅显示 SVG 图标
- **THEN** 图标颜色 SHALL 为 `rgba(255,255,255,0.6)`（半透明白色）
- **THEN** 文字标签（`.bottom-nav__label`） SHALL 被隐藏（`display: none` 或同等效果）

#### Scenario: 当前页高亮
- **WHEN** 用户处于某个 Tab 对应的页面
- **THEN** 该 Tab 的图标颜色 SHALL 变为 `#FFFFFF`（纯白）
- **THEN** 该 Tab 图标下方 SHALL 显示一个白色圆点指示器

### Requirement: 胶囊内间距
胶囊内各导航项之间 SHALL 保持舒适间距。

#### Scenario: 导航项布局
- **WHEN** 底导渲染
- **THEN** 胶囊内边距 SHALL 为 `10px 32px`
- **THEN** 各导航项之间的间距 SHALL ≥ `24px`
- **THEN** 每个图标点击区域 SHALL ≥ `44px × 44px`（满足移动端可点击性要求）

### Requirement: 底导与页面内容不遮挡
悬浮底导 MUST NOT 遮挡页面最底部的有效内容。

#### Scenario: 内容底部留白
- **WHEN** 页面内容渲染
- **THEN** 页面底部 padding SHALL 足够大（≥ `100px`）以确保最后一个卡片不被底导遮挡
