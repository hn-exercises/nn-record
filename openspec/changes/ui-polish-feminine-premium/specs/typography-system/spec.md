## ADDED Requirements

### Requirement: 引入 Nunito 字体
应用 SHALL 通过 Google Fonts CDN 在 `index.html` 的 `<head>` 中引入 Nunito 字体，包含 400（regular）、600（semibold）、700（bold）三个字重。

#### Scenario: 字体链接存在于 HTML head
- **WHEN** 检查 `index.html` 的 `<head>` 标签
- **THEN** 存在指向 Google Fonts 的 `<link>` 标签，引入 Nunito:wght@400;600;700，且设置 `display=swap`

### Requirement: 全局 font-family 更新
`:root` 的 `font-family` SHALL 更新为 `'Nunito', 'SF Pro Rounded', 'PingFang SC', system-ui, sans-serif`，确保英文/数字优先使用 Nunito，中文使用系统圆体。

#### Scenario: 英文和数字使用 Nunito 渲染
- **WHEN** 页面上显示英文文字或数字
- **THEN** 使用 Nunito 字体渲染（圆润几何风格）

#### Scenario: 中文使用系统圆体
- **WHEN** 页面上显示中文文字
- **THEN** 使用 PingFang SC 或系统默认中文字体渲染

### Requirement: 标题排版层次
页面标题（h1）SHALL 使用 700 字重、1.2 行高；区块标题（h3）SHALL 使用 700 字重；正文 SHALL 使用 400 字重、1.6 行高。数字统计类文字 SHALL 使用 700 字重以形成视觉锚点。

#### Scenario: 页面标题视觉突出
- **WHEN** 用户查看页面标题（今日记/时光补/收获集）
- **THEN** 标题为 Nunito 700 字重，字号 clamp(1.5rem, 3vw, 2rem)，行高 1.2

### Requirement: 字间距与行间距系统
正文段落 SHALL 使用 `line-height: 1.6`；辅助文字（label/hint/caption）SHALL 使用 `letter-spacing: 0.02em`；大号数字 SHALL 使用 `letter-spacing: -0.02em`（数字紧凑感）。

#### Scenario: 辅助文字可读性
- **WHEN** 用户查看标签、提示、说明文字
- **THEN** 文字具有 0.02em 字间距，呈现松散舒适的阅读节奏
