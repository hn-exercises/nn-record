## Why

时光补页面存在三个体验缺陷：(1) 删除打卡记录的按钮内容丢失（`×` 字符在编码过程中丢失），导致用户无法看到和点击删除按钮；(2) 日历上多习惯同日打卡的渐变标记使用了 `linear-gradient`，视觉效果不够圆润，用户要求使用环形渐变（`radial-gradient`）；(3) 日历上选中日期的高亮样式被打卡标记的内联 style 覆盖，导致无法区分当前选中的是哪一天。

## What Changes

**删卡按钮修复：**
- 修复 HabitCalendar 中删除按钮的 `×` 文本丢失问题，确保删除按钮可见可点击
- 增强删除按钮视觉，使其在记录列表中更醒目

**日历渐变改为环形渐变：**
- Calendar 组件中多色标记从 `linear-gradient(135deg, ...)` 改为 `radial-gradient(circle, ...)`，圆形扩散更贴合日期格子的视觉比例

**日历选中日期高亮修复：**
- 确保 `is-selected` 的高亮样式不被 `is-marked` 的内联 style 覆盖
- 选中态增加更明显的视觉反馈（加粗边框 + 叠加半透明高亮层），无论该日期是否有打卡标记都能清晰看出

## Capabilities

### New Capabilities

_(无新增能力)_

### Modified Capabilities
- `habit-tracking`: 删卡按钮文本修复，确保 removeCheckinByTimestamp 交互可用
- `app-navigation`: 日历组件渐变类型变更（linear → radial）、选中态高亮优先级修复

## Impact

- **组件**：Calendar.jsx（`getMarkStyle` 函数渐变类型、选中态样式逻辑）、HabitCalendar.jsx（删除按钮内容修复）
- **样式**：App.css（`.calendar__cell.is-selected` 样式优先级提升、渐变相关）
- **依赖**：无新增依赖
