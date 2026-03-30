## 1. 视觉主题体系（CSS 变量与全局背景）

- [ ] 1.1 在 `index.css` `:root` 中新增渐变变量 `--gradient-page`（160deg 淡粉→淡紫→淡蓝）
- [ ] 1.2 新增 `--gradient-card`（135deg 半透明白渐变）
- [ ] 1.3 新增玻璃拟态变量 `--glass-blur: blur(20px)`、`--glass-border: 1px solid rgba(255,255,255,0.5)`
- [ ] 1.4 新增三级阴影变量 `--shadow-soft`、`--shadow-medium`、`--shadow-glow`
- [ ] 1.5 新增缓动变量 `--ease-bounce: cubic-bezier(0.34,1.56,0.64,1)`、`--ease-smooth: cubic-bezier(0.4,0,0.2,1)`
- [ ] 1.6 在 `index.css` body 中设置 `background: var(--gradient-page); background-attachment: fixed`
- [ ] 1.7 添加 `@supports not (backdrop-filter: blur(1px))` 降级规则
- [ ] 1.8 添加 `::selection` 伪元素自定义选中色（品牌粉半透明）
- [ ] 1.9 添加 WebKit 自定义滚动条样式（4px 圆角、品牌色半透明 thumb）

## 2. 字体与排版系统

- [ ] 2.1 在 `index.html` `<head>` 中添加 Google Fonts `<link>` 引入 Nunito（400/600/700，display=swap）
- [ ] 2.2 更新 `index.css` `:root` 的 `font-family` 为 `'Nunito', 'SF Pro Rounded', 'PingFang SC', system-ui, sans-serif`
- [ ] 2.3 更新全局 `line-height` 为 1.6（正文），h1 行高 1.2
- [ ] 2.4 为辅助文字类（label/hint/caption）添加 `letter-spacing: 0.02em`
- [ ] 2.5 为大号数字添加 `letter-spacing: -0.02em`

## 3. 主按钮渐变

- [ ] 3.1 修改 `.btn--primary` 背景为 `linear-gradient(135deg, var(--dopamine-pink), var(--dopamine-coral))`
- [ ] 3.2 添加 `.btn--primary:hover` 渐变角度微调（如 120deg）产生流动感
- [ ] 3.3 为 `.btn--primary` 添加 `position: relative; overflow: hidden` 为涟漪效果做准备
- [ ] 3.4 添加 `.btn--primary::after` 涟漪伪元素 + `@keyframes ripple` 动画

## 4. 底部导航重设计

- [ ] 4.1 在 `BottomNav.jsx` 中创建三个内联 SVG 图标组件（靶心/日历/奖杯），24×24 viewBox，stroke 风格
- [ ] 4.2 替换原 emoji 为 SVG 图标，设置默认 stroke 为 `currentColor`
- [ ] 4.3 添加 `.bottom-nav__dot` active 态圆点指示器 DOM 元素
- [ ] 4.4 在 App.css 中添加 `.bottom-nav__dot` 样式（4px 品牌色圆点 + scale 入场动效）
- [ ] 4.5 更新 `.bottom-nav` 背景为玻璃拟态（半透明白 + backdrop-filter + 上边缘柔和阴影）
- [ ] 4.6 更新非激活 Tab 字重为 500，激活为 700
- [ ] 4.7 移除旧的 `.bottom-nav__icon` emoji font-size 规则

## 5. 习惯卡片视觉增强

- [ ] 5.1 修改 `.habit-tile` 背景为玻璃拟态（半透明白 + backdrop-filter blur）
- [ ] 5.2 添加习惯色左侧装饰条（4px 宽渐变条，通过 `::before` 伪元素实现）
- [ ] 5.3 圆角改为 24px，更新阴影为 `var(--shadow-soft)`，hover 时 `var(--shadow-medium)`
- [ ] 5.4 hover 微位移统一为 `translateY(-2px)`，使用 `var(--ease-smooth)` 过渡
- [ ] 5.5 为 `.habit-tile--add` 添加 `@keyframes breathe` 虚线呼吸动效（opacity 0.4↔1，2s 循环）
- [ ] 5.6 在 `HabitHome.jsx` 为卡片添加 stagger 入场 CSS（`animation-delay` 基于 index）

## 6. 打卡弹窗（CheckinModal）升级

- [ ] 6.1 修改 CheckinModal.jsx 结构：将左侧色条改为顶部渐变横幅（`checkin-modal__gradient-bar`）
- [ ] 6.2 更新弹窗背景为玻璃拟态样式
- [ ] 6.3 打卡按钮改用渐变背景（复用 `.btn--primary` 渐变）
- [ ] 6.4 textarea 焦点态添加品牌色柔和光晕 box-shadow
- [ ] 6.5 弹窗入场动效改用 `--ease-bounce` 弹性缩放

