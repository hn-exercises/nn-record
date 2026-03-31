## ADDED Requirements

### Requirement: 自定义 SVG 图标替代 emoji
底部导航的三个 Tab SHALL 使用内联 SVG path 图标替代 emoji（🎯→靶心图标，📅→日历图标，🏆→奖杯图标）。每个图标 SHALL 为 24×24 viewBox 的简洁线条风格，stroke 宽度 2px，默认灰色（`--color-text-secondary`），active 态为品牌色（`--dopamine-pink`）。

#### Scenario: 底部导航显示 SVG 图标
- **WHEN** 用户查看底部导航栏
- **THEN** 三个 Tab 各显示一个 SVG 线条图标，非 emoji

#### Scenario: 图标颜色随激活状态变化
- **WHEN** 某个 Tab 处于激活状态
- **THEN** 对应图标颜色变为品牌粉色（`--dopamine-pink`），非激活 Tab 图标为灰色

### Requirement: active 态圆点指示器
当前激活的 Tab SHALL 在图标下方显示一个 4px 直径的品牌色小圆点指示器，带 scale 0→1 入场动效（150ms，`--ease-bounce` 缓动）。

#### Scenario: 切换 Tab 时圆点出现
- **WHEN** 用户切换到某个 Tab
- **THEN** 该 Tab 图标下方出现一个品牌色小圆点，从 scale(0) 弹性放大到 scale(1)

#### Scenario: 离开 Tab 时圆点消失
- **WHEN** 用户离开某个 Tab 切换到其他
- **THEN** 原 Tab 的圆点消失

### Requirement: 导航栏视觉升级
底部导航栏 SHALL 增加上边缘柔和阴影（向上投射），背景改为玻璃拟态效果（半透明白 + backdrop-filter blur），内边距增加使触控区域更舒适（高度 ≥ 56px 不含安全区域）。

#### Scenario: 导航栏毛玻璃效果
- **WHEN** 用户在有渐变背景的页面上查看底部导航
- **THEN** 导航栏背景呈现毛玻璃效果，可隐约透出底层渐变色

### Requirement: Tab 标签字重优化
非激活 Tab 的标签文字 SHALL 使用 500 字重（medium），激活 Tab SHALL 使用 700 字重（bold），切换时平滑过渡。

#### Scenario: 字重区分激活状态
- **WHEN** 用户查看底部导航
- **THEN** 当前激活 Tab 标签为粗体，其余为中等字重
