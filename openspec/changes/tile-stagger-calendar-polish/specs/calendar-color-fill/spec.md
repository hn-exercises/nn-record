## ADDED Requirements

### Requirement: 打卡日期渐变底色标记
日历中有打卡记录的日期 SHALL 使用该习惯对应颜色的渐变作为单元格背景（135° 方向），数字 SHALL 为白色（#FFFFFF）。多个习惯同日打卡时 SHALL 使用第一个习惯的颜色。

#### Scenario: 单习惯打卡日期显示
- **WHEN** 某日期有 1 个习惯的打卡记录
- **THEN** 该日期单元格 SHALL 显示该习惯颜色的渐变背景，数字为白色

#### Scenario: 多习惯同日打卡
- **WHEN** 某日期有多个习惯的打卡记录
- **THEN** 该日期单元格 SHALL 使用第一个习惯的颜色作为渐变背景

### Requirement: 移除打卡小圆点
日历单元格 SHALL NOT 显示颜色小圆点（`.calendar__dots`），打卡标记完全通过背景色呈现。

#### Scenario: 打卡日期无小圆点
- **WHEN** 用户查看日历中有打卡记录的日期
- **THEN** 该日期单元格 SHALL 仅显示渐变背景和白色数字，不显示任何小圆点

### Requirement: 移除打卡日期边框
有打卡记录的日历单元格 SHALL NOT 显示颜色边框（`border-color`），标记完全通过背景色区分。

#### Scenario: 打卡日期无边框
- **WHEN** 某日期有打卡记录
- **THEN** 该日期单元格 SHALL 无可见边框（border 保持 transparent）

### Requirement: 选中日期仅加粗
选中某一天时 SHALL 仅将数字加粗（font-weight: 800），SHALL NOT 显示边框、缩放或阴影效果。

#### Scenario: 选中普通日期
- **WHEN** 用户点击日历中某个日期
- **THEN** 该日期数字 SHALL 变为加粗（font-weight: 800），无边框、无缩放、无阴影

#### Scenario: 选中已打卡日期
- **WHEN** 用户点击日历中有打卡记录的日期
- **THEN** 该日期 SHALL 保留渐变背景和白色数字，同时数字加粗

### Requirement: 今日标记简化
今日（is-today）的样式 SHALL 与整体风格保持一致：仅加粗数字，不使用边框或脉冲动画。

#### Scenario: 今日日期显示
- **WHEN** 用户查看当前月份日历
- **THEN** 今日日期 SHALL 仅加粗数字，不显示边框或脉冲动画效果
