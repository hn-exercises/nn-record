import { useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHabitById, updateHabit, removeHabit } from '../utils/habitStorage'
import {
  getCheckinCount,
  getTodayCount,
  getCheckinsWithNotes,
  removeCheckins,
} from '../utils/checkinStorage'
import HabitForm from '../components/HabitForm'
import Timeline from '../components/Timeline'

export default function HarvestDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [habit, setHabit] = useState(() => getHabitById(id))
  const [showEdit, setShowEdit] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const refresh = useCallback(() => setHabit(getHabitById(id)), [id])

  /* --- 习惯不存在 --- */
  if (!habit) {
    return (
      <div className="page harvest-detail">
        <div className="harvest-detail__empty">
          <span className="empty-state__emoji">😶‍🌫️</span>
          <p>习惯不存在或已被删除</p>
          <button className="btn btn--ghost" onClick={() => navigate('/harvest')}>
            ← 返回收获集
          </button>
        </div>
      </div>
    )
  }

  const count = getCheckinCount(habit.id)
  const todayN = getTodayCount(habit.id)
  const checkinEntries = getCheckinsWithNotes(habit.id)

  const handleEdit = (data) => {
    updateHabit(habit.id, data)
    refresh()
    setShowEdit(false)
  }

  const handleDelete = () => {
    removeHabit(habit.id)
    removeCheckins(habit.id)
    navigate('/harvest')
  }

  return (
    <div className="page harvest-detail">
      {/* 顶部导航 */}
      <header className="harvest-detail__header">
        <button className="btn btn--ghost btn--sm" onClick={() => navigate('/harvest')}>
          ← 返回收获集
        </button>
        <div className="harvest-detail__actions">
          <button className="btn btn--ghost btn--sm" onClick={() => setShowEdit(true)}>
            ✏️ 编辑
          </button>
          <button
            className="btn btn--ghost btn--sm btn--danger"
            onClick={() => setShowConfirmDelete(true)}
          >
            🗑️ 删除
          </button>
        </div>
      </header>

      {/* 习惯摘要卡片 */}
      <div className="harvest-detail__card" style={{ '--card-color': habit.color }}>
        <h2 className="harvest-detail__name">{habit.name}</h2>
        {habit.motto && <p className="harvest-detail__motto">"{habit.motto}"</p>}
        <div className="harvest-detail__stats">
          <div className="harvest-detail__stat">
            <span className="harvest-detail__stat-value">{count}</span>
            <span className="harvest-detail__stat-label">累计打卡</span>
          </div>
          <div className="harvest-detail__stat">
            <span className="harvest-detail__stat-value">{habit.startDate}</span>
            <span className="harvest-detail__stat-label">开始日期</span>
          </div>
        </div>
      </div>

      {/* 打卡时间线（懒加载） */}
      <div className="harvest-detail__timeline-section">
        <h3>打卡记录</h3>
        <Timeline dates={checkinEntries} color={habit.color} lazy pageSize={20} />
      </div>

      {/* 编辑弹窗 */}
      {showEdit && (
        <div className="habit-form-overlay" onClick={() => setShowEdit(false)}>
          <div className="habit-form-modal" onClick={(e) => e.stopPropagation()}>
            <HabitForm
              habit={habit}
              onSubmit={handleEdit}
              onCancel={() => setShowEdit(false)}
            />
          </div>
        </div>
      )}

      {/* 删除确认 */}
      {showConfirmDelete && (
        <div className="habit-form-overlay" onClick={() => setShowConfirmDelete(false)}>
          <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>确认删除</h3>
            <p>
              删除「{habit.name}」及其所有打卡记录？此操作不可恢复。
            </p>
            <div className="confirm-dialog__actions">
              <button className="btn btn--danger" onClick={handleDelete}>
                确认删除
              </button>
              <button className="btn btn--ghost" onClick={() => setShowConfirmDelete(false)}>
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
