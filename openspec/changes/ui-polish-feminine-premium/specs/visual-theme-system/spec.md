## ADDED Requirements

### Requirement: 渐变页面底色
应用 SHALL 使用从淡粉到淡紫到淡蓝的 160° 线性渐变作为全局页面背景色，取代纯白底色。渐变 SHALL 固定不随页面滚动（`background-attachment: fixed`）。

#### Scenario: 页面加载后显示渐变底色
- **WHEN** 用户打开任意页面
- **THEN** 页面背景呈现从左上淡粉（#FFF5F7）到中间淡紫（#F8F0FF）到右下淡蓝（#F0F7FF）的柔和渐变

#### Scenario: 滚动时渐变保持固定
- **WHEN** 用户在长页面上滚动内容
- **THEN** 背景渐变位置保持不变（fixed），仅内容区域滚动

### Requirement: 玻璃拟态卡片效果
所有卡片类容器（习惯卡片、日历、收获集图表卡片、表单弹窗）SHALL 使用半透明白色背景 + `backdrop-filter: blur(20px)` 实现玻璃拟态效果，在渐变底色上形成层次感。

#### Scenario: 卡片在渐变背景上呈现毛玻璃质感
- **WHEN** 用户查看任意包含卡片的页面
- **THEN** 卡片背景为半透明白色（rgba 85% 不透明度），可隐约透出渐变底色，且有 `blur(20px)` 模糊效果

#### Scenario: 不支持 backdrop-filter 的浏览器降级
- **WHEN** 用户的浏览器不支持 `backdrop-filter`
- **THEN** 卡片 SHALL 降级为纯白半透明背景（不带模糊），功能不受影响

### Requirement: 阴影层次体系
系统 SHALL 通过 CSS 变量定义三级阴影：`--shadow-soft`（静态卡片）、`--shadow-medium`（悬浮/弹窗）、`--shadow-glow`（品牌色辉光），所有组件 SHALL 统一引用这些变量。

#### Scenario: 静态卡片使用 soft 阴影
- **WHEN** 卡片处于默认状态
- **THEN** 应用 `--shadow-soft`（`0 4px 24px rgba(0,0,0,0.04)`）

#### Scenario: 悬浮状态使用 medium 阴影
- **WHEN** 用户 hover 一个可交互卡片
- **THEN** 阴影过渡到 `--shadow-medium`（`0 8px 32px rgba(0,0,0,0.08)`）

### Requirement: 渐变色 CSS 变量
`:root` SHALL 定义以下渐变/玻璃拟态相关 CSS 变量：`--gradient-page`、`--gradient-card`、`--glass-blur`、`--glass-border`、`--shadow-soft`、`--shadow-medium`、`--shadow-glow`。现有 `--dopamine-*` 变量 SHALL 保持不变。

#### Scenario: 新变量与现有变量共存
- **WHEN** 开发者检查 `:root` CSS 变量
- **THEN** 可见所有新增渐变/玻璃变量与原有 `--dopamine-*`、`--color-*` 变量共存，无覆盖

### Requirement: 按钮渐变背景
主要操作按钮（`.btn--primary`）SHALL 使用品牌色渐变背景（从 `--dopamine-pink` 到 `--dopamine-coral`），hover 时渐变角度微调产生流动感。

#### Scenario: 主按钮呈现渐变
- **WHEN** 用户查看页面中的主要操作按钮
- **THEN** 按钮背景为粉色到珊瑚色的渐变，而非纯色
