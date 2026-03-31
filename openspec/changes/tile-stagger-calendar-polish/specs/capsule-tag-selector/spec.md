## ADDED Requirements

### Requirement: 胶囊标签形态
习惯选择器按钮 SHALL 使用全圆角胶囊形（border-radius: 999px），padding 随文字内容自然撑开，形成长短错落的视觉效果。

#### Scenario: 按钮为胶囊形
- **WHEN** 用户查看时光补页面的习惯选择区域
- **THEN** 每个习惯按钮 SHALL 为全圆角胶囊形，宽度随文字长度自适应

### Requirement: 默认态样式
未选中的习惯按钮 SHALL 显示为：白色背景（#FFFFFF）+ 对应习惯颜色的 2px 边框 + 黑色文字（var(--color-text)）。

#### Scenario: 未选中按钮样式
- **WHEN** 用户查看未选中的习惯按钮
- **THEN** 按钮 SHALL 为白底 + 颜色边框 + 黑字

### Requirement: 选中态样式
选中的习惯按钮 SHALL 显示为：对应习惯颜色的实色背景 + 白色文字（#FFFFFF）。

#### Scenario: 选中按钮样式
- **WHEN** 用户点击某个习惯按钮使其选中
- **THEN** 按钮 SHALL 变为对应颜色的实色背景 + 白色文字

### Requirement: 居中流式排列
习惯选择器容器 SHALL 使用 flexbox 居中对齐（justify-content: center），按钮之间保持适当间距，自然换行。

#### Scenario: 按钮居中展示
- **WHEN** 用户查看习惯选择器
- **THEN** 所有按钮 SHALL 居中排列，多行时每行居中

### Requirement: 移除 Emoji 选择器
新增习惯面板 SHALL NOT 包含 Emoji 选择区域。已有习惯的 emoji 数据 SHALL 继续在卡片上正常展示（向后兼容）。

#### Scenario: 新增习惯无 Emoji 选项
- **WHEN** 用户打开新增习惯面板
- **THEN** 面板 SHALL 不包含任何 Emoji 选择区域

#### Scenario: 旧数据 Emoji 仍然展示
- **WHEN** 已有习惯包含 emoji 字段
- **THEN** 今日记页面的习惯卡片 SHALL 继续显示该 emoji
