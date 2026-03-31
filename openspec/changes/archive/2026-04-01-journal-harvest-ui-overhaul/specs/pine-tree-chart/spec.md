## ADDED Requirements

### Requirement: 松树时间轴横向滚动展示
松树时间轴 MUST 以横向滚动的 SVG 形式展示最近 30 天的打卡数据。

#### Scenario: 横向滚动容器
- **WHEN** 松树时间轴渲染完成
- **THEN** 外层容器支持水平滚动，内部 SVG 宽度随天数动态计算

### Requirement: 每天一棵松树
每一天 MUST 对应一棵松树图形，由灰色树干和彩色三角形树冠组成。

#### Scenario: 有打卡的天展示完整松树
- **WHEN** 某天有至少一个习惯打卡
- **THEN** 该天绘制灰色长方形树干（宽约 8px，高约 40px）和由各习惯颜色三角形叠加的树冠

#### Scenario: 无打卡的天展示树桩
- **WHEN** 某天没有任何习惯打卡
- **THEN** 该天仅绘制灰色短树桩，不绘制彩色树冠

### Requirement: 三角形树冠叠加规则
树冠三角形 MUST 按习惯顺序从下往上叠加，每个打卡习惯对应一个三角形层。

#### Scenario: 多习惯叠加树冠
- **WHEN** 某天有 3 个不同习惯打卡（颜色分别为 A、B、C）
- **THEN** 底部三角形颜色为 A（最宽），中间为 B，顶部为 C（最窄），形成松树轮廓

#### Scenario: 单习惯树冠
- **WHEN** 某天仅 1 个习惯打卡
- **THEN** 树冠仅有一个该习惯颜色的三角形

### Requirement: 日期标签
每棵松树下方 MUST 显示日期标签。

#### Scenario: 日期格式
- **WHEN** 松树渲染完成
- **THEN** 树干下方显示 MM-DD 格式的日期文本

### Requirement: 纯 SVG 实现
松树时间轴 MUST 使用纯 SVG 实现，不引入外部图表库。

#### Scenario: SVG 渲染
- **WHEN** 组件挂载
- **THEN** 所有图形元素（树干、三角形、文本）均为 SVG 元素
