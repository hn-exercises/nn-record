## Context

本项目是一个移动端 PWA 习惯打卡应用，当前已完成「治愈手帐风」主题改造（playful-journal-redesign），建立了 8 色马克笔色板、ZCOOL KuaiLe 标题字体、浮动胶囊底导等视觉基础。

当前存在以下视觉痛点：
1. **今日记页面**：习惯卡片为等宽等高的 2 列方格，排列规整缺乏手帐感
2. **新增习惯面板**：Emoji 选择器占据编辑空间且与手帐风格不搭，预览卡片为横向矩形
3. **时光补-习惯选择器**：按钮等宽横排，缺乏视觉层次
4. **时光补-日历**：打卡标记仅为小圆点，辨识度低；选中态边框 + 缩放过于生硬

## Goals / Non-Goals

**Goals:**
- 今日记卡片改为竖版长方形（≈ 3:4 纵横比），奇偶列交错排布，形成手帐色块的参差感
- 新增习惯面板移除 Emoji 选择器，预览卡片形态与今日记页面保持一致
- 习惯选择器改为胶囊标签流式布局：白底 + 颜色边框 + 黑字 → 选中时颜色底 + 白字，居中排列、长短错落
- 日历有打卡记录的日期改为渐变底色 + 白色数字，去除小圆点和边框
- 日历选中态简化为仅加粗数字，无边框

**Non-Goals:**
- 不引入真正的 CSS Masonry 布局（浏览器兼容性不足）
- 不改动数据模型或存储逻辑（emoji 字段保留，仅移除前端选择入口）
- 不改动底部导航、打卡弹窗等已完成的组件

## Decisions

### D1: 错落排布方案 — nth-child 交错 margin-top

**方案 A**：CSS Columns（多列瀑布流）  
- 优点：天然错落  
- 缺点：列内顺序为纵向，不符合从左到右的阅读习惯；列数变化时重排

**方案 B**：Grid + nth-child 交错 margin-top（✅ 推荐）  
- 保持 `grid-template-columns: repeat(2, 1fr)`  
- 偶数项（nth-child(even)）添加 `margin-top: 32px`，奇数项无额外 margin  
- 优点：简单纯 CSS，阅读顺序不变，视觉节奏感好  
- 缺点：仅支持固定 2 列，灵活性有限（但移动端场景已足够）

**选择理由**：移动端固定 2 列，方案 B 实现成本最低、效果最贴合手绘稿。

### D2: 竖版卡片尺寸 — aspect-ratio 控制

使用 CSS `aspect-ratio: 3 / 4` 替代固定 `min-height`，让卡片自适应列宽。  
同时设置 `min-height: 200px` 作为保底。

### D3: 新增面板去除 Emoji — 简化 HabitForm

- 从 JSX 中移除 Emoji picker 区块和 `PRESET_EMOJIS` 常量
- 移除 `emoji` state 以及 `onSubmit` 中对 `emoji` 的传递
- `habitStorage.addHabit` 继续接受 `emoji` 字段（兼容旧数据），仅前端不再新增
- 预览卡片使用与 `.habit-tile` 相同的 `aspect-ratio: 3/4`

### D4: 胶囊标签选择器 — Flexbox 居中 + 圆角胶囊

- `.habit-selector__buttons` 改为 `justify-content: center`
- `.habit-selector__btn` 改为 `border-radius: 999px`（全圆角胶囊）
- 默认态：`background: #FFFFFF`，`border: 2px solid var(--sel-color)`，`color: var(--color-text)`
- 选中态：`background: var(--sel-color)`，`color: #FFFFFF`
- padding 保持按文字长度自然撑开，形成长短错落效果

### D5: 日历渐变底色标记

- 有打卡记录时：`Calendar.jsx` 中 `getMarkStyle` 返回 `{ background: linear-gradient(135deg, color 0%, lighten 100%), color: '#fff' }` 而非 `borderColor`
- 多个习惯同日打卡时：使用第一个习惯的颜色（简单方案，避免过度复杂）
- 移除 `.calendar__dots` 渲染和对应 CSS

### D6: 日历选中态简化

- 选中时不添加 `border`/`transform`/`box-shadow`
- 仅 `font-weight: 800` + `font-size` 略增大（1.05em）
- `Calendar.jsx` 中 `getSelectedStyle` 简化，不再覆盖 borderColor/borderWidth/transform

## Risks / Trade-offs

- **[aspect-ratio 兼容性]** → iOS Safari 15+ 已支持，覆盖率足够；设置 `min-height` 作为 fallback
- **[去除 Emoji 后旧数据展示]** → 已有习惯仍读取 `habit.emoji` 并在卡片上展示，仅新增入口移除
- **[日历多色标记简化]** → 多个习惯同日打卡时仅取第一个颜色，可能丢失信息 → 可在选中日期后通过下方打卡记录列表查看完整信息
- **[错落 margin 导致底部对齐不一]** → 可接受，手帐风格本身追求参差效果
