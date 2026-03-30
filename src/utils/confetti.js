import confetti from 'canvas-confetti'

const DOPAMINE_COLORS = [
  '#FF6B9D', // pink
  '#5ECFB1', // mint
  '#FFD93D', // lemon
  '#B39DDB', // lavender
  '#FF8A65', // coral
  '#64B5F6', // sky
  '#FFAB91', // peach
  '#CE93D8', // lilac
]

/**
 * 全屏撒花动效 — 多巴胺色系粒子，持续约 600ms
 */
export const fireConfetti = () => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: DOPAMINE_COLORS,
    ticks: 120,
    gravity: 1.2,
    scalar: 1.1,
  })
}
