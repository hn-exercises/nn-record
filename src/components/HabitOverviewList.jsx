import { useState, useCallback } from 'react'
import {
  getCheckinCount,
  getTodayCount,
  getCheckinsWithNotes,
  removeCheckins,
} from '../utils/checkinStorage'
import { updateHabit, removeHabit } from '../utils/habitStorage'
import HabitForm from './HabitForm'
import Timeline from './Timeline'

export default function HabitOverviewList({ habits, onRefresh }) {
  const [expandedId, setExpandedId] = useState(null)
  const [editHabit, setEditHabit] = useState(null)
  const [confirmDeleteId, setConfirmDeleteId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleEdit = useCallback(
    (data) => {
      if (!editHabit) return
      updateHabit(editHabit.id, data)
      setEditHabit(null)
      onRefresh?.()
    },
    [editHabit, onRefresh],
  )

  const handleDelete = useCallback(
    (id) => {
      removeHabit(id)
      removeCheckins(id)
      setConfirmDeleteId(null)
      setExpandedId(null)
      onRefresh?.()
    },
    [onRefresh],
  )

  if (habits.length === 0) {
    return (
      <div className="overview-empty">
        <p>暂无习惯，去今日记添加一个吧 ✨</p>
      </div>
    )
  }

  return (
    <div className="overview-list">
      {habits.map((habit) => {
        const count = getCheckinCount(habit.id)
        const todayN = getTodayCount(habit.id)
        const isExpanded = expandedId === habit.id

        return (
          <div key={habit.id} className="overview-card-wrapper">
            <div
              className={`overview-card ${isExpanded ? 'is-expanded' : ''}`}
              style={{ '--card-color': habit.color }}
              onClick={() => toggleExpand(habit.id)}
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
                </div>
              </div>
            </div>

            {isExpanded && (
              <div className="overview-detail">
                <div className="overview-detail__actions">
                  <button
                    className="btn btn--ghost btn--sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditHabit(habit)
                    }}
                  >
                    ✏️ 编辑
                  </button>
                  <button
                    className="btn btn--ghost btn--sm btn--danger"
                    onClick={(e) => {
                      e.stopPropagation()
                      setConfirmDeleteId(habit.id)
                    }}
                  >
                    🗑️ 删除
                  </button>
                </div>
                <div className="overview-detail__timeline">
                  <Timeline
                    dates={getCheckinsWithNotes(habit.id)}
                    color={habit.color}
                  />
                </div>
              </div>
            )}
          </div>
        )
      })}

      {/* 编辑弹窗 */}
      {editHabit && (
        <div className="habit-form-overlay" onClick={() => setEditHabit(null)}>
          <div
            className="habit-form-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <HabitForm
              habit={editHabit}
              onSubmit={handleEdit}
              onCancel={() => setEditHabit(null)}
            />
          </div>
        </div>
      )}

      {/* 删除确认 */}
      {confirmDeleteId && (
        <div
          className="habit-form-overlay"
          onClick={() => setConfirmDeleteId(null)}
        >
          <div
            className="confirm-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>确认删除</h3>
            <p>
              删除「
              {habits.find((h) => h.id === confirmDeleteId)?.name}
              」及其所有打卡记录？此操作不可恢复。
            </p>
            <div className="confirm-dialog__actions">
              <button
                className="btn btn--danger"
                onClick={() => handleDelete(confirmDeleteId)}
              >
                确认删除
              </button>
              <button
                className="btn btn--ghost"
                onClick={() => setConfirmDeleteId(null)}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
