## ADDED Requirements

### Requirement: 水彩色板 CSS 变量

`:root` 中 SHALL 定义以下 8 个水彩色板 CSS 变量：
- `--marker-coral`: `#FF6B6B`
- `--marker-orange`: `#FFA94D`
- `--marker-yellow`: `#FFD43B`
- `--marker-green`: `#69DB7C`
- `--marker-teal`: `#63E6BE`
- `--marker-blue`: `#74C0FC`
- `--marker-lavender`: `#B197FC`
- `--marker-pink`: `#F06595`

旧变量（`--marker-mustard`、`--marker-terracotta`、`--marker-mint`、`--marker-sky`、`--marker-forest`、`--marker-charcoal`）SHALL 被移除。

#### Scenario: CSS 变量定义正确
- **WHEN** 页面加载完成
- **THEN** `getComputedStyle(document.documentElement)` 中 SHALL 存在上述 8 个变量及其对应值

### Requirement: 预设颜色数组同步

`HabitForm.jsx` 中 `PRESET_COLORS` 数组 SHALL 包含上述 8 个色值，顺序一致。
`confetti.js` 中颜色数组 SHALL 同步更新为上述 8 个色值。

#### Scenario: 习惯创建时颜色选择器展示新色板
- **WHEN** 用户打开习惯创建表单
- **THEN** 颜色选择器 SHALL 展示 8 个水彩色板颜色

### Requirement: 默认颜色对齐

`habitStorage.js` 默认颜色 SHALL 为 `#FF6B6B`（coral）。
`Timeline.jsx` 默认颜色参数 SHALL 为 `#FF6B6B`。

#### Scenario: 新建习惯无指定颜色时使用默认色
- **WHEN** 新建习惯未指定颜色
- **THEN** 习惯颜色 SHALL 为 `#FF6B6B`

### Requirement: 硬编码色值替换

所有源文件中硬编码的旧色值（`#E8573A`、`#F2B705` 等）SHALL 替换为新色板对应值。
`rgba(232, 87, 58, ...)` 形式的阴影 SHALL 更新为新主色 `rgba(255, 107, 107, ...)`。

#### Scenario: SVG 元素使用新色值
- **WHEN** 渲染 HarvestHome 页面 SVG
- **THEN** stroke 和 fill SHALL 使用 `#FF6B6B` 而非 `#E8573A`

### Requirement: 项目名称为"点点"

HTML title SHALL 为 "点点"。
PWA manifest `name` SHALL 为 "点点"，`short_name` SHALL 为 "点点"。
`package.json` 的 `name` 字段 SHALL 为 `dian-dian`。

#### Scenario: 浏览器标签页显示"点点"
- **WHEN** 用户在浏览器中打开应用
- **THEN** 标签页标题 SHALL 显示 "点点"

#### Scenario: PWA 安装名称为"点点"
- **WHEN** 用户安装 PWA
- **THEN** 应用名称 SHALL 显示 "点点"
