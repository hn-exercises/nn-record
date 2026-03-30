import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: '今日记', icon: '🎯' },
  { to: '/backfill', label: '时光补', icon: '📅' },
  { to: '/harvest', label: '收获集', icon: '🏆' },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.to === '/'}
          className={({ isActive }) =>
            `bottom-nav__item ${isActive ? 'is-active' : ''}`
          }
        >
          <span className="bottom-nav__icon">{tab.icon}</span>
          <span className="bottom-nav__label">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
