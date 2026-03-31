import { useMemo, useState, useRef, useEffect, useCallback } from 'react'

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

export default function Timeline({ dates = [], color = '#FF6B6B', lazy = false, pageSize = 20 }) {
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

  // Total flat entry count
  const totalEntries = useMemo(
    () => groups.reduce((sum, g) => sum + g.entries.length, 0),
    [groups],
  )

  // Lazy-load: control how many entries to render
  const [visibleCount, setVisibleCount] = useState(lazy ? pageSize : Infinity)
  const sentinelRef = useRef(null)

  // Reset visibleCount when dates change
  useEffect(() => {
    if (lazy) setVisibleCount(pageSize)
  }, [dates, lazy, pageSize])

  const allLoaded = visibleCount >= totalEntries

  // Slice groups by visibleCount (entry-level, not group-level)
  const visibleGroups = useMemo(() => {
    if (!lazy) return groups
    let remaining = visibleCount
    const result = []
    for (const g of groups) {
      if (remaining <= 0) break
      if (g.entries.length <= remaining) {
        result.push(g)
        remaining -= g.entries.length
      } else {
        result.push({ day: g.day, entries: g.entries.slice(0, remaining) })
        remaining = 0
      }
    }
    return result
  }, [groups, visibleCount, lazy])

  // IntersectionObserver for sentinel
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + pageSize)
  }, [pageSize])

  useEffect(() => {
    if (!lazy || allLoaded) return
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore()
      },
      { rootMargin: '100px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [lazy, allLoaded, loadMore])

  if (groups.length === 0) {
    return (
      <div className="timeline timeline--empty">
        <span className="empty-state__emoji">📝💫</span>
        <p>还没有打卡记录，开始第一次打卡吧！</p>
      </div>
    )
  }

  const totalGroups = groups.length

  return (
    <div className="timeline">
      {visibleGroups.map((g, gi) => (
        <div key={g.day} className="timeline__group">
          <div className="timeline__day-label">{g.day}</div>
          {g.entries.map((entry, ti) => {
            const isLastVisible = lazy && gi === visibleGroups.length - 1 && ti === g.entries.length - 1 && !allLoaded
            return (
              <div key={entry.ts} className="timeline__item">
                <div className="timeline__dot" style={{ background: color }} />
                {(!isLastVisible && (ti < g.entries.length - 1 || gi < totalGroups - 1)) && (
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
            )
          })}
        </div>
      ))}

      {/* Lazy-load sentinel & status */}
      {lazy && !allLoaded && (
        <div ref={sentinelRef} className="timeline__loader">
          <span className="timeline__loader-dot" />
          <span className="timeline__loader-dot" />
          <span className="timeline__loader-dot" />
          <span>加载中...</span>
        </div>
      )}
      {lazy && allLoaded && totalEntries > 0 && (
        <div className="timeline__end">已全部加载 🎉</div>
      )}
    </div>
  )
}
