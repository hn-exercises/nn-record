import { useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHabitById, updateHabit, removeHabit } from '../utils/habitStorage'
import {
  checkin,
  getCheckins,
  getCheckinCount,
  getTodayCount,
  removeCheckins,
} from '../utils/checkinStorage'
import { fireConfetti } from '../utils/confetti'
import HabitForm from '../components/HabitForm'
import Timeline from '../components/Timeline'

export default function HabitDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [habit, setHabit] = useState(() => getHabitById(id))
  const [showEdit, setShowEdit] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const refresh = useCallback(() => setHabit(getHabitById(id)), [id])

  if (!habit) {
    return (
      <div className="page habit-detail">
        <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
          习惯不存在或已被删除
        </p>
        <button className="btn btn--ghost" onClick={() => navigate('/')}>← 返回首页</button>
      </div>
    )
  }

  const todayN = getTodayCount(habit.id)
  const count = getCheckinCount(habit.id)
  const checkins = getCheckins(habit.id)

  const handleCheckin = () => {
    checkin(habit.id)
    refresh()
    fireConfetti()
  }

  const handleEdit = (data) => {
    updateHabit(habit.id, data)
    refresh()
    setShowEdit(false)
  }

  const handleDelete = () => {
    removeHabit(habit.id)
    removeCheckins(habit.id)
    navigate('/')
  }

  return (
    <div className="page habit-detail">
      <header className="habit-detail__header">
        <button className="btn btn--ghost btn--sm" onClick={() => navigate('/')}>
          ← 返回
        </button>
        <div className="habit-detail__actions">
          <button className="btn btn--ghost btn--sm" onClick={() => setShowEdit(true)}>
            ✏️ 编辑
          </button>
          <button className="btn btn--ghost btn--sm btn--danger" onClick={() => setShowConfirmDelete(true)}>
            🗑️ 删除
          </button>
        </div>
      </header>

      <div className="habit-detail__card" style={{ '--tile-color': habit.color }}>
        <h2 className="habit-detail__name">{habit.name}</h2>
        {habit.motto && <p className="habit-detail__motto">"{habit.motto}"</p>}
        <div className="habit-detail__meta">
          <span>🗓 开始于 {habit.startDate}</span>
          <span>🔥 累计 <strong>{count}</strong> 次</span>
        </div>
        {todayN > 0 && (
          <div className="habit-detail__today">今日已打 {todayN} 次</div>
        )}
        <button
          type="button"
          className="btn habit-detail__checkin-btn btn--primary"
          onClick={handleCheckin}
        >
          打卡
        </button>
      </div>

      <div className="habit-detail__timeline-section">
        <h3>打卡记录</h3>
        <Timeline dates={checkins} color={habit.color} />
      </div>

      {/* 编辑弹窗 */}
      {showEdit && (
        <div className="habit-form-overlay" onClick={() => setShowEdit(false)}>
          <div className="habit-form-modal" onClick={(e) => e.stopPropagation()}>
            <HabitForm habit={habit} onSubmit={handleEdit} onCancel={() => setShowEdit(false)} />
          </div>
        </div>
      )}

      {/* 删除确认对话框 */}
      {showConfirmDelete && (
        <div className="habit-form-overlay" onClick={() => setShowConfirmDelete(false)}>
          <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>确认删除</h3>
            <p>删除「{habit.name}」及其所有打卡记录？此操作不可恢复。</p>
            <div className="confirm-dialog__actions">
              <button className="btn btn--danger" onClick={handleDelete}>确认删除</button>
              <button className="btn btn--ghost" onClick={() => setShowConfirmDelete(false)}>取消</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
