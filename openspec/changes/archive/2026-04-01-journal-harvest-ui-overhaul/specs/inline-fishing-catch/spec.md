## ADDED Requirements

### Requirement: 内嵌渔获区域展示
内嵌渔获区域 MUST 以大长条色块形式渲染在图表模式中，替代原浮动卡片组件。

#### Scenario: 默认状态展示
- **WHEN** 内嵌渔获区域首次渲染
- **THEN** 显示圆角大色块区域，居中展示 🎣 图标和"点击获取渔获"提示文字

### Requirement: 点击获取渔获文案
用户点击内嵌渔获区域 MUST 调用 fetchInsight 并在区域内展示返回的 emoji 和文案。

#### Scenario: 首次点击获取文案
- **WHEN** 用户点击处于默认状态的渔获区域
- **THEN** 调用 fetchInsight()，区域内展示返回的 emoji 和文案文本

#### Scenario: 再次点击刷新文案
- **WHEN** 用户点击已展示文案的渔获区域
- **THEN** 调用 fetchInsight() 获取新文案，区域内容更新为新的 emoji 和文案

### Requirement: 无自动关闭
内嵌渔获区域 MUST NOT 自动关闭或自动隐藏已展示的文案。

#### Scenario: 文案持久展示
- **WHEN** 渔获文案已展示
- **THEN** 文案保持展示状态，直到用户再次点击刷新

### Requirement: 移除浮动渔获组件
原 FishingCatch 浮动卡片组件 MUST 从收获集页面移除。

#### Scenario: 无浮动按钮
- **WHEN** 收获集页面渲染
- **THEN** 页面中不存在固定定位的"🎣 渔获"按钮和 slide-in 浮动卡片
