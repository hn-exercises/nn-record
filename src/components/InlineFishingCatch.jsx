import { useState } from 'react'
import { fetchInsight } from '../utils/fishingInsight'

export default function InlineFishingCatch() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const insight = await fetchInsight()
    setData(insight)
    setLoading(false)
  }

  return (
    <div className="harvest-chart inline-fishing" onClick={handleClick}>
      <div className="inline-fishing__body">
        {!data && !loading && (
          <>
            <span className="inline-fishing__icon">🎣</span>
            <span className="inline-fishing__hint">点击获取渔获</span>
          </>
        )}
        {loading && (
          <span className="inline-fishing__hint">钓鱼中…</span>
        )}
        {data && !loading && (
          <>
            <span className="inline-fishing__emoji">{data.emoji}</span>
            <p className="inline-fishing__text">{data.text}</p>
            <span className="inline-fishing__refresh">点击刷新</span>
          </>
        )}
      </div>
    </div>
  )
}
