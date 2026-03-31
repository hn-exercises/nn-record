## ADDED Requirements

### Requirement: 竖版长方形卡片
习惯卡片 SHALL 使用竖版长方形纵横比（约 3:4），通过 CSS `aspect-ratio: 3 / 4` 实现。卡片 SHALL 设置 `min-height: 200px` 作为保底高度。

#### Scenario: 卡片渲染为竖版长方形
- **WHEN** 用户打开今日记页面
- **THEN** 每个习惯卡片 SHALL 显示为竖版长方形，纵横比约 3:4

#### Scenario: 新增卡片也为竖版长方形
- **WHEN** 页面底部显示「＋新增习惯」占位卡片
- **THEN** 该卡片 SHALL 与普通习惯卡片保持相同的竖版长方形尺寸

### Requirement: 奇偶列错落排布
习惯卡片网格 SHALL 保持 2 列布局，偶数位卡片（nth-child(even)）SHALL 添加向下偏移（margin-top: 32px），形成参差错落的视觉效果。

#### Scenario: 偶数卡片向下偏移
- **WHEN** 用户查看今日记页面的习惯网格
- **THEN** 第 2、4、6... 位置的卡片 SHALL 比相邻奇数位卡片向下偏移约 32px

#### Scenario: 单个卡片时无偏移
- **WHEN** 用户仅有 1 个习惯
- **THEN** 该卡片 SHALL 正常显示在第一列，无偏移

### Requirement: 预览卡片与今日记卡片一致
新增/编辑习惯面板中的预览卡片 SHALL 使用与今日记页面相同的竖版长方形样式（aspect-ratio: 3/4）。

#### Scenario: 预览卡片为竖版长方形
- **WHEN** 用户打开新增习惯面板
- **THEN** 上方预览卡片 SHALL 显示为竖版长方形，实时反映选中的颜色和名称
