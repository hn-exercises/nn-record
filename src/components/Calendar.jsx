import { useMemo } from 'react'

/**
 * 轻量月历网格组件
 * markedDates: { [dateStr]: string[] }  值为颜色数组（支持多色渐变）
 */
export default function Calendar({
  year,
  month,
  onPrev,
  onNext,
  onSelectDate,
  markedDates = {},
  selectedDate,
  disableFuture = true,
}) {
  const today = useMemo(() => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  }, [])

  const { days, startDay } = useMemo(() => {
    const daysInMonth = new Date(year, month, 0).getDate()
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay()
    const daysList = []
    for (let d = 1; d <= daysInMonth; d++) {
      const mm = String(month).padStart(2, '0')
      const dd = String(d).padStart(2, '0')
      daysList.push({ day: d, dateStr: `${year}-${mm}-${dd}` })
    }
    return { days: daysList, startDay: firstDayOfWeek }
  }, [year, month])

  const weekLabels = ['日', '一', '二', '三', '四', '五', '六']
  const monthLabel = `${year}年${month}月`

  const getMarkStyle = (colors) => {
    // With dot-based marking, we no longer paint the cell background.
    if (!colors || colors.length === 0) return undefined
    return {
      borderColor: colors[0],
    }
  }

  const getSelectedStyle = (markStyle) => {
    const base = markStyle || {}
    return {
      ...base,
      transform: 'scale(1.15)',
      zIndex: 2,
      borderColor: 'var(--dopamine-pink)',
      borderWidth: '4px',
    }
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button type="button" className="btn btn--icon" onClick={onPrev}></button>
        <span className="calendar__title">{monthLabel}</span>
        <button type="button" className="btn btn--icon" onClick={onNext}></button>
      </div>
      <div className="calendar__grid">
        {weekLabels.map((w) => (
          <div key={w} className="calendar__weekday">{w}</div>
        ))}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`blank-${i}`} className="calendar__cell calendar__cell--blank" />
        ))}
        {days.map(({ day, dateStr }) => {
          const isFuture = dateStr > today
          const isDisabled = disableFuture && isFuture
          const isToday = dateStr === today
          const isSelected = dateStr === selectedDate
          const colors = markedDates[dateStr]
          const hasMarks = colors && colors.length > 0
          const markStyle = hasMarks ? getMarkStyle(colors) : undefined
          const cellStyle = isSelected
            ? getSelectedStyle(markStyle)
            : markStyle

          return (
            <button
              key={dateStr}
              type="button"
              disabled={isDisabled}
              className={[
                'calendar__cell',
                isToday && 'is-today',
                isSelected && 'is-selected',
                hasMarks && 'is-marked',
                isDisabled && 'is-disabled',
              ].filter(Boolean).join(' ')}
              style={cellStyle}
              onClick={() => !isDisabled && onSelectDate?.(dateStr)}
            >
              {day}
              {hasMarks && (
                <span className="calendar__dots">
                  {colors.slice(0, 4).map((c, i) => (
                    <span key={i} className="calendar__dot" style={{ background: c }} />
                  ))}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
