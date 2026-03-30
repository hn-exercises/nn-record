import { useCallback, useState } from 'react'
import { getHabits, addHabit } from '../utils/habitStorage'
import { checkin } from '../utils/checkinStorage'
import { fireConfetti } from '../utils/confetti'
import HabitForm from '../components/HabitForm'
import CheckinModal from '../components/CheckinModal'

export default function HabitHome() {
  const [habits, setHabits] = useState(() => getHabits())
  const [showForm, setShowForm] = useState(false)
  const [selectedHabit, setSelectedHabit] = useState(null)

  const refresh = useCallback(() => setHabits(getHabits()), [])

  const handleAdd = (data) => {
    addHabit(data)
    refresh()
    setShowForm(false)
  }

  const handleCheckin = (note) => {
    if (!selectedHabit) return
    checkin(selectedHabit.id, undefined, note)
    refresh()
    fireConfetti()
    setSelectedHabit(null)
  }

  return (
    <div className="page habit-home">
      <header className="page__header">
        <div>
          <h1>今日记</h1>
          <p className="page__subtitle">坚持就是胜利，不比较，只累计 ✨</p>
        </div>
      </header>

      <div className="habit-grid">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="habit-tile"
            style={{ '--tile-color': habit.color }}
            onClick={() => setSelectedHabit(habit)}
          >
            <h3 className="habit-tile__name">{habit.name}</h3>
            {habit.motto && (
              <p className="habit-tile__motto">"{habit.motto}"</p>
            )}
            <span className="habit-tile__hint">前去打卡</span>
          </div>
        ))}

        {/* "+" 新增卡片 */}
        <div
          className="habit-tile habit-tile--add"
          onClick={() => setShowForm(true)}
        >
          <span className="habit-tile__plus">＋</span>
          <span className="habit-tile__plus-label">新增习惯</span>
        </div>
      </div>

      {showForm && (
        <div className="habit-form-overlay" onClick={() => setShowForm(false)}>
          <div className="habit-form-modal" onClick={(e) => e.stopPropagation()}>
            <HabitForm onSubmit={handleAdd} onCancel={() => setShowForm(false)} />
          </div>
        </div>
      )}

      {selectedHabit && (
        <CheckinModal
          habit={selectedHabit}
          onCheckin={handleCheckin}
          onClose={() => setSelectedHabit(null)}
        />
      )}
    </div>
  )
}
