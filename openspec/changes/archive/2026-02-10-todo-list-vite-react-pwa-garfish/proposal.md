## Why

需要一个基于 Vite + React18 的 todo-list 示例项目作为后续应用开发的基线，当前仓库缺少可直接演进的项目骨架。引入 PWA、Garfish 子应用与本地存储，可提前验证架构可行性并降低后续集成风险。

## What Changes

- 新增一个 Vite + React18 的 todo-list 示例项目骨架（package.json 位于根目录）。
- 接入 PWA 能力（离线缓存与安装提示的基础配置）。
- 作为 Garfish 子应用可被主应用加载运行。
- 使用 Local Storage 持久化 todo 数据。

## Capabilities

### New Capabilities
- `todo-list-app`: 提供 todo-list 示例项目骨架与基础功能（PWA、Garfish 子应用、Local Storage 持久化）。

### Modified Capabilities
- 无

## Impact

- 代码结构：新增前端项目目录与构建配置。
- 依赖：引入 Vite、React18、PWA 插件与 Garfish 相关依赖。
- 运行方式：新增本地开发与构建脚本，输出可被 Garfish 主应用加载的子应用产物。
