## 1. 主题系统基础（色板 + 字体）

- [x] 1.1 在 `index.html` 中添加 Google Fonts `ZCOOL KuaiLe` 的 `<link>` 标签（`font-display=swap`）
- [x] 1.2 重构 `src/index.css` 的 `:root` CSS 变量：删除旧 `--nature-*` 变量，新增 `--marker-mustard`(`#F2B705`)、`--marker-terracotta`(`#E8573A`)、`--marker-mint`(`#5EC6A0`)、`--marker-sky`(`#5BA4F5`)、`--marker-lavender`(`#A78BFA`)、`--marker-coral`(`#F472B6`)、`--marker-forest`(`#3D9B6F`)、`--marker-charcoal`(`#4A4A4A`)
- [x] 1.3 更新 `src/index.css` 字体栈：标题字体变量 `--font-title: 'ZCOOL KuaiLe', 'PingFang SC', system-ui, sans-serif`，正文保持 `Nunito` 系统字体栈
- [x] 1.4 更新 `src/index.css` 的 `--color-bg` 为 `#FBF7F4`，更新 `--shadow-*` 系列变量适配新色调
- [x] 1.5 更新 `::selection` 和滚动条颜色为新主色调

## 2. HabitForm 色盘更新

- [x] 2.1 更新 `src/components/HabitForm.jsx` 的 `PRESET_COLORS` 数组为 8 色马克笔色板
- [x] 2.2 调整 `.color-swatch` 的 `.is-active` 高亮样式（白色描边 + 放大 + 新色阴影）

## 3. 首页 Bento Grid 色块卡片

- [x] 3.1 修改 `src/App.css` 中 `.habit-tile`：`background` 从 `#FFFFFF` 改为 `var(--tile-color)`，删除 `::before` 伪元素（色条）
- [x] 3.2 修改 `.habit-tile__name`：颜色改为 `#FFFFFF`、字号提升至 `1.6rem`、字体改用 `var(--font-title)`
- [x] 3.3 修改 `.habit-tile__motto`：颜色改为 `rgba(255,255,255,0.8)`
- [x] 3.4 修改 `.habit-tile__hint`：颜色改为 `rgba(255,255,255,0.6)`
- [x] 3.5 为 `.habit-tile` 添加彩色弥散阴影（基于 `--tile-color` 的 rgba 阴影）
- [x] 3.6 调整 `.habit-tile` 的 `min-height` 为 `180px`
- [x] 3.7 修改 `.habit-tile--add`（新增卡片）：背景改为 `rgba(200,200,200,0.15)`，虚线边框保留，文字改为灰色调
- [x] 3.8 修改 `.habit-tile--add:hover`：边框色和文字色更新为新主色

## 4. Emoji 支持（数据模型 + 卡片展示）

- [x] 4.1 在 `src/utils/habitStorage.js` 的 `addHabit` 函数中支持 `emoji` 字段存储
- [x] 4.2 在 `src/pages/HabitHome.jsx` 的卡片渲染中增加 Emoji 展示（`habit.emoji` 存在时在名称上方显示）
- [x] 4.3 在 `src/App.css` 中为 `.habit-tile__emoji` 添加样式（字号 `2rem`，居中）

## 5. 习惯新增全屏编辑面板

- [x] 5.1 重构 `src/components/HabitForm.jsx`：改为全屏/近全屏面板布局，上半部分为卡片预览区、下半部分为编辑区
- [x] 5.2 实现预览卡片组件：实时反映用户选择的颜色、名称、Emoji
- [x] 5.3 添加 Emoji 快速选择行：提供 ≥ 15 个生活向预设 Emoji（📚🏃💧🎮🎸🧘🌱🍎🎨✏️🏋️🚴🧹🎯💤☀️🎵🏊🧑‍🍳🐾）
- [x] 5.4 更新色盘为 8 色马克笔色板圆点
- [x] 5.5 实现面板入场/退场动画（从底部滑入/滑出）
- [x] 5.6 更新 `src/App.css`：`.habit-form-overlay` 和 `.habit-form` 相关样式重写为全屏面板风格
- [x] 5.7 确保编辑模式（`isEdit`）也使用全屏面板，预填充已有数据

## 6. 悬浮胶囊底导

- [x] 6.1 修改 `src/App.css` 中 `.bottom-nav`：`background` 改为 `#1A1A1A`，`border-radius: 28px`，`width: fit-content`，`margin: 0 auto`，`bottom: 16px`（加 safe-area），`padding: 10px 32px`
- [x] 6.2 隐藏 `.bottom-nav__label`（`display: none`）
- [x] 6.3 更新 `.bottom-nav__item` 图标颜色为 `rgba(255,255,255,0.6)`，激活状态为纯白 `#FFFFFF`
- [x] 6.4 更新 `.bottom-nav__dot` 颜色为白色
- [x] 6.5 添加胶囊阴影 `0 8px 32px rgba(0,0,0,0.3)`
- [x] 6.6 确认 `.bottom-nav__item` 点击区域 ≥ 44px × 44px
- [x] 6.7 确认页面内容底部 padding 足够（≥ 100px）不被遮挡

## 7. 打卡弹窗 (CheckinModal) 同步改造

- [x] 7.1 修改 `src/App.css` 中 `.checkin-modal`：`background` 从 `#FFFFFF` 改为 `var(--modal-color)`
- [x] 7.2 删除或隐藏 `.checkin-modal__gradient-bar`
- [x] 7.3 更新 `.checkin-modal__name`：字体改用 `var(--font-title)`，颜色改为 `#FFFFFF`，字号增大
- [x] 7.4 更新 `.checkin-modal__motto`、`__status`、`__note` 等文字颜色为白色/半透明白色
- [x] 7.5 更新打卡按钮样式适配深色背景

## 8. 按钮与通用组件适配

- [x] 8.1 更新 `.btn--primary` 的 `background` 使用新主强调色 `var(--marker-terracotta)`
- [x] 8.2 更新 `src/utils/confetti.js` 的颜色数组为新 8 色马克笔色板
- [x] 8.3 检查并更新所有残留的旧色值引用（grep `#F98C53`、`#D2E0AA`、`#ABD7FB`、`#FCCEB4`、`nature-orange` 等）

## 9. 页面标题字体统一

- [x] 9.1 更新 `src/App.css` 中 `.page__header h1` 字体为 `var(--font-title)`
- [x] 9.2 确认 `h1` 标签在全局 `index.css` 中使用 `var(--font-title)`

## 10. 全局验证与收尾

- [x] 10.1 运行 `npx vite build` 确认生产构建无错误
- [x] 10.2 Grep 检查 `src/**` 中是否残留旧色值变量（`--nature-orange`、`--nature-green`、`--nature-blue`、`--nature-peach`、`--nature-cream`）
- [x] 10.3 Grep 检查 `src/**` 中是否残留旧硬编码色值（`#F98C53`、`#E87A3E`、`#8BA34A` 等）
- [x] 10.4 浏览器测试：首页 Bento Grid 色块渲染、新增面板交互、胶囊底导、打卡弹窗
