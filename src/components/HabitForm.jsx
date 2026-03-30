import { useState } from 'react'

const PRESET_COLORS = [
  '#FF6B9D', '#5ECFB1', '#FFD93D', '#B39DDB',
  '#FF8A65', '#64B5F6', '#FFAB91', '#CE93D8',
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
      <h3>{isEdit ? '编辑习惯' : '新增习惯'}</h3>

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

      <div className="habit-form__actions">
        <button type="submit" className="btn btn--primary">
          {isEdit ? '保存修改' : '添加习惯'}
        </button>
        {onCancel && (
          <button type="button" className="btn btn--ghost" onClick={onCancel}>取消</button>
        )}
      </div>
    </form>
  )
}
