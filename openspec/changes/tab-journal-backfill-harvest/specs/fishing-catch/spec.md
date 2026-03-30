## ADDED Requirements

### Requirement: 渔获按钮
收获集页面 MUST 在底部展示一个「🎣 渔获」按钮，点击后触发随机打卡概览数据展示。

#### Scenario: 渔获按钮展示
- **WHEN** 用户在收获集页面
- **THEN** 页面底部显示一个固定的「🎣 渔获」按钮

### Requirement: 渔获卡片弹出
点击渔获按钮后，MUST 从底部滑入一个概览数据卡片，展示一条随机的打卡统计摘要。

#### Scenario: 点击展示渔获卡片
- **WHEN** 用户点击「🎣 渔获」按钮
- **THEN** 从底部滑入一个卡片，展示随机的打卡概览数据（如"你在阅读上已经坚持了 42 次！"）

#### Scenario: 渔获卡片自动收起
- **WHEN** 渔获卡片展示 3 秒后
- **THEN** 卡片自动向下滑出收起

#### Scenario: 手动关闭渔获卡片
- **WHEN** 用户点击渔获卡片上的关闭按钮
- **THEN** 卡片立即向下滑出收起

### Requirement: 渔获数据多样性
渔获模块 MUST 提供至少 5 种不同的模板句式，随机选取一种并填入实际数据展示。

#### Scenario: 多种模板展示
- **WHEN** 用户多次点击渔获按钮
- **THEN** 每次展示的内容可能不同，涵盖习惯累计次数、最近打卡、最勤劳的习惯等不同维度

### Requirement: 渔获异步接口预留
渔获数据获取 MUST 通过 `fetchInsight(): Promise<InsightData>` 接口封装，当前返回本地同步数据的 Promise，未来可替换为网络请求。

#### Scenario: 接口结构
- **WHEN** 渔获模块请求数据
- **THEN** 通过 await fetchInsight() 获取数据，返回值包含 text（展示文本）和 emoji（装饰表情）字段

### Requirement: 渔获卡片入场动画
渔获卡片 MUST 带有从底部滑入的入场动画，持续约 300ms。

#### Scenario: 动画效果
- **WHEN** 渔获卡片出现
- **THEN** 卡片从屏幕底部向上滑入，配合轻微的弹性效果（ease-out）
