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
          <h1>今日记<span className="page__title-deco">🎯</span></h1>
          <p className="page__subtitle">坚持就是胜利，不比较，只累计 ✨</p>
        </div>
      </header>

      <div className="habit-grid">
        {habits.length === 0 && (
          <div className="empty-state">
            <span className="empty-state__emoji">🌱✨</span>
            <span className="empty-state__text">还没有习惯，点击下方「＋」开始你的第一个习惯吧</span>
          </div>
        )}
        {habits.map((habit, index) => (
          <div
            key={habit.id}
            className="habit-tile"
            style={{
              '--tile-color': habit.color,
              animation: `fade-up 0.3s var(--ease-smooth) ${index * 50}ms both`,
            }}
            onClick={() => setSelectedHabit(habit)}
          >
            {habit.emoji && (
              <span className="habit-tile__emoji">{habit.emoji}</span>
            )}
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
        <div className="habit-form-overlay">
          <div className="habit-form-modal">
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
