## Why

时光补日历存在三个 UI 问题：
1. 月份切换按钮（◀ / ▶）可点击但不可见 — `btn--icon` 内部无文字内容
2. 同一天有多个习惯打卡时，日历仅取第一个颜色，丢失了多色信息
3. 选中日期后视觉反馈太弱（仅 `font-weight: 800`），难以辨识选中态

## What Changes

- **修复日历前后月份箭头按钮不可见**：为 `Calendar.jsx` 中的 `btn--icon` 按钮添加箭头文字（◀ / ▶），并适当增大 `btn--icon` 的字号和点击区域
- **日历多色渐变混色**：当某天有多个习惯打卡时，使用 CSS `linear-gradient` 混合所有颜色作为背景；仅一个习惯时使用纯色（不渐变）
- **日历选中态增强**：选中日期数字加粗 + 字号放大 + 轻微缩放效果，明确传达「已选中」

## Capabilities

### New Capabilities
- `calendar-interaction-polish`: 日历箭头可见性、多色混合标记、选中态增强

### Modified Capabilities
（无）

## Impact

- **JSX**：`src/components/Calendar.jsx` — 箭头文字、`getMarkStyle` 多色逻辑、`getSelectedStyle` 增强
- **CSS**：`src/App.css` — `.btn--icon` 字号/尺寸、`.calendar__cell.is-selected` 选中态样式
- **无数据模型变更**
