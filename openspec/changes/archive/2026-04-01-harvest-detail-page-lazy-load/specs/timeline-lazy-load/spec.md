## ADDED Requirements

### Requirement: Timeline 懒加载模式
Timeline 组件 SHALL 支持 `lazy` prop，当 `lazy={true}` 时启用懒加载模式，首屏仅渲染 `pageSize` 条记录，随后按需加载更多。当 `lazy` 未设置或为 `false` 时，行为与现有完全一致（一次性渲染全部）。

#### Scenario: 懒加载模式首屏渲染
- **WHEN** Timeline 以 `lazy={true}` 和 `pageSize={20}` 渲染，且总记录数大于 20 条
- **THEN** 首屏仅渲染最近的 20 条打卡记录（按时间倒序）

#### Scenario: 非懒加载模式向后兼容
- **WHEN** Timeline 未设置 `lazy` prop 或 `lazy={false}`
- **THEN** 组件一次性渲染全部打卡记录，行为与现有完全一致

### Requirement: 滚动触底自动加载
当 `lazy={true}` 时，Timeline SHALL 在用户滚动接近底部时自动加载下一批记录。

#### Scenario: 触底加载更多
- **WHEN** 用户在懒加载模式下滚动，哨兵元素（sentinel）进入视口
- **THEN** Timeline 自动追加下一批 `pageSize` 条记录到已渲染列表中

#### Scenario: 记录全部加载完毕
- **WHEN** 所有打卡记录已渲染完毕，哨兵元素进入视口
- **THEN** 不再追加新记录，哨兵元素隐藏或显示"已全部加载"提示

### Requirement: 加载状态提示
懒加载过程中 SHALL 展示清晰的状态提示，帮助用户理解当前加载进度。

#### Scenario: 加载中状态
- **WHEN** 新一批记录正在追加（哨兵元素进入视口且仍有更多数据）
- **THEN** 展示"加载中..."提示（可带简单动画）

#### Scenario: 全部加载完成状态
- **WHEN** 所有记录已渲染完毕
- **THEN** 展示"已全部加载 🎉"终态提示文本

#### Scenario: 记录为空
- **WHEN** 习惯没有任何打卡记录
- **THEN** 展示空状态提示（与现有 Timeline 空状态一致）

### Requirement: IntersectionObserver 实现
懒加载的滚动检测 SHALL 使用浏览器原生 `IntersectionObserver` API 实现，不引入外部滚动库。

#### Scenario: 观察者创建与清理
- **WHEN** Timeline 以 `lazy={true}` 挂载
- **THEN** 创建 IntersectionObserver 监听哨兵元素；组件卸载时自动 disconnect 释放资源

#### Scenario: 无更多数据时停止观察
- **WHEN** 全部记录已加载完毕
- **THEN** IntersectionObserver 停止观察哨兵元素，避免无效回调
