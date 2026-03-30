import { useState, useEffect, useCallback } from 'react'
import { fetchInsight } from '../utils/fishingInsight'

export default function FishingCatch() {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(null)
  const [leaving, setLeaving] = useState(false)

  const dismiss = useCallback(() => {
    setLeaving(true)
    setTimeout(() => {
      setVisible(false)
      setLeaving(false)
      setData(null)
    }, 300)
  }, [])

  const handleClick = async () => {
    if (visible) return
    const insight = await fetchInsight()
    setData(insight)
    setVisible(true)
  }

  // 3 秒自动收起
  useEffect(() => {
    if (!visible || leaving) return
    const timer = setTimeout(dismiss, 3000)
    return () => clearTimeout(timer)
  }, [visible, leaving, dismiss])

  return (
    <>
      <button type="button" className="fishing-btn" onClick={handleClick}>
        🎣 渔获
      </button>

      {visible && data && (
        <div className={`fishing-card ${leaving ? 'is-leaving' : ''}`}>
          <span className="fishing-card__emoji">{data.emoji}</span>
          <p className="fishing-card__text">{data.text}</p>
          <button
            type="button"
            className="fishing-card__close"
            onClick={dismiss}
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
