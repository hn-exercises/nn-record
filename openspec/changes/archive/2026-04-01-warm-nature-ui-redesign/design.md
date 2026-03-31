## Context

当前应用采用"多巴胺 + 玻璃拟态"视觉体系，核心特征包括：
- **8 个高饱和多巴胺色变量**（`--dopamine-pink: #FF6B9D` 等），分散在约 40+ 处 CSS 引用中。
- **玻璃拟态**：大量组件使用 `backdrop-filter: blur(20px)` + 半透明白色背景 `rgba(255,255,255,0.72)` + `--glass-border`。
- **冷色渐变背景**：全局背景为粉-紫-蓝三色渐变 `linear-gradient(160deg, #FFF5F7, #F8F0FF, #F0F7FF)`。
- **黑灰阴影**：`rgba(0,0,0,0.04)` / `rgba(0,0,0,0.08)` 系列。
- **粉色交互反馈**：所有 focus 环、选中态、滚动条、脉冲动画均基于 `rgba(255, 107, 157, ...)`。

应用的业务隐喻（种树、钓鱼、收获）天然亲近自然主题，但当前配色与此存在冲突。

技术栈为 React 18 + Vite + 纯 CSS（无 Tailwind / CSS-in-JS），所有样式集中在 `src/index.css`（全局变量）和 `src/App.css`（1639 行组件样式）中，改动范围可控。

## Goals / Non-Goals

**Goals:**
- 将全局色彩系统从"多巴胺高饱和"替换为"暖色治愈系"五色板。
- 将卡片质感从"玻璃拟态（透明模糊）"替换为"实底暖白 + 超大圆角 + 色彩化弥散阴影"。
- 统一所有交互反馈色（focus、selected、scrollbar、pulse）为暖橙系。
- 提升全局排版的呼吸感（增大 padding / gap）。

**Non-Goals:**
- 不涉及任何 JS 逻辑、路由、数据流变更。
- 不新增插画资源（后续可单独规划）。
- 不更改组件 HTML 结构或 className 命名。
- 不引入 CSS 框架（Tailwind 等）或 CSS-in-JS。
- 不涉及暗色模式（Dark Mode）。

## Decisions

### Decision 1: 色彩系统 — 五色板 + 语义映射

**选择**：废除全部 8 个 `--dopamine-*` 变量，新建 5 个主色变量 + 语义色变量。

| 变量名 | 色值 | 用途 |
|--------|------|------|
| `--nature-orange` | `#F98C53` | 主色调：CTA 按钮、激活态、强调色 |
| `--nature-green` | `#D2E0AA` | 成功态：打卡完成、成长进度、mint 替代 |
| `--nature-blue` | `#ABD7FB` | 信息态：钓鱼模块、数据图表辅助色 |
| `--nature-peach` | `#FCCEB4` | 辅助色：标签、次要按钮、卡片点缀 |
| `--nature-cream` | `#F9F2EF` | 基底色：全局背景 |

语义映射保持不变：
| 语义变量 | 新值 |
|----------|------|
| `--color-bg` | `#F9F2EF` |
| `--color-card-bg` | `#FFFFFF` |
| `--color-text` | `#2D2D2D`（不变） |
| `--color-text-secondary` | `#8E8E93`（不变） |
| `--color-border` | `#F0E8E4`（微暖偏移） |

**理由**：5 个主色覆盖了参考图的全部色板，与应用内"种树（绿）、钓鱼（蓝）、收获（橙）"的业务隐喻自然对应。比多巴胺系 8 色更精简、语义更明确。

**替代方案**：保留多巴胺色系仅调整饱和度 → 放弃。治愈系和多巴胺系是两套不同的设计语言，混搭会导致色彩冲突。

### Decision 2: 卡片质感 — 从玻璃拟态到实底暖白

**选择**：移除所有 `backdrop-filter` / `-webkit-backdrop-filter` 和 `--glass-blur` / `--glass-border` 变量，改为：

```css
/* 旧 */
background: rgba(255, 255, 255, 0.72);
backdrop-filter: var(--glass-blur);
border: var(--glass-border);
box-shadow: var(--shadow-soft);

/* 新 */
background: #FFFFFF;
border: none;
border-radius: 28px;
box-shadow: 0 8px 30px rgba(249, 140, 83, 0.08);
```

