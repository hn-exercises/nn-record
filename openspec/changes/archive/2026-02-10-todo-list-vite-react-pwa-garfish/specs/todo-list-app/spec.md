## ADDED Requirements

### Requirement: 应用初始化与渲染
应用 MUST 在挂载容器存在时完成初始化并渲染 todo 列表界面。

#### Scenario: 正常挂载
- **WHEN** 主应用调用子应用的 mount 并传入有效容器
- **THEN** 应用在容器内渲染 todo 列表与输入区域

### Requirement: Todo 添加
应用 MUST 允许用户新增 todo 项并显示在列表中。

#### Scenario: 新增一条 todo
- **WHEN** 用户输入文本并触发新增操作
- **THEN** 列表中出现新的 todo 项

### Requirement: Todo 完成状态切换
应用 MUST 支持切换 todo 项的完成状态。

#### Scenario: 切换完成状态
- **WHEN** 用户点击某条 todo 的完成状态控件
- **THEN** 该 todo 项的状态在完成/未完成间切换并反映在界面上

### Requirement: Todo 删除
应用 MUST 支持删除指定的 todo 项。

#### Scenario: 删除一条 todo
- **WHEN** 用户触发删除操作
- **THEN** 该 todo 项从列表中移除

### Requirement: Local Storage 持久化
应用 MUST 使用 Local Storage 持久化 todo 数据，刷新页面后数据不丢失。

#### Scenario: 刷新后数据保留
- **WHEN** 用户刷新页面
- **THEN** todo 列表从 Local Storage 恢复并保持一致

### Requirement: PWA 基础能力
应用 MUST 提供可安装的 PWA 基础配置与离线缓存能力。

#### Scenario: 首次访问后离线可用
- **WHEN** 用户首次访问并完成资源缓存
- **THEN** 断网后仍可打开应用并看到最近的 todo 列表

### Requirement: Garfish 子应用生命周期
应用 MUST 暴露 Garfish 子应用生命周期方法以供主应用加载与卸载。

#### Scenario: 主应用卸载子应用
- **WHEN** 主应用调用子应用的 unmount
- **THEN** 应用清理渲染并释放容器节点内容

### Requirement: 开发依赖不包含 ESLint
项目 MUST 不包含 ESLint 相关依赖与 lint 脚本。

#### Scenario: 依赖检查
- **WHEN** 检查 package.json 的 scripts 与 devDependencies
- **THEN** 不存在 eslint 相关脚本与依赖
