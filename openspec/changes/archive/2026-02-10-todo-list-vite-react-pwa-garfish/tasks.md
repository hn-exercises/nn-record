## 1. 项目初始化

- [x] 1.1 使用 Vite 创建 React18 项目并确认 package.json 位于根目录
- [x] 1.2 配置基础目录结构（src、public、assets）
- [x] 1.3 添加必要依赖（PWA 插件、Garfish 相关包）

## 2. PWA 接入

- [x] 2.1 配置 Vite PWA 插件与 manifest 基础信息
- [x] 2.2 注册 service worker 并区分开发/生产行为
- [x] 2.3 验证离线访问与安装提示的基础能力

## 3. Garfish 子应用集成

- [x] 3.1 定义并导出子应用生命周期方法（mount/unmount）
- [x] 3.2 在生命周期中完成 React 渲染与卸载清理
- [x] 3.3 验证在指定容器挂载与卸载行为

## 4. Todo 功能与持久化

- [x] 4.1 实现 todo 数据模型与本地状态管理
- [x] 4.2 实现新增、完成状态切换、删除等交互
- [x] 4.3 接入 Local Storage 读写与初始化加载

## 5. 验收与文档

- [x] 5.1 自检功能场景（新增/切换/删除/刷新保持）
- [x] 5.2 自检 PWA 与 Garfish 生命周期场景
- [x] 5.3 更新 README 或说明文档（如何运行与构建）
