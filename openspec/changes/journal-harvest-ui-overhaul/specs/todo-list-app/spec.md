## MODIFIED Requirements

### Requirement: 日历多色渐变标记
日历组件 MUST 使用柔和自然过渡的渐变方式标记有打卡记录的日期，替代硬色带 radial-gradient。

#### Scenario: 单色标记
- **WHEN** 某日期仅有一个习惯打卡
- **THEN** 日期单元格使用该颜色的低透明度背景（color-mix），保持原方案

#### Scenario: 多色柔和渐变
- **WHEN** 某日期有 2-4 个习惯打卡（颜色为 A、B、C…）
- **THEN** 日期单元格使用 `linear-gradient(135deg, A, B, C…)` 对角线柔和过渡，颜色间无硬断点

### Requirement: 选中日期增强样式
选中日期 MUST 展示独立于习惯颜色的高亮样式，确保辨识度。

#### Scenario: 选中有标记的日期
- **WHEN** 用户点击一个有打卡记录（有渐变色）的日期
- **THEN** 该日期单元格展示缩放效果（scale 1.15）和双层环高亮（白色内环 + 粉色外环 box-shadow），z-index 提升

#### Scenario: 选中无标记的日期
- **WHEN** 用户点击一个无打卡记录的日期
- **THEN** 该日期单元格展示相同的缩放和双层环高亮效果

### Requirement: 今日记色块简化展示
今日记页面的习惯色块 MUST 仅展示名称和寄语，移除打卡按钮和计数信息。

#### Scenario: 色块内容
- **WHEN** 今日记页面渲染习惯色块
- **THEN** 色块仅显示习惯名称、寄语文本、右下角"前去打卡"文案提示

#### Scenario: 色块不含打卡按钮
- **WHEN** 今日记页面渲染习惯色块
- **THEN** 色块上不存在打卡按钮、累计次数和今日次数文本

### Requirement: 今日记色块卡片样式
今日记习惯色块 MUST 具有卡片感的视觉样式，包含阴影和层次感。

#### Scenario: 卡片阴影效果
- **WHEN** 习惯色块渲染
- **THEN** 色块具有圆角、投影阴影（box-shadow）和微妙的边框或内阴影，呈现卡片层次感
