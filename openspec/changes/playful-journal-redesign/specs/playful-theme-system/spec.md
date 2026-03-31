## ADDED Requirements

### Requirement: 高饱和马克笔色板
系统 SHALL 提供一套 8 色高饱和"马克笔色板"作为全局预设色，替代当前低饱和暖色系。色值如下：
- Mustard 明黄 `#F2B705`
- Terracotta 橘红 `#E8573A`
- Mint 薄荷绿 `#5EC6A0`
- Sky 天空蓝 `#5BA4F5`
- Lavender 薰衣草紫 `#A78BFA`
- Coral 珊瑚粉 `#F472B6`
- Forest 森林绿 `#3D9B6F`
- Charcoal 炭灰 `#4A4A4A`

所有色值与纯白文字 `#FFFFFF` 的对比度 MUST ≥ 4.5:1（WCAG AA 标准）。

#### Scenario: CSS 变量注册
- **WHEN** 应用加载
- **THEN** `:root` 中 SHALL 包含 `--marker-mustard`、`--marker-terracotta`、`--marker-mint`、`--marker-sky`、`--marker-lavender`、`--marker-coral`、`--marker-forest`、`--marker-charcoal` 共 8 个 CSS 变量

#### Scenario: 预设色数组
- **WHEN** 习惯新增/编辑面板展示色盘
- **THEN** `PRESET_COLORS` 数组 SHALL 包含上述 8 个色值

### Requirement: 圆润可爱标题字体
系统 SHALL 引入 `ZCOOL KuaiLe`（站酷快乐体）Web 字体作为标题字体。

#### Scenario: 字体加载
- **WHEN** 用户首次访问应用
- **THEN** 系统 SHALL 通过 Google Fonts CDN 加载 `ZCOOL KuaiLe` 字体
- **THEN** 字体加载策略 MUST 使用 `font-display: swap` 避免文字闪烁白屏

#### Scenario: 字体应用范围
- **WHEN** 页面渲染
- **THEN** 以下元素 SHALL 使用 `ZCOOL KuaiLe` 字体：页面标题（h1）、习惯卡片名称（`.habit-tile__name`）、打卡弹窗习惯名（`.checkin-modal__name`）
- **THEN** 正文、副标题、按钮等 SHALL 继续使用系统圆体字体栈（`Nunito` / `SF Pro Rounded` / `PingFang SC`）

### Requirement: 页面背景色
页面整体背景色 SHALL 保持温暖浅色调 `#FBF7F4`（微调后的奶油白），为高饱和色块提供干净底色。

#### Scenario: 背景渲染
- **WHEN** 应用在任意页面
- **THEN** `body` 背景色 SHALL 为 `#FBF7F4`

### Requirement: 卡片阴影体系
系统 SHALL 为高饱和色块卡片提供彩色弥散阴影，阴影色取自卡片自身底色。

#### Scenario: 静态阴影
- **WHEN** 习惯卡片静止显示
- **THEN** 卡片 SHALL 显示 `0 6px 24px rgba(卡片色, 0.25)` 的弥散阴影

#### Scenario: 悬浮阴影
- **WHEN** 用户 hover 习惯卡片
- **THEN** 阴影 SHALL 增强为 `0 10px 36px rgba(卡片色, 0.35)` 并伴随轻微上浮
