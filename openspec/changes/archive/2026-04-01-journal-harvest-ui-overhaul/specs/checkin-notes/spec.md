## ADDED Requirements

### Requirement: 打卡记录支持可选文案
每条打卡记录 MUST 支持附带一个可选的文本备注字段（note）。

#### Scenario: 带文案打卡
- **WHEN** 调用 checkin(habitId, timestamp, "今天状态很好")
- **THEN** 存储记录包含 `{ ts: timestamp, note: "今天状态很好" }`

#### Scenario: 不带文案打卡
- **WHEN** 调用 checkin(habitId) 不传入文案参数
- **THEN** 存储记录包含 `{ ts: Date.now(), note: "" }`

### Requirement: 数据模型 v2 到 v3 自动迁移
系统 MUST 在加载数据时自动将 v2 格式（时间戳数组）迁移为 v3 格式（对象数组）。

#### Scenario: v2 数据自动迁移
- **WHEN** localStorage 中存储的数据版本为 2，records 值为 `{ habitId: [ts1, ts2] }`
- **THEN** 系统自动迁移为 `{ version: 3, records: { habitId: [{ ts: ts1, note: "" }, { ts: ts2, note: "" }] } }`

#### Scenario: v3 数据直接加载
- **WHEN** localStorage 中存储的数据版本为 3
- **THEN** 系统直接加载 records，不执行迁移

### Requirement: 现有 API 兼容性
所有现有 checkinStorage 导出函数 MUST 在 v3 数据结构下正常工作，返回值语义不变。

#### Scenario: getCheckins 返回时间戳数组
- **WHEN** 调用 getCheckins(habitId)
- **THEN** 返回该习惯的所有打卡时间戳数组 `number[]`（从对象数组提取 ts 字段）

#### Scenario: getTodayCount 返回今日次数
- **WHEN** 调用 getTodayCount(habitId)
- **THEN** 返回该习惯今日打卡次数（数字）

#### Scenario: getCheckinCount 返回累计次数
- **WHEN** 调用 getCheckinCount(habitId)
- **THEN** 返回该习惯累计打卡总次数（数字）

### Requirement: 获取打卡记录含文案
系统 MUST 提供 API 获取包含文案的完整打卡记录。

#### Scenario: 获取含文案的打卡记录
- **WHEN** 调用 getCheckinsWithNotes(habitId)
- **THEN** 返回 `{ ts: number, note: string }[]` 格式的完整记录数组

#### Scenario: 按日期获取含文案记录
- **WHEN** 调用 getCheckinsByDateWithNotes(habitId, dateStr)
- **THEN** 返回该日期下所有 `{ ts, note }` 记录
