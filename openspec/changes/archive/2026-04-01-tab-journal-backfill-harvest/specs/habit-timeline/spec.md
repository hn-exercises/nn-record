## MODIFIED Requirements

### Requirement: 时间轴展示打卡记录
习惯详情页的时间轴 MUST 适配时间戳格式，同一天有多条记录时分别展示每条的精确时间。

#### Scenario: 单日单次打卡展示
- **WHEN** 某天只有一条打卡记录
- **THEN** 时间轴节点显示日期（YYYY-MM-DD）和时间（HH:mm），带习惯颜色圆点

#### Scenario: 单日多次打卡展示
- **WHEN** 某天有多条打卡记录
- **THEN** 时间轴按时间戳倒序展示每条记录，每条显示精确时间（HH:mm）

#### Scenario: 旧数据（迁移后的 12:00 时间戳）
- **WHEN** 打卡记录为迁移后的 12:00:00 时间戳
- **THEN** 时间轴仅显示日期，不显示具体时间（或显示为"补卡"标记）

### Requirement: 时间轴按日期分组
时间轴 MUST 按日期分组展示，同一天的多条记录归属于同一个日期组。

#### Scenario: 日期分组
- **WHEN** 用户查看时间轴
- **THEN** 记录按天分组，每组显示日期标题，组内按时间倒序排列

## EXISTING Requirements (unchanged)

### Requirement: 时间轴倒序排列
时间轴 MUST 按时间从新到旧倒序展示打卡记录。

#### Scenario: 排列顺序
- **WHEN** 用户查看时间轴
- **THEN** 最近的打卡记录在最上方

### Requirement: 时间轴空状态
时间轴在无打卡记录时 MUST 显示引导提示。

#### Scenario: 无记录
- **WHEN** 该习惯没有任何打卡记录
- **THEN** 显示"还没有打卡记录，开始第一次打卡吧！"
