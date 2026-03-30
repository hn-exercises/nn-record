import { getAllCheckins, timestampToDateStr } from './checkinStorage'
import { getHabits } from './habitStorage'

const TEMPLATES = [
  ({ name, count }) => ({ text: `你在「${name}」上已经坚持了 ${count} 次！`, emoji: '💪' }),
  ({ name, lastDate }) => ({ text: `你最近一次「${name}」打卡是 ${lastDate}，继续加油！`, emoji: '🔥' }),
  ({ topName, topCount }) => ({ text: `你最勤劳的习惯是「${topName}」，累计 ${topCount} 次！`, emoji: '🏅' }),
  ({ totalCount }) => ({ text: `你总共打卡了 ${totalCount} 次，每一次都算数！`, emoji: '✨' }),
  ({ daysActive }) => ({ text: `你已经在 ${daysActive} 个不同的日子里打过卡！`, emoji: '📅' }),
  ({ habitCount }) => ({ text: `你正在追踪 ${habitCount} 个习惯，多线并进！`, emoji: '🎯' }),
  ({ streakName, streak }) => ({ text: `「${streakName}」连续打卡 ${streak} 天，太棒了！`, emoji: '🌟' }),
]

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

/**
 * fetchInsight(): Promise<{ text: string, emoji: string }>
 * 当前为同步本地数据包装的 Promise，未来可替换为网络请求。
 */
export const fetchInsight = async () => {
  const habits = getHabits()
  const allCheckins = getAllCheckins()

  if (habits.length === 0) {
    return { text: '还没有创建任何习惯，快去添加一个吧！', emoji: '🌱' }
  }

  // 统计数据
  const stats = habits.map((h) => {
    const stamps = allCheckins[h.id] || []
    const sorted = [...stamps].sort((a, b) => b - a)
    return {
      name: h.name,
      count: stamps.length,
      lastDate: sorted.length > 0 ? timestampToDateStr(sorted[0]) : '暂无',
      stamps: sorted,
    }
  })

  const totalCount = stats.reduce((s, h) => s + h.count, 0)
  if (totalCount === 0) {
    return { text: '快开始你的第一次打卡吧！', emoji: '🚀' }
  }

  // 所有去重日期
  const allDays = new Set()
  for (const s of stats) {
    for (const ts of s.stamps) allDays.add(timestampToDateStr(ts))
  }

  // 最勤劳习惯
  const top = stats.reduce((a, b) => (a.count >= b.count ? a : b))

  // 简易"连续天数"计算（最近连续有打卡的天数）
  const calcStreak = (stamps) => {
    if (!stamps.length) return 0
    const days = [...new Set(stamps.map(timestampToDateStr))].sort().reverse()
    let streak = 1
    for (let i = 1; i < days.length; i++) {
      const prev = new Date(days[i - 1])
      const curr = new Date(days[i])
      const diff = (prev - curr) / 86400000
      if (diff === 1) streak++
      else break
    }
    return streak
  }

  const streaks = stats.map((s) => ({ name: s.name, streak: calcStreak(s.stamps) }))
  const bestStreak = streaks.reduce((a, b) => (a.streak >= b.streak ? a : b))

  const randomHabit = pickRandom(stats)

  const pool = [
    () => TEMPLATES[0]({ name: randomHabit.name, count: randomHabit.count }),
    () => TEMPLATES[1]({ name: randomHabit.name, lastDate: randomHabit.lastDate }),
    () => TEMPLATES[2]({ topName: top.name, topCount: top.count }),
    () => TEMPLATES[3]({ totalCount }),
    () => TEMPLATES[4]({ daysActive: allDays.size }),
    () => TEMPLATES[5]({ habitCount: habits.length }),
    () => TEMPLATES[6]({ streakName: bestStreak.name, streak: bestStreak.streak }),
  ]

  return pickRandom(pool)()
}
