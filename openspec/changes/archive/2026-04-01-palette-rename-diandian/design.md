## Context

当前项目使用 8 色高饱和马克笔色板（`--marker-mustard` 至 `--marker-charcoal`），色值分散于 CSS 变量、JS 常量及硬编码位置。用户提供了一套水彩调色盘色系，更柔和治愈。同时需要将项目名称从 "Todo List" 改为 "点点"。

### 新色板映射

| 变量名 | 新色值 | 旧变量 | 旧色值 |
|--------|--------|--------|--------|
| `--marker-coral` | `#FF6B6B` | `--marker-terracotta` | `#E8573A` |
| `--marker-orange` | `#FFA94D` | `--marker-mustard` | `#F2B705` |
| `--marker-yellow` | `#FFD43B` | _(新增)_ | — |
| `--marker-green` | `#69DB7C` | `--marker-forest` | `#3D9B6F` |
| `--marker-teal` | `#63E6BE` | `--marker-mint` | `#5EC6A0` |
| `--marker-blue` | `#74C0FC` | `--marker-sky` | `#5BA4F5` |
| `--marker-lavender` | `#B197FC` | `--marker-lavender` | `#A78BFA` |
| `--marker-pink` | `#F06595` | `--marker-coral` | `#F472B6` |

移除: `--marker-charcoal`（`#4A4A4A`），新增 `--marker-yellow`

### 色值出现位置

| 文件 | 内容 |
|------|------|
| `src/index.css` | `:root` CSS 变量定义、selection 颜色、阴影颜色 |
| `src/components/HabitForm.jsx` | `PRESET_COLORS` 数组 |
| `src/utils/confetti.js` | `NATURE_COLORS` 数组 |
| `src/utils/habitStorage.js` | 默认颜色 `#F2B705` |
| `src/components/Timeline.jsx` | 默认参数 `#E8573A` |
| `src/pages/HarvestHome.jsx` | SVG stroke/fill `#E8573A` |
| `src/App.css` | timeline 硬编码 `#E8573A` |

### 项目名称出现位置

| 文件 | 内容 |
|------|------|
| `index.html` | `<title>Todo List</title>` |
| `vite.config.js` | PWA manifest `name` / `short_name` / `description` |
| `package.json` | `"name": "todo-list"` |

## Goals / Non-Goals

**Goals:**
- 全局替换色板为水彩色系
- 所有硬编码旧色值对齐新色板
- 项目名称统一改为 "点点"

**Non-Goals:**
- 不改变 UI 布局或组件结构
- 不改变 localStorage 数据结构（已保存的旧色值在用户数据中保留）
- 不修改字体或阴影体系

## Decisions

1. **变量命名改为色相名**：原变量用意象名（mustard/terracotta），新变量用色相名（coral/orange/yellow），更直观。
2. **主强调色从 terracotta 改为 coral**：`#FF6B6B` 作为新主色，替换所有 `#E8573A` 的硬编码与 `rgba(232, 87, 58, ...)` 阴影。
3. **默认颜色改为 coral**：`habitStorage` 默认色、`Timeline` 默认色统一改为 `#FF6B6B`。

## Risks / Trade-offs

- **已有用户数据兼容**：localStorage 中保存的旧色值不会被自动迁移，旧习惯仍显示旧颜色。风险低，因为旧颜色仍可正常渲染。
- **package.json name 变更**：不影响功能，仅影响 npm 包名标识。
