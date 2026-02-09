import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.jsx'

let root = null
let rootElement = null

const renderApp = (container) => {
  const target = container?.querySelector?.('#root') || container || document.getElementById('root')
  if (!target) {
    return
  }
  rootElement = target
  root?.unmount?.()
  root = createRoot(target)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export const mount = (props = {}) => {
  renderApp(props.container)
}

export const unmount = () => {
  root?.unmount?.()
  root = null
  if (rootElement) {
    rootElement.innerHTML = ''
    rootElement = null
  }
}

if (!window.__GARFISH__) {
  renderApp()
}

if (import.meta.env.PROD) {
  registerSW({ immediate: true })
}
