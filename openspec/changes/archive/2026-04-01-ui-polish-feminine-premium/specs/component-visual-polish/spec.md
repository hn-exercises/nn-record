## ADDED Requirements

### Requirement: 习惯卡片视觉升级
习惯卡片（`.habit-tile`）SHALL 使用玻璃拟态背景（半透明白 + backdrop-filter blur）替代现有 color-mix 纯色背景。左侧或顶部 SHALL 有一条 4px 宽的习惯主题色渐变装饰条。圆角 SHALL 增大到 24px。

#### Scenario: 卡片呈现玻璃质感
- **WHEN** 用户查看今日记的习惯卡片
- **THEN** 卡片为半透明白底 + 模糊 + 习惯色装饰条 + 24px 大圆角

### Requirement: 新增卡片呼吸动效
"＋ 新增习惯"卡片的虚线边框 SHALL 有柔和的呼吸动效（opacity 在 0.4 到 1 之间循环，周期 2s），吸引用户注意。

#### Scenario: 新增卡片视觉引导
- **WHEN** 用户查看今日记页面的新增习惯卡片
- **THEN** 虚线边框有明暗呼吸循环效果

### Requirement: CheckinModal 视觉升级
打卡弹窗 SHALL 将左侧色条改为顶部渐变横幅（高度 8px，习惯色到透明渐变）；弹窗背景改为玻璃拟态；textarea 焦点态有柔和色彩光晕；打卡按钮使用渐变背景。

#### Scenario: 打卡弹窗更精致
- **WHEN** 用户打开打卡弹窗
- **THEN** 弹窗顶部有习惯色渐变横幅，整体为玻璃拟态，按钮为渐变色

### Requirement: 日历选中日期光晕效果
日历中被选中的日期 SHALL 使用柔和的品牌色光晕（box-shadow glow）替代简单描边，同时保留现有的缩放效果。

#### Scenario: 选中日期有光晕
- **WHEN** 用户在日历中点选某个日期
- **THEN** 该日期具有品牌色柔和光晕 + 缩放效果

### Requirement: 日历有标记日期彩色圆点
有打卡记录的日期 SHALL 在数字下方显示对应习惯颜色的小圆点（3-4px），多习惯则显示多个小圆点排列，替代现有的全格背景色方案。

#### Scenario: 有打卡的日期显示彩色圆点
- **WHEN** 用户查看日历，某日有两个习惯的打卡
- **THEN** 该日期数字下方显示两个不同颜色的小圆点

### Requirement: 表单输入框视觉升级
所有文本输入框 SHALL 使用内阴影（`inset 0 2px 4px rgba(0,0,0,0.04)`）替代纯边框，焦点态有品牌色柔和光晕（与 CheckinModal textarea 一致）；圆角增大至 14px。

#### Scenario: 输入框焦点态光晕
- **WHEN** 用户点击输入框获得焦点
- **THEN** 输入框边框变为品牌色 + 外围有品牌色柔和光晕

### Requirement: 色彩选择器选中动效
色彩选择器的选中色块 SHALL 有弹性缩放（scale 1.2）+ 外圈白色环 + 品牌色阴影光晕的组合效果，使用 `--ease-bounce` 缓动过渡。

#### Scenario: 选中颜色有弹性反馈
- **WHEN** 用户在 HabitForm 中选择一个颜色
- **THEN** 该色块弹性放大 + 显示白色外环和柔和阴影

### Requirement: 收获集图表卡片视觉统一
收获集中的所有图表卡片（松树图、趋势线、甜甜圈、渔获区）SHALL 使用与习惯卡片一致的玻璃拟态样式，圆角 20px，统一阴影。

#### Scenario: 图表卡片与整体风格一致
- **WHEN** 用户查看收获集图表模式
- **THEN** 所有图表卡片呈现统一的玻璃拟态风格

### Requirement: Timeline 视觉增强
Timeline 的时间轴线条 SHALL 改用渐变色（从习惯色到透明），节点圆点 SHALL 增加白色内圈（环形效果），使时间轴更精致。

#### Scenario: Timeline 渐变轴线
- **WHEN** 用户查看打卡 Timeline
- **THEN** 时间轴竖线为渐变色（上深下浅），节点为带白色内圈的彩色环

### Requirement: 页面标题装饰
每个页面的标题（今日记/时光补/收获集）旁 SHALL 有一个小装饰元素（emoji 或 CSS 绘制的小图形），与标题文字形成视觉组合。

#### Scenario: 标题区域有装饰元素
- **WHEN** 用户查看页面标题
- **THEN** 标题旁有匹配主题的装饰元素（如今日记旁有小星星装饰）

### Requirement: 自定义滚动条
应用在 WebKit 浏览器中 SHALL 使用自定义滚动条样式：宽度 4px、圆角、半透明品牌色 thumb、透明 track。

#### Scenario: 滚动时显示精致滚动条
- **WHEN** 用户在内容区域滚动
- **THEN** 滚动条为 4px 宽的圆角品牌色半透明条

### Requirement: 文本选中色彩
应用 SHALL 自定义 `::selection` 伪元素，选中文本背景为品牌粉色半透明（`rgba(255,107,157,0.2)`），文字颜色不变。

#### Scenario: 用户选中文本
- **WHEN** 用户用鼠标拖选页面上的文字
- **THEN** 选中区域背景为淡粉色
