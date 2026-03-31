## Why

当前「今日记」页面的习惯卡片采用等宽等高的 2 列方形网格，视觉上过于规整、缺乏手帐感。
「时光补」页面的习惯选择器按钮排列死板，日历中打卡标记仅用小圆点显示，辨识度不足。
需要通过**错落瀑布卡片 + 胶囊标签选择器 + 渐变底色日历**三项改造，让 UI 更贴合治愈手帐的视觉节奏。

## What Changes

- **今日记卡片改为竖版长方形**：卡片纵横比调整为约 3:4，高度增大，呈现"手帐色块"感
- **今日记卡片错落瀑布排布**：奇偶列高度差异，形成参差不齐的视觉节奏（CSS masonry / 交错 margin）
- **新增习惯面板去除 Emoji 选择**：移除 Emoji picker 及相关字段，预览卡片也改为竖版长方形，与今日记页面尺寸一致
- **习惯选择器改为胶囊标签流**：按钮变为圆角胶囊形，默认白底 + 对应颜色边框 + 黑色文字；选中时对应颜色背景 + 白色文字；居中展示、长短错落
- **日历打卡标记改为渐变底色**：有记录的日期用习惯对应颜色的渐变填充背景 + 白色数字，移除小圆点和边框
- **日历选中态简化**：选中日期仅加粗数字，不显示边框

## Capabilities

### New Capabilities
- `stagger-tile-layout`: 今日记竖版长方形卡片 + 错落瀑布排布布局
- `calendar-color-fill`: 日历打卡标记渐变底色 + 选中态简化
- `capsule-tag-selector`: 胶囊标签流式习惯选择器

### Modified Capabilities
（无已有规范需修改）

## Impact

- **CSS**：`src/App.css` 中 `.habit-grid`、`.habit-tile`、`.calendar__cell`、`.habit-selector__btn` 等样式大量调整
- **JSX**：`src/pages/HabitHome.jsx`、`src/components/HabitForm.jsx`、`src/components/Calendar.jsx`、`src/pages/HabitCalendar.jsx` 需要改动
- **数据模型**：`emoji` 字段保留但前端不再提供新增入口（兼容已有数据）
- **依赖**：无新增依赖
