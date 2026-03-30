const STORAGE_KEY = 'habit-tracking/checkins'
const STORAGE_VERSION = 3

/* ---------- helpers ---------- */

const dateStrFromTs = (ts) => {
  const d = new Date(ts)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

/**
 * Migrate v1 (date-string arrays) -> v3 (object arrays { ts, note }).
 */
const migrateV1toV3 = (records) => {
  const migrated = {}
  for (const [habitId, dates] of Object.entries(records)) {
    migrated[habitId] = dates.map((d) => ({
      ts: new Date(`${d}T12:00:00`).getTime(),
      note: '',
    }))
  }
  return migrated
}

/**
 * Migrate v2 (timestamp arrays number[]) -> v3 (object arrays { ts, note }[]).
 */
const migrateV2toV3 = (records) => {
  const migrated = {}
  for (const [habitId, timestamps] of Object.entries(records)) {
    migrated[habitId] = timestamps.map((ts) => ({ ts, note: '' }))
  }
  return migrated
}

/* ---------- persistence ---------- */

const loadCheckins = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const data = JSON.parse(raw)
    // v3 — object arrays { ts, note }[]
    if (data?.version === 3 && data.records) {
      return data.records
    }
    // v2 — timestamp arrays -> auto-migrate
    if (data?.version === 2 && data.records) {
      console.log('[checkinStorage] migrating v2 -> v3')
      const migrated = migrateV2toV3(data.records)
      saveCheckins(migrated)
      return migrated
    }
    // v1 — date-string arrays -> auto-migrate
    if (data?.version === 1 && data.records) {
      console.log('[checkinStorage] migrating v1 -> v3')
      const migrated = migrateV1toV3(data.records)
      saveCheckins(migrated)
      return migrated
    }
  } catch {
    /* ignore */
  }
  return {}
}

const saveCheckins = (records) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ version: STORAGE_VERSION, records }),
  )
}

/* ---------- public API ---------- */

/** 获取今天的日期字符串 YYYY-MM-DD */
export const getTodayStr = () => dateStrFromTs(Date.now())

/** 获取某习惯的全部打卡时间戳数组（兼容接口，返回 number[]） */
export const getCheckins = (habitId) => {
  const records = loadCheckins()
  const entries = records[habitId] || []
  return entries.map((e) => e.ts)
}

/** 获取某习惯的全部打卡记录含文案 { ts, note }[] */
export const getCheckinsWithNotes = (habitId) => {
  const records = loadCheckins()
  return records[habitId] || []
}

/** 获取所有习惯的全部打卡记录（返回 { [habitId]: number[] }，兼容接口） */
export const getAllCheckins = () => {
  const records = loadCheckins()
  const result = {}
  for (const [habitId, entries] of Object.entries(records)) {
    result[habitId] = entries.map((e) => e.ts)
  }
  return result
}

/**
 * 打卡 — 追加一条记录（不去重）。
 * @param {string} habitId
 * @param {number} [timestamp=Date.now()]  可选，补卡时传入指定时间戳
 * @param {string} [note='']  可选，打卡文案
 */
export const checkin = (habitId, timestamp, note) => {
  const ts = typeof timestamp === 'number' ? timestamp : Date.now()
  const records = loadCheckins()
  if (!records[habitId]) records[habitId] = []
  records[habitId].push({ ts, note: note || '' })
  saveCheckins(records)
  return records[habitId].map((e) => e.ts)
}

/** 获取某习惯今日打卡次数 */
export const getTodayCount = (habitId) => {
  const today = getTodayStr()
  return getCheckins(habitId).filter((ts) => dateStrFromTs(ts) === today).length
}

/** 获取某习惯的累计打卡次数 */
export const getCheckinCount = (habitId) => getCheckins(habitId).length

/** 删除指定的一条时间戳记录 */
export const removeCheckinByTimestamp = (habitId, timestamp) => {
  const records = loadCheckins()
  const arr = records[habitId]
  if (!arr) return
  const idx = arr.findIndex((e) => e.ts === timestamp)
  if (idx !== -1) {
    arr.splice(idx, 1)
    saveCheckins(records)
  }
}

/** 获取某习惯在指定日期的所有时间戳（兼容接口，返回 number[]） */
export const getCheckinsByDate = (habitId, dateStr) => {
  return getCheckins(habitId).filter((ts) => dateStrFromTs(ts) === dateStr)
}

/** 获取某习惯在指定日期的所有记录含文案 { ts, note }[] */
export const getCheckinsByDateWithNotes = (habitId, dateStr) => {
  const entries = getCheckinsWithNotes(habitId)
  return entries.filter((e) => dateStrFromTs(e.ts) === dateStr)
}

/**
 * 获取所有日期的颜色数组（用于日历多色渐变标记）。
 * 返回 { [dateStr]: colorString[] }
 * @param {Array} habits  getHabits() 返回的习惯列表
 */
export const getAllCheckinDates = (habits) => {
  const records = loadCheckins()
  const dateColors = {}
  for (const habit of habits) {
    const entries = records[habit.id] || []
    // 按天去重（同一习惯同天只算一次颜色）
    const seenDays = new Set()
    for (const e of entries) {
      const d = dateStrFromTs(e.ts)
      if (seenDays.has(d)) continue
      seenDays.add(d)
      if (!dateColors[d]) dateColors[d] = []
      if (!dateColors[d].includes(habit.color)) {
        dateColors[d].push(habit.color)
      }
    }
  }
  return dateColors
}

/** 移除某习惯的所有打卡记录（删除习惯时调用） */
export const removeCheckins = (habitId) => {
  const records = loadCheckins()
  delete records[habitId]
  saveCheckins(records)
}

/** 时间戳 → 日期字符串（供外部使用） */
export const timestampToDateStr = dateStrFromTs
