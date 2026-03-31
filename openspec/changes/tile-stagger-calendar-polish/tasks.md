## 1. 今日记卡片竖版长方形

- [x] 1.1 修改 `src/App.css` 中 `.habit-tile`：删除 `min-height: 180px`，添加 `aspect-ratio: 3 / 4`，添加 `min-height: 200px` 作为保底
- [x] 1.2 修改 `.habit-tile--add`：同步 `aspect-ratio: 3 / 4` 和 `min-height: 200px`

## 2. 今日记卡片错落排布

- [x] 2.1 在 `src/App.css` 中为 `.habit-tile:nth-child(even)` 添加 `margin-top: 32px`
- [x] 2.2 为 `.habit-grid` 添加 `align-items: start`，防止 Grid 默认拉伸导致错落失效

## 3. 新增习惯面板去除 Emoji

- [x] 3.1 修改 `src/components/HabitForm.jsx`：移除 `PRESET_EMOJIS` 常量
- [x] 3.2 移除 `emoji` state 定义（`const [emoji, setEmoji] = ...`）
- [x] 3.3 移除 JSX 中的 Emoji picker 区块（`<div className="habit-form__field">` 包含 `emoji-picker` 的部分）
- [x] 3.4 移除 `onSubmit` 中对 `emoji` 字段的传递（`handleSubmit` 中的 `emoji`）
- [x] 3.5 移除预览卡片中的 Emoji 显示（`habit-form__preview-emoji` 行）

## 4. 新增面板预览卡片改为竖版长方形

- [x] 4.1 修改 `src/App.css` 中 `.habit-form__preview`：添加 `aspect-ratio: 3 / 4`，设置 `max-width: 160px`，`margin: 0 auto`，使其居中展示为与卡片相同的竖版比例
- [x] 4.2 调整预览卡片内部元素的字号和间距，适配竖版比例

## 5. 习惯选择器改为胶囊标签

- [x] 5.1 修改 `src/App.css` 中 `.habit-selector__buttons`：添加 `justify-content: center`
- [x] 5.2 修改 `.habit-selector__btn`：`border-radius` 改为 `999px`，`background` 改为 `#FFFFFF`，`border` 改为 `2px solid var(--sel-color, var(--marker-terracotta))`，`color` 改为 `var(--color-text)`
- [x] 5.3 修改 `.habit-selector__btn:hover`：`background` 改为淡色 `color-mix(in srgb, var(--sel-color) 10%, #ffffff)`
- [x] 5.4 修改 `.habit-selector__btn.is-active`：`background` 改为 `var(--sel-color, var(--marker-terracotta))`，`color` 改为 `#FFFFFF`，`border-color` 改为 `transparent`

## 6. 日历打卡标记改为渐变底色

- [x] 6.1 修改 `src/components/Calendar.jsx` 中 `getMarkStyle`：返回 `{ background: 'linear-gradient(135deg, color, lightenColor)', color: '#fff', borderColor: 'transparent' }` 而非 `{ borderColor }`
- [x] 6.2 移除 `Calendar.jsx` 中渲染 `.calendar__dots` 的 JSX 代码块
- [x] 6.3 修改 `src/App.css` 中 `.calendar__cell.is-marked`：移除 `border-color: currentColor`，确保背景色标记正常、数字颜色继承为白色
- [x] 6.4 隐藏或删除 `.calendar__dots` 和 `.calendar__dot` 的 CSS 规则

## 7. 日历选中态简化

- [x] 7.1 修改 `Calendar.jsx` 中 `getSelectedStyle`：仅返回 `{ fontWeight: 800 }`，去掉 `transform`、`borderColor`、`borderWidth`、`zIndex`
- [x] 7.2 修改 `src/App.css` 中 `.calendar__cell.is-selected`：删除 `background`、`border-color`、`border-width`、`transform`、`box-shadow`，改为仅 `font-weight: 800`
- [x] 7.3 修改 `.calendar__cell.is-today`：移除 `border-color` 和 `animation: pulse-ring`，改为仅 `font-weight: 800`

## 8. 清理与验证

- [x] 8.1 删除 `src/App.css` 中 `.emoji-picker` 及 `.emoji-picker__item` 相关样式（如果不再使用）
- [x] 8.2 运行 `npx vite build` 确认生产构建无错误
- [x] 8.3 视觉验证：今日记卡片竖版错落、新增面板无 Emoji、胶囊选择器、日历渐变底色
