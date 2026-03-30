import { useMemo, useState } from 'react'
import { getHabits } from '../utils/habitStorage'
import {
  checkin,
  getAllCheckinDates,
  getCheckinsByDate,
  removeCheckinByTimestamp,
  getAllCheckins,
  timestampToDateStr,
} from '../utils/checkinStorage'
import { fireConfetti } from '../utils/confetti'
import Calendar from '../components/Calendar'

const fmtTime = (ts) => {
  const d = new Date(ts)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export default function HabitCalendar() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth() + 1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [habits] = useState(() => getHabits())
  const [selectedHabitId, setSelectedHabitId] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [version, setVersion] = useState(0) // force re-compute

  const refreshData = () => setVersion((v) => v + 1)

  const handlePrev = () => {
    if (month === 1) { setYear((y) => y - 1); setMonth(12) }
    else setMonth((m) => m - 1)
  }
  const handleNext = () => {
    if (month === 12) { setYear((y) => y + 1); setMonth(1) }
    else setMonth((m) => m + 1)
  }

  // 多色渐变标记
  const markedDates = useMemo(() => {
    void version
    return getAllCheckinDates(habits)
  }, [habits, version])

  const handleSelectDate = (dateStr) => {
    setSelectedDate(dateStr)
    setFeedback(null)
  }

  // 选中日期的所有打卡记录
  const dayRecords = useMemo(() => {
    if (!selectedDate) return []
    void version
    const items = []
    for (const h of habits) {
      const stamps = getCheckinsByDate(h.id, selectedDate)
      for (const ts of stamps) {
        items.push({ habitId: h.id, habitName: h.name, color: h.color, ts })
      }
    }
    items.sort((a, b) => b.ts - a.ts)
    return items
  }, [selectedDate, habits, version])

  const handleCheckin = () => {
    if (!selectedDate || !selectedHabitId) return
    const ts = new Date(`${selectedDate}T12:00:00`).getTime()
    checkin(selectedHabitId, ts)
    refreshData()
    fireConfetti()
    setFeedback(` ${selectedDate} 补卡成功！`)
  }

  const handleDeleteRecord = (habitId, ts) => {
    if (!confirm('确认删除这条打卡记录？')) return
    removeCheckinByTimestamp(habitId, ts)
    refreshData()
  }

  return (
    <div className="page habit-calendar">
      <header className="page__header">
        <div>
          <h1>时光补<span className="page__title-deco">📅</span></h1>
          <p className="page__subtitle">选择日期  选择习惯  补卡 / 删卡</p>
        </div>
      </header>

      <Calendar
        year={year}
        month={month}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectDate={handleSelectDate}
        markedDates={markedDates}
        selectedDate={selectedDate}
        disableFuture
      />

      {/* 习惯选择器（日历下方） */}
      <div className="habit-selector">
        <span className="habit-selector__label">选择习惯：</span>
        <div className="habit-selector__buttons">
          {habits.map((h) => (
            <button
              key={h.id}
              type="button"
              className={`habit-selector__btn ${selectedHabitId === h.id ? 'is-active' : ''}`}
              style={{ '--sel-color': h.color }}
              onClick={() => setSelectedHabitId(h.id)}
            >
              {h.name}
            </button>
          ))}
        </div>
      </div>

      {/* 补卡确认 */}
      {selectedDate && selectedHabitId && (
        <div className="checkin-confirm">
          <p>
            为 <strong>{habits.find((h) => h.id === selectedHabitId)?.name}</strong>{' '}
            在 <strong>{selectedDate}</strong> 补卡？
          </p>
          <button type="button" className="btn btn--primary" onClick={handleCheckin}>
            确认补卡
          </button>
        </div>
      )}

      {feedback && <div className="feedback feedback--success">{feedback}</div>}

      {/* 选中日期的打卡记录列表 */}
      {selectedDate && dayRecords.length > 0 && (
        <div className="day-records">
          <h3>{selectedDate} 的打卡记录</h3>
          <ul className="day-records__list">
            {dayRecords.map((r) => (
              <li key={`${r.habitId}-${r.ts}`} className="day-records__item">
                <span className="day-records__dot" style={{ background: r.color }} />
                <span className="day-records__name">{r.habitName}</span>
                <span className="day-records__time">{fmtTime(r.ts)}</span>
                <button
                  type="button"
                  className="day-records__delete"
                  aria-label="删除"
                  onClick={() => handleDeleteRecord(r.habitId, r.ts)}
                >
                  {'×'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedDate && dayRecords.length === 0 && (
        <div className="day-records day-records--empty">
          <span className="empty-state__emoji">📅✨</span>
          <p>{selectedDate} 暂无打卡记录</p>
        </div>
      )}
    </div>
  )
}
