## 1. 全局 CSS 变量替换（index.css）

- [x] 1.1 在 `:root` 中新增 5 个暖色治愈系主色变量（`--nature-orange`、`--nature-green`、`--nature-blue`、`--nature-peach`、`--nature-cream`）
- [x] 1.2 删除全部 8 个 `--dopamine-*` 变量声明
- [x] 1.3 更新 `--color-bg` 为 `#F9F2EF`，`--color-border` 为 `#F0E8E4`
- [x] 1.4 删除 `--gradient-page` 和 `--gradient-card` 变量
- [x] 1.5 删除 `--glass-blur` 和 `--glass-border` 变量
- [x] 1.6 更新阴影变量为色彩化弥散阴影（`--shadow-soft`、`--shadow-medium`、`--shadow-glow` 使用 `rgba(249,140,83,...)` 色值）

## 2. 全局背景与通用元素（index.css）

- [x] 2.1 将 `body` 背景从 `var(--gradient-page)` 改为 `var(--color-bg)`，移除 `background-attachment: fixed`
- [x] 2.2 将文本选中色 `::selection` 从粉色 `rgba(255,107,157,0.2)` 改为暖橙 `rgba(249,140,83,0.2)`
- [x] 2.3 将滚动条 thumb 颜色从粉色改为 `rgba(249,140,83,0.25)` / hover 态 `rgba(249,140,83,0.4)`
- [x] 2.4 删除 `@supports not (backdrop-filter)` 降级规则块

## 3. 按钮系统（App.css）

- [x] 3.1 将 `.btn--primary` 从粉-珊瑚渐变改为暖橙实底 `var(--nature-orange)`，hover 稍深
- [x] 3.2 将 `.btn--checked` 从 mint 色改为 `--nature-green` 系
- [x] 3.3 更新 `.btn--primary:active::after` ripple 的白色辐射保持不变（纯白 ripple 在暖橙上仍然生效）

## 4. 底部导航栏（App.css）

- [x] 4.1 将 `.bottom-nav` 背景从毛玻璃 `rgba(255,255,255,0.72) + backdrop-filter` 改为纯白实底 `#FFFFFF`，移除 `backdrop-filter` 和 `-webkit-backdrop-filter`
- [x] 4.2 将 `.bottom-nav__item.is-active` 颜色从 `--dopamine-pink` 改为 `--nature-orange`，背景从粉色 rgba 改为 `rgba(249,140,83,0.08)`
- [x] 4.3 将 `.bottom-nav__dot` 背景从 `--dopamine-pink` 改为 `--nature-orange`

## 5. 习惯瓷片（App.css）

- [x] 5.1 将 `.habit-tile` 背景从半透明玻璃改为纯白实底，移除 `backdrop-filter`、`-webkit-backdrop-filter`、`border: var(--glass-border)`
- [x] 5.2 将 `.habit-tile` 圆角保持 `24px`，padding 增大为 `28px 20px`
- [x] 5.3 将 `.habit-tile::before` 左侧渐变条 fallback 颜色从 `--dopamine-pink` 改为 `--nature-orange`
- [x] 5.4 将 `.habit-tile--add` hover 态从粉色改为暖橙色系
- [x] 5.5 将 `.habit-grid` gap 从 `14px` 增大为 `16px`

## 6. 习惯表单与对话框（App.css）

- [x] 6.1 将 `.habit-form` 背景从毛玻璃改为纯白实底，移除 `backdrop-filter` 及 `--glass-border`
- [x] 6.2 将 input `focus` 态边框和 box-shadow 从粉色改为暖橙系
- [x] 6.3 将 `.color-swatch.is-active` 的 box-shadow 从 `--dopamine-pink` 改为 `--nature-orange`
- [x] 6.4 将 `.confirm-dialog` 背景从毛玻璃改为纯白实底，移除 `backdrop-filter` 及 `--glass-border`

## 7. 日历组件（App.css）

