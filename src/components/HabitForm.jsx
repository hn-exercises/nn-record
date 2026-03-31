import { useState } from 'react'

const PRESET_COLORS = [
  '#FF6B6B', '#FFA94D', '#FFD43B', '#69DB7C',
  '#63E6BE', '#74C0FC', '#B197FC', '#F06595',
]

export default function HabitForm({ onSubmit, onCancel, habit }) {
  const isEdit = !!habit
  const [name, setName] = useState(habit?.name || '')
  const [motto, setMotto] = useState(habit?.motto || '')
  const [startDate, setStartDate] = useState(() => {
    if (habit?.startDate) return habit.startDate
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })
  const [color, setColor] = useState(habit?.color || PRESET_COLORS[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onSubmit({ name: name.trim(), motto: motto.trim(), startDate, color })
    if (!isEdit) {
      setName('')
      setMotto('')
      setColor(PRESET_COLORS[0])
    }
  }

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      {/* Top bar */}
      <div className="habit-form__topbar">
        <button type="button" className="habit-form__back" onClick={onCancel}>
          ← 返回
        </button>
        <h3>{isEdit ? '编辑习惯' : '新增习惯'}</h3>
        <button type="submit" className="habit-form__done">
          完成
        </button>
      </div>

      {/* Live preview card */}
      <div className="habit-form__preview" style={{ background: color }}>
        <span className="habit-form__preview-name">
          {name || '我的新习惯'}
        </span>
        {motto && (
          <span className="habit-form__preview-motto">"{motto}"</span>
        )}
      </div>

      {/* Edit fields */}
      <div className="habit-form__fields">
        <label className="habit-form__field">
          <span>习惯名称 *</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例如：阅读、跑步、冥想"
            required
          />
        </label>

        <label className="habit-form__field">
          <span>打气寄语</span>
          <input
            type="text"
            value={motto}
            onChange={(e) => setMotto(e.target.value)}
            placeholder="给自己加个油吧"
          />
        </label>

        <div className="habit-form__field">
          <span>喜欢的颜色</span>
          <div className="color-picker">
            {PRESET_COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className={`color-swatch ${color === c ? 'is-active' : ''}`}
                style={{ background: c }}
                onClick={() => setColor(c)}
                aria-label={c}
              />
            ))}
          </div>
        </div>

        <label className="habit-form__field">
          <span>开始时间</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            readOnly={isEdit}
            className={isEdit ? 'is-readonly' : ''}
          />
        </label>
      </div>
    </form>
  )
}
