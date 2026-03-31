## 1. CSS 变量替换

- [x] 1.1 替换 `src/index.css` 中 `:root` 的 8 个 `--marker-*` 变量为新水彩色板值和名称（coral/orange/yellow/green/teal/blue/lavender/pink）
- [x] 1.2 更新 `src/index.css` 中 `--shadow-soft`、`--shadow-medium`、`--shadow-glow` 的 `rgba(232, 87, 58, ...)` 为 `rgba(255, 107, 107, ...)`
- [x] 1.3 更新 `src/index.css` 中 `::selection` 的 `rgba(232, 87, 58, 0.2)` 为 `rgba(255, 107, 107, 0.2)`

## 2. JS 颜色常量替换

- [x] 2.1 更新 `src/components/HabitForm.jsx` 的 `PRESET_COLORS` 数组为新 8 色
- [x] 2.2 更新 `src/utils/confetti.js` 的 `NATURE_COLORS` 数组为新 8 色
- [x] 2.3 更新 `src/utils/habitStorage.js` 默认颜色从 `#F2B705` 改为 `#FF6B6B`
- [x] 2.4 更新 `src/components/Timeline.jsx` 默认颜色参数从 `#E8573A` 改为 `#FF6B6B`

## 3. 硬编码色值替换

- [x] 3.1 更新 `src/pages/HarvestHome.jsx` 中 SVG 的 `stroke="#E8573A"` 和 `fill="#E8573A"` 为 `#FF6B6B`
- [x] 3.2 更新 `src/App.css` 中 timeline 硬编码 `#E8573A` 为 `#FF6B6B`

## 4. 项目名称更名

- [x] 4.1 修改 `index.html` 的 `<title>` 从 "Todo List" 改为 "点点"
- [x] 4.2 修改 `vite.config.js` PWA manifest 的 `name` 改为 "点点"，`short_name` 改为 "点点"，`description` 改为 "点点 — 习惯打卡与时光记录"
- [x] 4.3 修改 `package.json` 的 `"name"` 从 `"todo-list"` 改为 `"dian-dian"`

## 5. 验证

- [x] 5.1 运行 `npx vite build` 确认无错误无警告
