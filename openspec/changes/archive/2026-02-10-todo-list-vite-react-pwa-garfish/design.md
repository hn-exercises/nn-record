## Context

当前仓库仅有 openspec 目录与指导文档，缺少可运行的前端示例项目。目标是建立基于 Vite + React18 的 todo-list 基线项目，并接入 PWA、Garfish 子应用与 Local Storage 持久化能力，便于后续应用在此基础上演进与集成。

## Goals / Non-Goals

**Goals:**
- 建立可运行的 Vite + React18 todo-list 示例项目。
- 集成 PWA 基础能力（离线缓存、安装提示基础配置）。
- 作为 Garfish 子应用可被主应用加载与卸载。
- 使用 Local Storage 持久化 todo 数据，刷新后不丢失。

**Non-Goals:**
- 不实现复杂的用户体系、同步或协作功能。
- 不设计服务端 API 或后端存储。
- 不覆盖完整的多端适配与无障碍规范。

## Decisions

1) **使用 Vite + React18 作为构建与框架基础**
- 选择原因：启动快、配置轻量、生态完善，适合作为示例项目基线。
- 备选方案：CRA（已不再推荐，构建速度慢，配置受限）。

2) **PWA 采用 Vite PWA 插件**
- 选择原因：与 Vite 配置自然集成，生成 service worker 与 manifest 的成本低。
- 备选方案：手写 Workbox 配置（灵活但成本高，示例项目不需要）。

3) **Garfish 子应用接入方式**
- 选择原因：通过导出生命周期方法（如 mount/unmount）保持与主应用集成方式清晰。
- 备选方案：运行时 DOM 挂载约定（缺少标准生命周期约束）。

4) **Local Storage 作为数据持久化**
- 选择原因：无需后端、实现简单，符合示例项目定位。
- 备选方案：IndexedDB（复杂度高，不符合示例项目的轻量目标）。

## Risks / Trade-offs

- [PWA 缓存策略不当导致调试困难] → 采用开发环境禁用或简化缓存策略，并提供清理指引。
- [Garfish 生命周期接入与 React 渲染冲突] → 统一入口渲染与卸载逻辑，确保容器节点被正确清理。
- [Local Storage 数据结构变更导致兼容问题] → 预留版本字段，变更时提供降级处理。

## Migration Plan

- 第一步：在根目录创建 Vite + React18 项目结构与基础脚本。
- 第二步：接入 PWA 插件与基础 manifest。
- 第三步：添加 Garfish 子应用生命周期导出与挂载容器。
- 第四步：实现 todo-list 及 Local Storage 持久化逻辑。
- 回滚策略：回退到不含 PWA/子应用能力的基础版本；必要时删除 service worker 注册。

## Open Questions

- PWA 缓存策略是否需要区分开发与生产的更细粒度控制？
- Garfish 主应用的容器命名与加载规范是否已有约定？
