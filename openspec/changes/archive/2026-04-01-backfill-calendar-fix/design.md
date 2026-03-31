## Context

时光补页面在上一轮 `tab-journal-backfill-harvest` change 中完成了重构，包含补卡、删卡、多色日历标记等功能。但由于编码问题和样式优先级疏漏，存在 3 个体验缺陷需要修复。

当前相关文件状态：
- `Calendar.jsx` 的 `getMarkStyle()` 对多色使用 `linear-gradient(135deg, ...)`，并将样式通过内联 `style` 注入，覆盖了 CSS 中 `.is-selected` 的 `background`
- `HabitCalendar.jsx` 删除按钮的 `×` 字符内容为空（Set-Content 编码丢失）
- `App.css` 中 `.calendar__cell.is-selected` 仅设置了 `background` 和 `border-color`，但被内联 style 覆盖

## Goals / Non-Goals

**Goals:**
- 修复删除按钮可见性，用户能看到并点击删除
- 日历多色标记改用 `radial-gradient(circle, ...)` 环形渐变
- 选中日期的高亮在任何情况下（无标记 / 有标记）都清晰可见

**Non-Goals:**
- 不修改删卡的数据逻辑（`removeCheckinByTimestamp` 功能正确）
- 不调整日历的月份导航或布局
- 不修改单色标记的样式

## Decisions

### 决策 1：选中态高亮实现方式

**选择**：不再依赖 `background` 覆盖（会被内联 style 打败），改用 `box-shadow: inset` 叠加高亮层 + `outline` 或加粗 `border`，并在 Calendar 组件中当 `is-selected` 时通过 style 合并确保选中态可见。

具体做法：`getMarkStyle` 返回的样式在 `is-selected` 时叠加一个半透明 `box-shadow: inset 0 0 0 100px rgba(255,107,157,0.2)`，同时 border 变为 `--dopamine-pink`。这避免了 `!important` 的滥用。

**替代方案**：使用 `!important` 提升 CSS 优先级 — 简单但难以维护，后续样式冲突风险高。

### 决策 2：环形渐变格式

**选择**：`radial-gradient(circle, color1 pct1, color2 pct2, ...)` 从中心向外扩散，色段使用硬切边（百分比相邻无过渡），呈现同心环效果。

**理由**：圆形扩散与日期格子的方形边界形成对比，视觉焦点集中在中心数字上。硬切边比平滑过渡在小尺寸上更清晰。

### 决策 3：删除按钮修复

**选择**：直接在 JSX 中使用 Unicode 转义 `{'\u00D7'}` 或 HTML entity，确保跨平台编码一致。同时给按钮添加 `aria-label="删除"` 增强可访问性。

## Risks / Trade-offs

- **[环形渐变兼容性]** → `radial-gradient(circle, ...)` 在所有现代浏览器均支持，PWA 目标环境无兼容风险。
- **[选中态 box-shadow 叠加]** → 在低端设备上 `box-shadow: inset` 渲染开销极低，不构成性能问题。
