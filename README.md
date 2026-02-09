# Todo List 示例项目

> Vite + React18 + PWA + Garfish 子应用 + Local Storage

## 功能概览

- Todo 新增、完成状态切换、删除
- Local Storage 持久化
- PWA 基础能力（离线缓存、可安装）
- Garfish 子应用生命周期（mount / unmount）

## 本地运行

1. 安装依赖

	 npm install

2. 启动开发服务

	 npm run dev

## 构建与预览

- 构建

	npm run build

- 预览

	npm run preview

## Garfish 子应用接入

子应用暴露 `mount` 与 `unmount` 方法，主应用调用后会在指定容器渲染/卸载。

## PWA 说明

生产环境会自动注册 service worker。若需要调试缓存，可在浏览器 Application 面板中清理站点数据。