核心变化：
- **背景**：半透明 → 纯白实底。通过全局 `#F9F2EF` 暖底色与纯白卡片形成自然对比。
- **边框**：`1px solid rgba(255,255,255,0.5)` 半透明边框 → 完全去除。
- **圆角**：统一升级，大卡片 `28px`，中卡片 `22px`，小控件 `14px`。
- **阴影**：黑灰 `rgba(0,0,0,...)` → 色彩化弥散 `rgba(249,140,83,0.08)`（主色暖橙的低透明度）。

**理由**：玻璃拟态在彩色渐变背景上效果好，但切换到纯色暖底后失去意义。实底 + 色彩阴影更符合治愈系的"温暖厚实感"。

**替代方案**：保留轻度毛玻璃但降低模糊度 → 放弃。暖白底色上的毛玻璃几乎无法被感知，增加 GPU 开销却无视觉收益。

### Decision 3: 全局阴影系统 — 色彩化弥散阴影

**选择**：新阴影变量体系。

```css
--shadow-soft:   0 4px 20px rgba(249, 140, 83, 0.06);
--shadow-medium: 0 8px 30px rgba(249, 140, 83, 0.10);
--shadow-glow:   0 0 20px rgba(249, 140, 83, 0.15);
```

**理由**：同色系阴影让卡片看起来像在"发暖光"，而非漂浮在灰色虚空上。

### Decision 4: 全局背景 — 纯色暖白替代渐变

**选择**：`--gradient-page` 废除，`body` 背景直接使用 `var(--color-bg)`（即 `#F9F2EF`）。

**理由**：治愈系设计追求纯粹与宁静，多色渐变背景会分散注意力。纯色背景也让卡片的微色差对比更清晰。

### Decision 5: 交互反馈色统一迁移

所有基于 `rgba(255, 107, 157, ...)` 的交互态替换为暖橙系 `rgba(249, 140, 83, ...)`：

| 场景 | 旧色 | 新色 |
|------|------|------|
| input:focus 环 | `rgba(255,107,157,0.12)` | `rgba(249,140,83,0.12)` |
| calendar is-today 脉冲 | `rgba(255,107,157,0.25)` | `rgba(249,140,83,0.25)` |
| calendar is-selected 高亮 | `rgba(255,107,157,0.1)` | `rgba(249,140,83,0.1)` |
| 滚动条 thumb | `rgba(255,107,157,0.25)` | `rgba(249,140,83,0.25)` |
| 文本选中 | `rgba(255,107,157,0.2)` | `rgba(249,140,83,0.2)` |
| bottom-nav 激活态 | `rgba(255,107,157,0.08)` | `rgba(249,140,83,0.08)` |
| empty-state 虚线边框 | `dopamine-pink 30%` | `nature-orange 30%` |
| color-swatch 选中 | `dopamine-pink` 光晕 | `nature-orange` 光晕 |

### Decision 6: 排版留白增大

- `.habit-tile` padding 从 `24px 16px` → `28px 20px`。
- `.app-layout__content` padding 从 `24px 16px` → `28px 20px`。
- `.habit-grid` gap 从 `14px` → `16px`。
- 卡片内的 `.harvest-chart` / `.calendar` padding 从 `18px` → `22px`。

### Decision 7: `@supports not` 降级规则移除

**选择**：删除 `index.css` 中的 `@supports not (backdrop-filter: blur(1px))` 规则块。

**理由**：不再使用 `backdrop-filter`，降级规则失去意义。同时消除一个维护负担。

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| **色差在不同屏幕上感知不同**：`#F9F2EF` 背景与 `#FFFFFF` 卡片的色差在低端屏上可能不明显 | 阴影弥散提供额外层次区分，不完全依赖色差 |
| **大面积暖白可能显单调**：失去渐变背景后，页面整体可能缺乏层次 | 通过不同组件使用不同主色的弥散阴影来制造微妙变化；后续可引入插画元素 |
| **CSS 改动量大（约 40+ 处）**：集中在两个文件但触及几乎所有组件 | 通过 CSS 变量替换实现，大部分改动是变量名替换而非结构调整 |
| **已使用 `--dopamine-*` 的内联 `style` 属性**：JSX 中 `--tile-color` 等 CSS 自定义属性通过 JS 动态设置 | 这些属性是习惯的自定义颜色，保持不变；仅修改 fallback 默认值 |
