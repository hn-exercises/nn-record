## ADDED Requirements

### Requirement: 全屏编辑面板
用户新增/编辑习惯时，系统 SHALL 弹出一个近全屏的编辑面板（而非当前的小型模态表单）。

#### Scenario: 面板打开
- **WHEN** 用户点击首页"新增"卡片
- **THEN** 系统 SHALL 展示一个覆盖全屏（或近全屏）的编辑面板
- **THEN** 面板 SHALL 有入场动画（从底部滑入）

#### Scenario: 面板关闭
- **WHEN** 用户点击"返回"按钮或面板外区域
- **THEN** 面板 SHALL 以退场动画关闭（向下滑出）
- **THEN** 未保存的内容 SHALL 被丢弃

### Requirement: 所见即所得卡片预览
编辑面板上半部分 SHALL 展示一个实时预览区，显示用户正在创建的习惯卡片最终效果。

#### Scenario: 实时颜色预览
- **WHEN** 用户在色盘中切换颜色
- **THEN** 预览卡片的背景色 SHALL 立即更新为所选颜色

#### Scenario: 实时文字预览
- **WHEN** 用户在名称输入框输入文字
- **THEN** 预览卡片中的习惯名称 SHALL 立即更新显示
- **THEN** 名称 SHALL 使用 `ZCOOL KuaiLe` 字体渲染，字号 ≥ `1.6rem`，颜色为白色

#### Scenario: 实时 Emoji 预览
- **WHEN** 用户选择一个 Emoji
- **THEN** 预览卡片 SHALL 在名称上方显示该 Emoji

#### Scenario: 默认预览状态
- **WHEN** 编辑面板刚打开且用户未输入任何内容
- **THEN** 预览卡片 SHALL 显示第一个预设颜色（明黄 `#F2B705`）作为底色
- **THEN** 预览卡片 SHALL 显示占位文字"我的新习惯"

### Requirement: Emoji 快速选择
编辑面板 SHALL 提供一行预设 Emoji 供用户快速选择，同时支持手动输入。

#### Scenario: 预设 Emoji 行
- **WHEN** 编辑面板显示
- **THEN** 编辑区域 SHALL 展示一行预设 Emoji（≥ 15 个生活向 Emoji）
- **THEN** 预设 Emoji SHALL 涵盖运动、阅读、饮水、音乐、游戏、冥想等常见习惯场景

#### Scenario: Emoji 选择交互
- **WHEN** 用户点击某个预设 Emoji
- **THEN** 该 Emoji SHALL 被选中并高亮显示
- **THEN** 预览卡片 SHALL 立即更新显示该 Emoji

#### Scenario: 自定义 Emoji
- **WHEN** 用户不想使用预设 Emoji
- **THEN** 用户 SHALL 能够在名称输入框中直接输入 Emoji 字符

### Requirement: 高饱和色盘
编辑面板 SHALL 提供与全局马克笔色板一致的 8 色色盘供用户选择卡片底色。

#### Scenario: 色盘展示
- **WHEN** 编辑面板显示
- **THEN** 色盘 SHALL 展示 8 个高饱和预设色圆点
- **THEN** 当前选中色 SHALL 有放大 + 白色描边的高亮效果

#### Scenario: 选色交互
- **WHEN** 用户点击色盘中的某个颜色
- **THEN** 该颜色 SHALL 被选中
- **THEN** 预览卡片 SHALL 立即更新底色

### Requirement: 习惯数据模型扩展
系统 SHALL 在习惯数据模型中新增 `emoji` 字段，向后兼容现有数据。

#### Scenario: 新增习惯含 Emoji
- **WHEN** 用户创建新习惯并选择了 Emoji
- **THEN** 系统 SHALL 将 `emoji` 字段保存到 localStorage

#### Scenario: 旧数据无 Emoji 字段
- **WHEN** 系统读取不含 `emoji` 字段的旧习惯数据
- **THEN** 系统 SHALL 正常渲染，不显示 Emoji 区域
- **THEN** 系统 MUST NOT 报错或崩溃

### Requirement: 编辑已有习惯
系统 SHALL 支持通过相同的全屏编辑面板编辑已有习惯。

#### Scenario: 进入编辑模式
- **WHEN** 用户长按或通过详情页点击"编辑"某个习惯
- **THEN** 系统 SHALL 打开全屏编辑面板，并预填充该习惯的名称、寄语、Emoji 和颜色

#### Scenario: 保存编辑
- **WHEN** 用户修改内容后点击"完成"
- **THEN** 系统 SHALL 更新该习惯的数据
- **THEN** 首页卡片 SHALL 立即反映更新后的外观
