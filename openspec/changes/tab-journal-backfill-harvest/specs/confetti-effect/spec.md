## MODIFIED Requirements

### Requirement: 打卡撒花触发
打卡成功时 MUST 触发全屏撒花动效，每次打卡都触发（不再限制每天一次）。

#### Scenario: 每次打卡触发撒花
- **WHEN** 用户在今日记首页点击打卡按钮
- **THEN** 每次点击成功后都触发一次撒花动效

#### Scenario: 详情页打卡触发撒花
- **WHEN** 用户在习惯详情页点击打卡按钮
- **THEN** 每次点击成功后都触发一次撒花动效

#### Scenario: 补卡触发撒花
- **WHEN** 用户在时光补页面完成补卡
- **THEN** 触发一次撒花动效

## EXISTING Requirements (unchanged)

### Requirement: 多巴胺色系粒子
撒花动效 MUST 使用多巴胺色系（粉、绿、黄、紫、橙、蓝、桃、丁香）作为粒子颜色。

#### Scenario: 粒子颜色
- **WHEN** 撒花动效触发
- **THEN** 粒子使用 8 种多巴胺色系颜色
