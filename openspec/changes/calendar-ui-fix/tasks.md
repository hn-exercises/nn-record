## 1. 修复日历箭头按钮不可见

- [x] 1.1 修改 `src/components/Calendar.jsx`：为 `onPrev` 按钮添加文字内容 `◀`，为 `onNext` 按钮添加文字内容 `▶`
- [x] 1.2 修改 `src/App.css` 中 `.btn--icon`：`font-size` 增大到 `1.1rem`，`padding` 增大到 `8px 12px`，确保点击区域 ≥ 36px

## 2. 日历多色渐变混色

- [x] 2.1 修改 `Calendar.jsx` 中 `getMarkStyle`：当 `colors.length === 1` 时返回纯色背景；当 `colors.length >= 2` 时返回 `linear-gradient(135deg, ...)` 分段渐变，每色均分区间
- [x] 2.2 确保所有标记单元格 `color: '#fff'` 和 `borderColor: 'transparent'`

## 3. 日历选中态增强

- [x] 3.1 修改 `Calendar.jsx` 中 `getSelectedStyle`：添加 `fontSize: '1.05em'`、`transform: 'scale(1.12)'`、`zIndex: 2`，`fontWeight` 改为 `900`
- [x] 3.2 修改 `src/App.css` 中 `.calendar__cell.is-selected`：添加 `font-weight: 900; font-size: 1.05em; transform: scale(1.12); z-index: 2;`

## 4. 验证

- [x] 4.1 运行 `npx vite build` 确认构建无错误
- [x] 4.2 视觉验证：箭头可见、多色渐变、选中态放大加粗
