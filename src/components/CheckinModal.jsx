import { useState } from 'react'
import { getTodayCount } from '../utils/checkinStorage'

export default function CheckinModal({ habit, onCheckin, onClose }) {
  const [note, setNote] = useState('')
  const todayN = getTodayCount(habit.id)

  const handleCheckin = () => {
    onCheckin(note.trim())
  }

  return (
    <div className="checkin-modal-overlay" onClick={onClose}>
      <div
        className="checkin-modal"
        style={{ '--modal-color': habit.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="checkin-modal__color-bar" />
        <div className="checkin-modal__body">
          <h2 className="checkin-modal__name">{habit.name}</h2>
          {habit.motto && (
            <p className="checkin-modal__motto">"{habit.motto}"</p>
          )}
          <div className="checkin-modal__status">
            {todayN > 0
              ? `今日已打卡 ${todayN} 次 ✅`
              : '今日尚未打卡 ⬜'}
          </div>
          <textarea
            className="checkin-modal__note"
            placeholder="记录此刻的想法…"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
          />
          <button
            type="button"
            className="btn btn--primary checkin-modal__btn"
            onClick={handleCheckin}
          >
            打卡
          </button>
        </div>
      </div>
    </div>
  )
}