- [x] 7.1 将 `.calendar` 背景从毛玻璃改为纯白实底，移除 `backdrop-filter` 及 `--glass-border`，padding 增大为 `22px`
- [x] 7.2 将 `.calendar__cell.is-today` 边框颜色从 `--dopamine-pink` 改为 `--nature-orange`
- [x] 7.3 将 `.calendar__cell.is-selected` 背景和边框从粉色改为暖橙系，box-shadow 改为暖橙弥散
- [x] 7.4 将 `@keyframes pulse-ring` 中的颜色从 `rgba(255,107,157,...)` 改为 `rgba(249,140,83,...)`
- [x] 7.5 将 `.habit-selector__btn` 中 `--sel-color` fallback 从 `--dopamine-pink` 改为 `--nature-orange`

## 8. 习惯详情页（App.css）

- [x] 8.1 将 `.habit-detail__card` 背景从毛玻璃改为纯白实底，移除 `backdrop-filter` 及 `--glass-border`

## 9. 时间线组件（App.css）

- [x] 9.1 将 `.timeline--empty` 虚线边框颜色从 `dopamine-pink 30%` 改为 `nature-orange 30%`
- [x] 9.2 将 `.timeline__label` 颜色从 `--dopamine-mint` 改为 `--nature-green`
- [x] 9.3 将 `.timeline__loader-dot` 背景从 `--dopamine-pink` 改为 `--nature-orange`
- [x] 9.4 将 `.timeline__line` 中 fallback 颜色从 `#FF6B9D` 改为 `#F98C53`

## 10. 收获图表与详情页（App.css）

- [x] 10.1 将 `.harvest-chart` 背景从毛玻璃改为纯白实底，移除 `backdrop-filter` 及 `--glass-border`，padding 增大为 `22px`
- [x] 10.2 将 `.harvest-toggle__btn.is-active` 从粉-珊瑚渐变改为暖橙实底
- [x] 10.3 将 `.harvest-detail__card` 背景从毛玻璃改为纯白实底，`border-left` fallback 从 `--dopamine-pink` 改为 `--nature-orange`

## 11. Checkin Modal（App.css）

- [x] 11.1 将 `.checkin-modal` 背景从毛玻璃改为纯白实底，移除 `backdrop-filter` 及 `--glass-border`，移除 `--shadow-glow`（改为 `--shadow-medium`）
- [x] 11.2 将 `.checkin-modal__gradient-bar` 渐变中 `--dopamine-pink` fallback 改为 `--nature-orange`
- [x] 11.3 将 `.checkin-modal__note:focus` 的 `--modal-color` fallback 从 `--dopamine-pink` 改为 `--nature-orange`
- [x] 11.4 将 `.checkin-confirm` 背景从毛玻璃改为纯白实底

## 12. 概览卡片与钓鱼组件（App.css）

- [x] 12.1 将 `.overview-card` 背景从毛玻璃改为纯白实底，移除 `backdrop-filter` 及 `--glass-border`
- [x] 12.2 将 `.overview-card.is-expanded` 边框颜色 fallback 从 `--dopamine-pink` 改为 `--nature-orange`
- [x] 12.3 将 `.overview-empty` 虚线边框从粉色改为暖橙系
- [x] 12.4 将 `.overview-detail` 背景从毛玻璃改为纯白实底
- [x] 12.5 将 `.fishing-btn` 背景从 `--dopamine-lemon` 改为 `--nature-orange`，阴影改为暖橙弥散
- [x] 12.6 将 `.inline-fishing` 渐变背景改为暖色系渐变 `rgba` 组合

## 13. 空状态与反馈（App.css）

- [x] 13.1 将 `.empty-state` 虚线边框从 `dopamine-pink 30%` 改为 `nature-orange 30%`
- [x] 13.2 将 `.feedback--success` 颜色从 `--dopamine-mint` 改为 `--nature-green`

## 14. 排版留白（App.css）

- [x] 14.1 将 `.app-layout__content` padding 从 `24px 16px 100px` 增大为 `28px 20px 100px`
- [x] 14.2 对应更新 `@media (max-width: 640px)` 中的响应式 padding

## 15. 验收与回归

- [x] 15.1 在浏览器中逐页检查：HabitHome、HabitDetail、HabitCalendar、HarvestHome、HarvestDetail 的视觉表现
- [x] 15.2 全局搜索确认不残留 `--dopamine-`、`--glass-`、`--gradient-page` 引用
- [x] 15.3 确认 `backdrop-filter` 在整个样式表中不再出现
- [x] 15.4 确认各组件 hover / focus / active 交互态颜色为暖橙系
