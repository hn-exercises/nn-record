import { useNavigate } from 'react-router-dom'
import {
  getCheckinCount,
  getTodayCount,
} from '../utils/checkinStorage'

export default function HabitOverviewList({ habits }) {
  const navigate = useNavigate()

  if (habits.length === 0) {
    return (
      <div className="overview-empty">
        <span className="empty-state__emoji">🏆🌈</span>
        <p>暂无习惯，去今日记添加一个吧 ✨</p>
      </div>
    )
  }

  return (
    <div className="overview-list">
      {habits.map((habit) => {
        const count = getCheckinCount(habit.id)
        const todayN = getTodayCount(habit.id)

        return (
          <div
            key={habit.id}
            className="overview-card"
            style={{ '--card-color': habit.color }}
            onClick={() => navigate(`/harvest/${habit.id}`)}
          >
            <div className="overview-card__main">
              <div className="overview-card__info">
                <h3 className="overview-card__name">{habit.name}</h3>
                {habit.motto && (
                  <p className="overview-card__motto">"{habit.motto}"</p>
                )}
              </div>
              <div className="overview-card__stats">
                <span className="overview-card__count">
                  累计 <strong>{count}</strong> 次
                </span>
                <span className="overview-card__today">
                  {todayN > 0 ? '✅' : '⬜'}
                </span>
                <span className="overview-card__chevron">›</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
