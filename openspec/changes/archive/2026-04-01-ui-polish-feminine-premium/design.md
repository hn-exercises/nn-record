## Context

本项目为基于 React 18 + Vite 7 的习惯追踪 PWA，目标用户 25-30 岁女性。当前版本功能完备（三个页签：今日记/时光补/收获集，打卡弹窗，日历补卡，数据可视化），但视觉表达仍停留在开发者原型阶段：纯白底色、系统字体、平面卡片、emoji 图标、无装饰元素。整体缺乏设计语言的一致性和情感层次。

**现有技术栈约束：**
- React 18.2 + react-router-dom (HashRouter)
- 纯 CSS（无 CSS-in-JS / Tailwind），所有样式集中在 `index.css`（变量）+ `App.css`（~1300行）
- 无第三方 UI 库，组件均为手写
- PWA via vite-plugin-pwa，纯前端 localStorage 存储
- 已有 canvas-confetti 作为唯一视觉反馈库

## Goals / Non-Goals

**Goals:**
- G1：建立一套完整的视觉设计体系（色彩/渐变/阴影/字体/间距），以 CSS 变量为核心，所有组件统一引用
- G2：提升视觉品质至"正规团队产出"水准：柔和渐变背景、玻璃拟态卡片、精致阴影层次
- G3：引入适合目标用户的字体（Nunito/Quicksand + 系统圆体），强化排版层次感
- G4：用自定义 SVG 小图标替代底部导航的 emoji，增加 active 态视觉指示
- G5：为空状态添加 emoji 插画构图，提升情感温度
- G6：建立统一的微交互动效体系（弹性曲线、入场动画、涟漪反馈）
- G7：全组件视觉打磨（卡片/弹窗/日历/表单/图表/Timeline）

**Non-Goals:**
- 不修改任何功能逻辑或数据模型（checkinStorage / habitStorage 零改动）
- 不引入 CSS 预处理器或 CSS-in-JS 框架
- 不添加新的 npm 依赖（字体通过 CDN 引入）
- 不重构组件层次或路由结构
- 不做暗色主题（未来可扩展但本次不涉及）
- 不做国际化

## Decisions

### D1：色彩体系 — 保留多巴胺色板 + 新增渐变/玻璃拟态层

**方案**：在 `:root` 中新增渐变变量和玻璃拟态相关变量，不替换现有 `--dopamine-*` 色值。

```
--gradient-page: linear-gradient(160deg, #FFF5F7 0%, #F8F0FF 50%, #F0F7FF 100%);
--gradient-card: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.6));
--glass-blur: blur(20px);
--glass-border: 1px solid rgba(255,255,255,0.5);
--shadow-soft: 0 4px 24px rgba(0,0,0,0.04);
--shadow-medium: 0 8px 32px rgba(0,0,0,0.08);
--shadow-glow: 0 0 20px rgba(255,107,157,0.15);
```

**理由**：渐变底色（淡粉→淡紫→淡蓝）取代纯白，营造温暖柔和感；玻璃拟态让卡片在渐变底上层次分明，同时保留已有色板不破坏现有色彩映射关系。

**备选方案（弃用）**：全部替换色板为更柔和的值 → 会影响所有已有组件的 `color-mix` 计算，回归成本高。

### D2：字体方案 — Google Fonts CDN + 系统圆体 fallback

**方案**：在 `index.html` 的 `<head>` 中通过 `<link>` 引入 Nunito（数字/英文）。CSS 中更新 `font-family` 为 `'Nunito', 'SF Pro Rounded', 'PingFang SC', system-ui, sans-serif`。

**理由**：Nunito 是免费的圆润几何无衬线体，辨识度高且文件小（仅需 400/600/700 三个字重），非常适合年轻女性向产品。中文使用 PingFang SC / 系统默认，不引入中文 Web 字体（体积过大）。

**备选方案（弃用）**：使用 Quicksand → 更几何但中文混排效果不如 Nunito 自然；使用 npm 安装字体 → 增加打包体积，不如 CDN 缓存效果。

### D3：底部导航图标 — 内联 SVG path 替代 emoji

**方案**：在 `BottomNav.jsx` 中用小型 SVG 组件替代 emoji（🎯→target 图标，📅→calendar 图标，🏆→trophy 图标）。每个图标约 1-2 个 `<path>` 即可，不引入图标库。Active 态增加一个 4px 圆点指示器（带 scale 入场动效）。

**理由**：emoji 在不同平台渲染差异大且无法控制颜色/尺寸，自定义 SVG 可精确匹配设计体系配色。Active 指示器提供更精致的状态反馈。

**备选方案（弃用）**：引入图标库（lucide-react/heroicons）→ 增加依赖，项目只需 3 个图标不值得。

### D4：微交互动效 — CSS 纯实现 + 统一 timing-function

**方案**：定义统一弹性缓动变量 `--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)` 和 `--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)`。所有 `transition` 和 `animation` 使用这两个变量。新增：列表 stagger 入场（@keyframes fade-up + animation-delay）、日历今日脉冲（@keyframes pulse-ring）、打卡按钮涟漪（CSS ::after pseudo-element）。

**理由**：纯 CSS 实现，零 JS 成本，不增加 bundle；统一缓动曲线让所有动效"调性一致"。

**备选方案（弃用）**：使用 framer-motion → 功能强大但增加 ~30KB 依赖，项目规模不需要。

### D5：空状态 — emoji 组合构图（纯文本方案）

**方案**：每个空状态区域使用 2-3 个 emoji + 装饰性文字组合，排版为居中大号 emoji + 副标题提示。不引入 SVG 插画文件。

```
示例："暂无习惯" → 🌱✨ + "开始你的第一个小习惯吧"
"暂无打卡" → 📝💫 + "记录你的第一个足迹"
```

**理由**：emoji 跨平台可用且零文件体积，通过精心选择和排版组合同样可以传递可爱情感。如果后续要求更高品质可替换为自绘 SVG。

### D6：页面渐变底色实现 — body 级 background

**方案**：将 `--gradient-page` 设置在 `body` 上（`background: var(--gradient-page); background-attachment: fixed`），所有卡片/模块使用半透明白底 + backdrop-filter: blur() 形成玻璃拟态效果。

**理由**：`background-attachment: fixed` 让渐变不随滚动移动，视觉稳定；卡片的 `backdrop-filter` 在渐变背景上自然产生毛玻璃效果。

### D7：CSS 架构保持不变 — 继续使用 index.css + App.css 分工

**方案**：变量/全局样式在 `index.css`，组件样式在 `App.css`。新增的变量（渐变/阴影/缓动）统一加入 `:root`。不拆分 CSS 文件。

**理由**：项目规模仍在 1500 行以内，拆分反而增加维护负担。当 App.css 超过 2000 行时再考虑按模块拆分。

## Risks / Trade-offs

- **[R1] backdrop-filter 兼容性** → 在不支持的浏览器中降级为纯白半透明背景（`@supports not (backdrop-filter: blur(1px)) { ... }`）
- **[R2] CSS 改动范围大** → 按组件分批实施，每批完成后 `vite build` 验证零错误
- **[R3] Google Fonts CDN 首次加载闪烁 (FOUT)** → 设置 `font-display: swap` + 系统 fallback 字体保底
- **[R4] 渐变底色可能与现有 color-mix 计算冲突** → 所有卡片背景改为 rgba 半透明白，不再依赖 color-mix 与纯白混合
- **[R5] 过度设计风险** → 保持 DRY：复用变量不硬编码值；动效时长 ≤ 300ms 避免拖沓
