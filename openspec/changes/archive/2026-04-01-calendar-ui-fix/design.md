## Context

时光补页面（HabitCalendar）使用 `Calendar.jsx` 组件渲染月历网格。上一次改造（tile-stagger-calendar-polish）将打卡标记从小圆点改为渐变底色、选中态简化为仅加粗。但产生了三个遗留问题需要修复。

当前代码状况：
- `Calendar.jsx` 的 `btn--icon` 按钮内容为空（无箭头字符）
- `getMarkStyle` 仅取 `colors[0]`，忽略多色场景
- `getSelectedStyle` 仅设置 `fontWeight: 800`，视觉区分不足

## Goals / Non-Goals

**Goals:**
- 箭头按钮可见且可点击，字号足够辨识
- 多习惯同日打卡时，背景色为多颜色段渐变；单一习惯时为纯色
- 选中日期有明显的视觉反馈（加粗 + 放大 + 轻微 scale）

**Non-Goals:**
- 不改动日历网格布局或尺寸
- 不改动数据层（`getAllCheckinDates` 已返回多色数组）
- 不新增组件，仅修改现有 Calendar

## Decisions

### D1: 箭头按钮 — 直接使用 Unicode 字符

在 JSX 中为 `btn--icon` 按钮添加 `◀` 和 `▶` 字符内容。CSS 中 `.btn--icon` 字号增大到 `1.1rem`，padding 增大确保点击区域 ≥ 36px。

### D2: 多色渐变 — CSS linear-gradient 分段

`getMarkStyle(colors)` 逻辑：
- 1 色：`background: colors[0]`（纯色）
- 2+ 色：`background: linear-gradient(135deg, c1 0%, c1 p1%, c2 p1%, c2 p2%, ...)`，每个颜色均分区间，形成色条效果
- 始终 `color: '#fff'`、`borderColor: 'transparent'`、`borderRadius` 继承

### D3: 选中态增强 — font-weight + font-size + scale

`getSelectedStyle` 返回 `{ fontWeight: 900, fontSize: '1.05em', transform: 'scale(1.12)' }`。  
CSS `.calendar__cell.is-selected` 同步设置 `font-weight: 900; font-size: 1.05em; transform: scale(1.12); z-index: 2;`。

## Risks / Trade-offs

- **[多色分段渐变]** → 4+ 色时色段较窄，可能不够清晰 → 可接受，实际场景很少超过 3 个习惯同日打卡
- **[scale 选中态]** → 轻微放大可能遮挡相邻格子 → 使用 `z-index: 2` 确保在上层
