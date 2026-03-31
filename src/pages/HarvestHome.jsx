import { useState, useMemo, useCallback } from 'react'
import { getHabits } from '../utils/habitStorage'
import { getAllCheckins, timestampToDateStr } from '../utils/checkinStorage'
import HabitOverviewList from '../components/HabitOverviewList'
import PineTreeChart from '../components/PineTreeChart'
import InlineFishingCatch from '../components/InlineFishingCatch'

/* ========== Helpers ========== */

const pad2 = (n) => String(n).padStart(2, '0')

/** 获取最近 N 天日期列表 */
const getRecentDays = (n) => {
  const days = []
  const d = new Date()
  for (let i = n - 1; i >= 0; i--) {
    const t = new Date(d)
    t.setDate(t.getDate() - i)
    days.push(`${t.getFullYear()}-${pad2(t.getMonth() + 1)}-${pad2(t.getDate())}`)
  }
  return days
}

/* ========== Trend Line Chart (SVG) ========== */

function TrendLine({ dayCounts }) {
  const days = getRecentDays(30)
  const values = days.map((d) => dayCounts[d] || 0)
  const maxVal = Math.max(1, ...values)

  const W = 320
  const H = 140
  const padX = 30
  const padY = 20
  const chartW = W - padX * 2
  const chartH = H - padY * 2

  const points = values.map((v, i) => {
    const x = padX + (i / (values.length - 1 || 1)) * chartW
    const y = padY + chartH - (v / maxVal) * chartH
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="harvest-chart">
      <h3>📈 最近 30 天趋势</h3>
      <svg viewBox={`0 0 ${W} ${H}`} className="trend-svg">
        {/* Y-axis labels */}
        <text x={padX - 4} y={padY + 4} fontSize={9} fill="#8E8E93" textAnchor="end">{maxVal}</text>
        <text x={padX - 4} y={padY + chartH + 4} fontSize={9} fill="#8E8E93" textAnchor="end">0</text>
        {/* grid line */}
        <line x1={padX} y1={padY + chartH} x2={padX + chartW} y2={padY + chartH} stroke="#F0E8E4" />
        <line x1={padX} y1={padY} x2={padX + chartW} y2={padY} stroke="#F0E8E4" strokeDasharray="4" />
        {/* line */}
        <polyline
          fill="none"
          stroke="#FF6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
        {/* dots */}
        {values.map((v, i) => {
          const x = padX + (i / (values.length - 1 || 1)) * chartW
          const y = padY + chartH - (v / maxVal) * chartH
          return <circle key={i} cx={x} cy={y} r={2.5} fill="#FF6B6B" />
        })}
        {/* X labels: first and last day */}
        <text x={padX} y={H - 2} fontSize={8} fill="#8E8E93">{days[0].slice(5)}</text>
        <text x={padX + chartW} y={H - 2} fontSize={8} fill="#8E8E93" textAnchor="end">{days[days.length - 1].slice(5)}</text>
      </svg>
    </div>
  )
}

/* ========== Donut Chart (SVG) ========== */

function DonutChart({ habitStats }) {
  const total = habitStats.reduce((s, h) => s + h.count, 0)
  if (total === 0) {
    return (
      <div className="harvest-chart">
        <h3>🍩 习惯占比</h3>
        <p className="harvest-chart__empty">暂无打卡数据</p>
      </div>
    )
  }

  const R = 60
  const CX = 80
  const CY = 80
  const circumference = 2 * Math.PI * R

  let offset = 0
  const arcs = habitStats.filter((h) => h.count > 0).map((h) => {
    const pct = h.count / total
    const dash = pct * circumference
    const arc = { ...h, dash, gap: circumference - dash, offset }
    offset += dash
    return arc
  })

  return (
    <div className="harvest-chart">
      <h3>🍩 习惯占比</h3>
      <div className="donut-wrapper">
        <svg viewBox="0 0 160 160" className="donut-svg">
          {arcs.map((a) => (
            <circle
              key={a.name}
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke={a.color}
              strokeWidth={20}
              strokeDasharray={`${a.dash} ${a.gap}`}
              strokeDashoffset={-a.offset}
              transform={`rotate(-90 ${CX} ${CY})`}
            />
          ))}
          <text x={CX} y={CY - 4} textAnchor="middle" fontSize={18} fontWeight={700} fill="#2D2D2D">{total}</text>
          <text x={CX} y={CY + 12} textAnchor="middle" fontSize={9} fill="#8E8E93">总次数</text>
        </svg>
        <div className="donut-legend">
          {arcs.map((a) => (
            <div key={a.name} className="donut-legend__item">
              <span className="donut-legend__dot" style={{ background: a.color }} />
              <span>{a.name}</span>
              <span className="donut-legend__count">{a.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ========== HarvestHome ========== */

export default function HarvestHome() {
  const [habits, setHabits] = useState(() => getHabits())
  const [viewMode, setViewMode] = useState('overview')
  const allCheckins = getAllCheckins()
  const currentYear = new Date().getFullYear()

  const refresh = useCallback(() => setHabits(getHabits()), [])

  // 按天聚合打卡次数
  const dayCounts = useMemo(() => {
    const counts = {}
    for (const stamps of Object.values(allCheckins)) {
      for (const ts of stamps) {
        const d = timestampToDateStr(ts)
        counts[d] = (counts[d] || 0) + 1
      }
    }
    return counts
  }, [allCheckins])

  // 各习惯统计
  const habitStats = useMemo(() => {
    return habits.map((h) => ({
      name: h.name,
      color: h.color,
      count: (allCheckins[h.id] || []).length,
    }))
  }, [habits, allCheckins])

  return (
    <div className="page harvest-home">
      <header className="page__header">
        <div>
          <h1>收获集<span className="page__title-deco">🏆</span></h1>
          <p className="page__subtitle">数据可视化，看见你的坚持 🌈</p>
        </div>
        <div className="harvest-toggle">
          <button
            type="button"
            className={`harvest-toggle__btn ${viewMode === 'overview' ? 'is-active' : ''}`}
            onClick={() => setViewMode('overview')}
          >
            概览
          </button>
          <button
            type="button"
            className={`harvest-toggle__btn ${viewMode === 'charts' ? 'is-active' : ''}`}
            onClick={() => setViewMode('charts')}
          >
            图表
          </button>
        </div>
      </header>

      {viewMode === 'overview' && (
        <HabitOverviewList habits={habits} />
      )}

      {viewMode === 'charts' && (
        <>
          <PineTreeChart habits={habits} allCheckins={allCheckins} />
          <InlineFishingCatch />
          <TrendLine dayCounts={dayCounts} />
          <DonutChart habitStats={habitStats} />
        </>
      )}
    </div>
  )
}
