## Why

当前项目使用高饱和马克笔色板（8 色），色彩偏硬朗。用户提供了一套水彩调色盘风格的色系，整体更柔和、治愈、手帐感更强。同时项目名称需要从 "Todo List" 更名为 "点点"，更贴合产品定位。

## What Changes

- 替换全局 8 色色板为用户提供的水彩色系
- 更新所有引用旧色值的文件（CSS 变量、JS 常量、硬编码色值）
- 项目名称从 "Todo List" 改为 "点点"（涉及 HTML title、PWA manifest、package.json）

## Capabilities

### New Capabilities

- `watercolor-palette`: 水彩风格色板系统，替换原有马克笔色板，涵盖 CSS 变量定义、PRESET_COLORS、confetti 颜色、硬编码色值

### Modified Capabilities

（无现有规范需要修改）

## Impact

- `src/index.css` — CSS 变量定义
- `src/components/HabitForm.jsx` — PRESET_COLORS 数组
- `src/utils/confetti.js` — NATURE_COLORS 数组
- `src/utils/habitStorage.js` — 默认颜色
- `src/components/Timeline.jsx` — 默认颜色参数
- `src/pages/HarvestHome.jsx` — SVG 硬编码颜色
- `src/App.css` — 硬编码色值
- `index.html` — 页面标题
- `vite.config.js` — PWA manifest
- `package.json` — 包名
