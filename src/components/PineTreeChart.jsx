import { useMemo } from 'react'

const pad2 = (n) => String(n).padStart(2, '0')

const getRecentDays = (n) => {
  const days = []
  const d = new Date()
  for (let i = n - 1; i >= 0; i--) {
    const t = new Date(d)
    t.setDate(t.getDate() - i)
    days.push(
      `${t.getFullYear()}-${pad2(t.getMonth() + 1)}-${pad2(t.getDate())}`,
    )
  }
  return days
}

/**
 * 松树时间轴 — 横向滚动 SVG
 * @param {{ habits: Array<{id,name,color}>, allCheckins: {[habitId]: number[]} }} props
 */
export default function PineTreeChart({ habits, allCheckins }) {
  const days = useMemo(() => getRecentDays(30), [])

  // 按天聚合各习惯打卡
  const dayData = useMemo(() => {
    const dateStrFromTs = (ts) => {
      const d = new Date(ts)
      return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
    }
    return days.map((date) => {
      const habitHits = []
      for (const h of habits) {
        const stamps = allCheckins[h.id] || []
        const hasHit = stamps.some((ts) => dateStrFromTs(ts) === date)
        if (hasHit) {
          habitHits.push({ name: h.name, color: h.color })
        }
      }
      return { date, habits: habitHits }
    })
  }, [days, habits, allCheckins])

  const treeSpacing = 48
  const treeBaseY = 130
  const trunkW = 8
  const trunkH = 40
  const stumpH = 14
  const triBaseMax = 36
  const triH = 18
  const svgW = days.length * treeSpacing + 20
  const svgH = 180

  return (
    <div className="harvest-chart">
      <h3>🌲 松树时间轴（近 30 天）</h3>
      <div className="pine-tree-scroll">
        <svg width={svgW} height={svgH} className="pine-tree-svg">
          {dayData.reverse().map((d, i) => {
            const cx = 20 + i * treeSpacing
            const hitCount = d.habits.length

            if (hitCount === 0) {
              // 灰色树桩
              return (
                <g key={d.date}>
                  <rect
                    x={cx - trunkW / 2}
                    y={treeBaseY - stumpH}
                    width={trunkW}
                    height={stumpH}
                    rx={2}
                    fill="#D0D0D0"
                  />
                  <text
                    x={cx}
                    y={treeBaseY + 16}
                    textAnchor="middle"
                    fontSize={8}
                    fill="#8E8E93"
                  >
                    {d.date.slice(5)}
                  </text>
                </g>
              )
            }

            // 树干
            const trunkTop = treeBaseY - trunkH
            // 三角形树冠从 trunkTop 往上叠加
            const triangles = d.habits.map((h, hi) => {
              const baseW = triBaseMax - hi * (triBaseMax / (hitCount + 1))
              const top = trunkTop - (hi + 1) * triH
              const bottom = trunkTop - hi * triH
              const points = `${cx},${top} ${cx - baseW / 2},${bottom} ${cx + baseW / 2},${bottom}`
              return (
                <polygon
                  key={h.color + hi}
                  points={points}
                  fill={h.color}
                  opacity={0.85}
                />
              )
            })

            return (
              <g key={d.date}>
                <rect
                  x={cx - trunkW / 2}
                  y={trunkTop}
                  width={trunkW}
                  height={trunkH}
                  rx={2}
                  fill="#B0B0B0"
                />
                {triangles}
                <text
                  x={cx}
                  y={treeBaseY + 16}
                  textAnchor="middle"
                  fontSize={8}
                  fill="#8E8E93"
                >
                  {d.date.slice(5)}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