## 7. 日历网格美化

- [ ] 7.1 修改 `.calendar` 背景为玻璃拟态
- [ ] 7.2 修改 `.is-selected` 样式为品牌色光晕 box-shadow + 缩放（替代简单描边）
- [ ] 7.3 添加 `.is-today` 脉冲环动效（`@keyframes pulse-ring`，2s 循环，品牌色半透明扩散）
- [ ] 7.4 修改 Calendar.jsx 中 `getMarkStyle` 逻辑：有标记日期在数字下方渲染彩色小圆点（3-4px）
- [ ] 7.5 在 Calendar.jsx 中为单元格添加 `<span className="calendar__dots">` 子元素结构
- [ ] 7.6 在 App.css 中添加 `.calendar__dots` 和 `.calendar__dot` 样式（居中排列小圆点）

## 8. 表单与输入控件升级

- [ ] 8.1 修改 `.habit-form__field input` 添加内阴影（`inset 0 2px 4px rgba(0,0,0,0.04)`）
- [ ] 8.2 修改焦点态 box-shadow 为品牌色柔和光晕
- [ ] 8.3 输入框圆角确保为 14px
- [ ] 8.4 修改 `.color-swatch.is-active` 为弹性缩放（scale 1.2）+ 白色外环 + 品牌色阴影光晕
- [ ] 8.5 `.habit-form` 卡片背景改为玻璃拟态

## 9. 空状态插画增强

- [ ] 9.1 修改 `HabitHome.jsx` 无习惯时显示 emoji 构图（🌱✨）+ 引导文案"开始你的第一个小习惯吧"
- [ ] 9.2 修改 `Timeline.jsx` 空状态显示 📝💫 + "记录你的第一个足迹"
- [ ] 9.3 修改 `HabitOverviewList.jsx` 空状态显示 🏆🌈 + "添加习惯后，这里会展示你的成就"
- [ ] 9.4 修改 `HabitCalendar.jsx` 空日期提示显示 📅✨ + "这天还没有打卡记录"
- [ ] 9.5 在 App.css 中统一空状态样式：emoji 区 2.5rem、容器 40px padding、虚线圆角边框

## 10. 页面标题装饰

- [ ] 10.1 为今日记标题添加装饰 emoji 或 CSS 小图形
- [ ] 10.2 为时光补标题添加装饰元素
- [ ] 10.3 为收获集标题添加装饰元素
- [ ] 10.4 在 App.css 中添加标题装饰元素样式

## 11. 微交互与动效体系

- [ ] 11.1 定义 `@keyframes fade-up`（opacity 0→1 + translateY 12px→0）
- [ ] 11.2 定义 `@keyframes pulse-ring`（品牌色扩散环，2s 循环）
- [ ] 11.3 定义 `@keyframes breathe`（opacity 0.4↔1，2s 循环）
- [ ] 11.4 定义 `@keyframes ripple`（涟漪扩散，400ms）
- [ ] 11.5 为 `.app-layout__content` 添加页面内容淡入动画（fade-in 200ms）
- [ ] 11.6 统一所有组件 transition 使用 `var(--ease-smooth)` 或 `var(--ease-bounce)`
- [ ] 11.7 为弹窗入场（`@keyframes modal-in`）更新为使用 `--ease-bounce` 缓动

## 12. 收获集图表与 Timeline 视觉升级

- [ ] 12.1 修改 `.harvest-chart` 背景为玻璃拟态
- [ ] 12.2 修改 `.inline-fishing` 背景为玻璃拟态 + 保留渐变装饰
- [ ] 12.3 修改 Timeline 轴线为渐变色（`.timeline__line` 使用 linear-gradient 上深下浅）
- [ ] 12.4 修改 Timeline 节点圆点为环形效果（白色内圈 + 彩色外环）
- [ ] 12.5 修改 `.overview-card` 背景为玻璃拟态

## 13. 验证与收尾

- [ ] 13.1 执行 `vite build` 确认 0 错误
- [ ] 13.2 在浏览器中逐页检查三个 Tab 的视觉效果
- [ ] 13.3 检查 backdrop-filter 降级在无支持环境下的表现
- [ ] 13.4 检查所有动效时长 ≤ 300ms（涟漪 400ms 除外），不拖沓
- [ ] 13.5 确认所有 CSS 变量被正确引用，无硬编码值残留
