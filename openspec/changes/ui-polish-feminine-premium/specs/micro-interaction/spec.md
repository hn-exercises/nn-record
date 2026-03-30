## ADDED Requirements

### Requirement: 统一缓动曲线变量
`:root` SHALL 定义两种缓动曲线 CSS 变量：`--ease-bounce`（`cubic-bezier(0.34, 1.56, 0.64, 1)`，用于弹性效果）和 `--ease-smooth`（`cubic-bezier(0.4, 0, 0.2, 1)`，用于平滑过渡）。所有组件的 transition/animation SHALL 统一引用这两个变量。

#### Scenario: 弹性缓动应用于交互元素
- **WHEN** 用户点击或 hover 卡片、按钮
- **THEN** 过渡使用 `--ease-bounce` 缓动，产生轻微过冲再回弹的弹性手感

### Requirement: 列表项 stagger 入场动画
习惯卡片网格和概览列表的子项 SHALL 使用 stagger（错开）方式入场，每项延迟 50ms，动画为从下方 12px 淡入上移（fade-up），持续 300ms。

#### Scenario: 今日记页面习惯卡片依次入场
- **WHEN** 用户进入今日记页面
- **THEN** 习惯卡片从下往上依次淡入出现，每张卡片间隔约 50ms

#### Scenario: 收获集概览卡片依次入场
- **WHEN** 用户查看收获集概览模式
- **THEN** 概览卡片按顺序依次淡入，产生流畅的视觉节奏

### Requirement: 日历今日脉冲动效
日历中「今日」单元格 SHALL 有一个循环的柔和脉冲环动效（pulse-ring），使用品牌色半透明扩散环，周期约 2s，让用户能快速定位今天。

#### Scenario: 今日日期有呼吸灯效果
- **WHEN** 用户查看日历月视图
- **THEN** 今日单元格外围有品牌粉色的柔和脉冲光圈，2s 循环

### Requirement: 打卡按钮涟漪反馈
打卡相关按钮（CheckinModal 打卡按钮、HabitDetail 打卡按钮）SHALL 在点击时产生从按下位置扩散的涟漪效果（CSS ::after pseudo-element 实现），持续约 400ms。

#### Scenario: 用户点击打卡按钮
- **WHEN** 用户按下打卡按钮
- **THEN** 从按压点扩散出一个半透明白色涟漪圈，400ms 后消失

### Requirement: 页签切换内容淡入
底部 Tab 切换时，新页面内容 SHALL 使用 fade-in 动画入场（opacity 0→1 + translateY 8px→0），持续约 200ms。

#### Scenario: 切换到不同标签页
- **WHEN** 用户点击底部导航切换页面
- **THEN** 新页面内容从下方微移淡入出现，过渡自然流畅

### Requirement: 弹窗入场弹性动效
所有弹窗（CheckinModal、HabitForm overlay、confirm-dialog）SHALL 使用弹性缩放入场（scale 0.95→1 + opacity 0→1），使用 `--ease-bounce` 缓动，持续 250ms。

#### Scenario: 打开打卡弹窗
- **WHEN** 用户点击习惯卡片触发 CheckinModal
- **THEN** 弹窗从略小尺寸弹性放大到正常大小入场

### Requirement: hover 微位移统一
所有可点击卡片元素 hover 时 SHALL 向上微移 2-3px（`translateY(-2px)`），配合阴影加深，使用 `--ease-smooth` 过渡，持续 200ms。

#### Scenario: hover 习惯卡片
- **WHEN** 用户鼠标悬停在习惯卡片上
- **THEN** 卡片向上微移 2-3px，阴影加深，过渡柔和
