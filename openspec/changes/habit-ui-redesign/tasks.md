## 1. 多巴胺主题基础设施

- [x] 1.1 在 index.css 中定义多巴胺色系 CSS 变量（--dopamine-pink, --dopamine-mint, --dopamine-lemon, --dopamine-lavender, --dopamine-coral, --dopamine-sky, --dopamine-peach, --dopamine-lilac）
- [x] 1.2 将 index.css 全局背景改为白色（#FFFFFF），文字主色改为深色（#2D2D2D）
- [x] 1.3 更新 HabitForm.jsx 中 PRESET_COLORS 为多巴胺色系颜色值

## 2. 底部导航栏精简

- [x] 2.1 修改 BottomNav.jsx，移除"待办计划"和"Todo List"两个 Tab 项，仅保留"习惯打卡"
- [x] 2.2 修改 router.jsx，移除 /planner、/planner/done、/todo 路由配置
- [x] 2.3 在 router.jsx 中新增 /habit/:id 路由，指向 HabitDetail 页面组件

## 3. 习惯首页网格布局

- [x] 3.1 重写 HabitHome.jsx 为 2 列方块网格布局（CSS Grid，每行 2 个卡片）
- [x] 3.2 实现习惯方块卡片组件：显示习惯名称、累计天数、打卡按钮，背景使用习惯颜色浅色调
- [x] 3.3 实现网格末尾"+"新增习惯卡片（虚线边框方块），点击弹出 HabitForm
- [x] 3.4 实现空状态：无习惯时仅显示"+"卡片引导创建

## 4. 习惯编辑与删除

- [x] 4.1 在 habitStorage.js 中新增 updateHabit(id, updates) 方法
- [x] 4.2 修改 HabitForm.jsx 支持编辑模式：接收 habit 对象作为 prop，预填数据，开始时间只读
- [x] 4.3 创建 HabitDetail 详情页组件（src/pages/HabitDetail.jsx），展示习惯基本信息
- [x] 4.4 在 HabitDetail 中实现编辑功能：点击编辑按钮弹出预填的 HabitForm
- [x] 4.5 在 HabitDetail 中实现删除功能：确认对话框 → 删除习惯及关联打卡记录 → 返回首页

## 5. 打卡时间轴

- [x] 5.1 创建 Timeline 组件（src/components/Timeline.jsx），按日期倒序展示打卡记录
- [x] 5.2 Timeline 每条记录显示日期（YYYY-MM-DD）和习惯颜色标记圆点
- [x] 5.3 在 HabitDetail 页面下方集成 Timeline 组件，展示该习惯的所有打卡记录
- [x] 5.4 在 HabitDetail 页面中支持打卡操作，打卡成功后时间轴实时更新

## 6. 打卡撒花动效

- [x] 6.1 安装 canvas-confetti 依赖
- [x] 6.2 创建 confetti 工具函数（src/utils/confetti.js），封装全屏撒花动效（多巴胺色系粒子，500-800ms）
- [x] 6.3 在 HabitHome 的打卡按钮点击成功后调用撒花动效
- [x] 6.4 在 HabitDetail 的打卡按钮点击成功后调用撒花动效

## 7. 全局样式重写

- [x] 7.1 重写 App.css 中习惯首页样式：方块网格、卡片圆角（16-20px）、间距舒适
- [x] 7.2 重写 App.css 中 HabitForm 弹窗样式：白色背景、多巴胺色按钮
- [x] 7.3 重写 App.css 中底部导航栏样式：白色背景、选中项多巴胺色高亮
- [x] 7.4 重写 App.css 中 HabitDetail 详情页样式：卡片信息区 + 时间轴样式
- [x] 7.5 重写 App.css 中 Calendar 补卡页面样式：适配白色主题
- [x] 7.6 清理 App.css 中已移除模块（PlannerHome、PlannerDone、TodoList）的残留样式

## 8. 验证与清理

- [x] 8.1 删除不再使用的页面文件：PlannerHome.jsx、PlannerDone.jsx、TodoList.jsx
- [x] 8.2 删除不再使用的存储工具：plannerStorage.js
- [x] 8.3 确认项目构建成功（npm run build 无报错）
- [x] 8.4 验证 PWA 配置在白色主题下的 theme_color 和 background_color 一致性
