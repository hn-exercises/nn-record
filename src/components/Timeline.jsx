import { useMemo } from 'react'

const formatTime = (ts) => {
  const d = new Date(ts)
  const h = String(d.getHours()).padStart(2, '0')
  const m = String(d.getMinutes()).padStart(2, '0')
  return `${h}:${m}`
}

const formatDate = (ts) => {
  const d = new Date(ts)
  const y = d.getFullYear()
  const mo = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${mo}-${dd}`
}

const isBackfill = (ts) => {
  const d = new Date(ts)
  return d.getHours() === 12 && d.getMinutes() === 0 && d.getSeconds() === 0
}

export default function Timeline({ dates = [], color = '#FF6B9D' }) {
  // dates can be number[] or { ts, note }[] — normalize
  const groups = useMemo(() => {
    if (!dates.length) return []
    const normalized = dates.map((d) =>
      typeof d === 'number' ? { ts: d, note: '' } : d
    )
    const sorted = [...normalized].sort((a, b) => b.ts - a.ts)
    const map = new Map()
    for (const entry of sorted) {
      const day = formatDate(entry.ts)
      if (!map.has(day)) map.set(day, [])
      map.get(day).push(entry)
    }
    return [...map.entries()].map(([day, entries]) => ({ day, entries }))
  }, [dates])

  if (groups.length === 0) {
    return (
      <div className="timeline timeline--empty">
        <span className="empty-state__emoji">📝💫</span>
        <p>还没有打卡记录，开始第一次打卡吧！</p>
      </div>
    )
  }

  return (
    <div className="timeline">
      {groups.map((g, gi) => (
        <div key={g.day} className="timeline__group">
          <div className="timeline__day-label">{g.day}</div>
          {g.entries.map((entry, ti) => (
            <div key={entry.ts} className="timeline__item">
              <div className="timeline__dot" style={{ background: color }} />
              {(ti < g.entries.length - 1 || gi < groups.length - 1) && (
                <div className="timeline__line" style={{ '--timeline-color': color, background: color }} />
              )}
              <div className="timeline__content">
                <div className="timeline__content-row">
                  <span className="timeline__date">
                    {isBackfill(entry.ts) ? '补卡' : formatTime(entry.ts)}
                  </span>
                  <span className="timeline__label"> 已打卡</span>
                </div>
                {entry.note ? (
                  <span className="timeline__note">{entry.note}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
