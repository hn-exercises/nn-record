import confetti from 'canvas-confetti'

const NATURE_COLORS = [
  '#FF6B6B', // coral
  '#FFA94D', // orange
  '#FFD43B', // yellow
  '#69DB7C', // green
  '#63E6BE', // teal
  '#74C0FC', // blue
  '#B197FC', // lavender
  '#F06595', // pink
]

/**
 * 全屏撒花动效 — 暖色治愈系粒子，持续约 600ms
 */
export const fireConfetti = () => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: NATURE_COLORS,
    ticks: 120,
    gravity: 1.2,
    scalar: 1.1,
  })
}
