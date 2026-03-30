const STORAGE_KEY = 'habit-tracking/habits'
const STORAGE_VERSION = 1

const createId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const loadHabits = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const data = JSON.parse(raw)
    if (data?.version === STORAGE_VERSION && Array.isArray(data.items)) {
      return data.items
    }
  } catch {
    /* ignore */
  }
  return []
}

const saveHabits = (items) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ version: STORAGE_VERSION, items }),
  )
}

export const getHabits = () => loadHabits()

export const addHabit = ({ name, motto, startDate, color }) => {
  const habits = loadHabits()
  const newHabit = {
    id: createId(),
    name,
    motto: motto || '',
    startDate,
    color: color || '#4CAF50',
    createdAt: Date.now(),
  }
  habits.push(newHabit)
  saveHabits(habits)
  return newHabit
}

export const removeHabit = (id) => {
  const habits = loadHabits().filter((h) => h.id !== id)
  saveHabits(habits)
  return habits
}

export const updateHabit = (id, updates) => {
  const habits = loadHabits()
  const idx = habits.findIndex((h) => h.id === id)
  if (idx === -1) return null
  habits[idx] = { ...habits[idx], ...updates }
  saveHabits(habits)
  return habits[idx]
}

export const getHabitById = (id) => {
  return loadHabits().find((h) => h.id === id) || null
}
