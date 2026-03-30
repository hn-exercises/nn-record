## MODIFIED Requirements

### Requirement: 应用初始化与渲染
应用 MUST 在挂载容器存在时完成初始化，渲染包含路由和底部导航的多模块应用界面。

#### Scenario: 正常挂载
- **WHEN** 主应用调用子应用的 mount 并传入有效容器
- **THEN** 应用在容器内渲染带有底部导航的多模块界面，默认显示习惯打卡首页
