# 设计：日历渐变调色盘自然过渡

## 背景与目标

当前 `Calendar.jsx` 中 `getMarkStyle` 对多色日期使用等分硬停 `linear-gradient`，颜色之间无过渡，呈条纹状。需改为调色盘风格的自然过渡渐变，匹配治愈手帐风视觉。

## 设计方案

### 渐变类型

使用 `conic-gradient`（圆锥渐变），颜色沿圆周自然过渡，首尾闭合。

### 实现细节

```js
// 1 色：纯色
{ background: colors[0] }

// 2+ 色：conic-gradient 自然过渡
const loop = [...colors, colors[0]]
{ background: `conic-gradient(from 135deg, ${loop.join(', ')})` }
```

- `from 135deg`：起始角度与原 linear-gradient 一致
- 末尾追加 `colors[0]` 实现首尾无缝衔接
- 不指定百分比停靠点，浏览器自动均匀分配并平滑过渡

### 兼容性

- `conic-gradient` 主流浏览器均已支持（Chrome 69+, Safari 12.1+, Firefox 83+）
- PWA 目标平台完全覆盖

## 风险与权衡

- 无降级风险，目标用户浏览器全部支持
- 色彩数量 ≤2 时效果较微妙，但仍优于硬分段
