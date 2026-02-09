import { useEffect, useMemo, useState } from 'react'
import './App.css'

const STORAGE_KEY = 'todo-list/items'
const STORAGE_VERSION = 1

const createId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const loadTodos = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const data = JSON.parse(raw)
    if (Array.isArray(data)) {
      return data
    }
    if (data?.version === STORAGE_VERSION && Array.isArray(data.items)) {
      return data.items
    }
  } catch {
    return []
  }
  return []
}

const saveTodos = (items) => {
  const payload = {
    version: STORAGE_VERSION,
    items,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

function App() {
  const [todos, setTodos] = useState(() => loadTodos())
  const [input, setInput] = useState('')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const remainingCount = useMemo(
    () => todos.filter((item) => !item.completed).length,
    [todos],
  )

  const handleAdd = (event) => {
    event.preventDefault()
    const title = input.trim()
    if (!title) {
      return
    }
    const newItem = {
      id: createId(),
      title,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos((prev) => [newItem, ...prev])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    )
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Garfish 子应用 · PWA</p>
          <h1>Todo List</h1>
          <p className="app__subtitle">所有数据保存在本地 Local Storage</p>
        </div>
        <div className="app__meta">
          <div>
            <span>待完成</span>
            <strong>{remainingCount}</strong>
          </div>
          <div>
            <span>总计</span>
            <strong>{todos.length}</strong>
          </div>
        </div>
      </header>

      <form className="todo-input" onSubmit={handleAdd}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="添加一个 todo"
          aria-label="todo 输入"
        />
        <button type="submit">添加</button>
      </form>

      <section className="todo-list">
        {todos.length === 0 ? (
          <div className="todo-empty">还没有 todo，开始添加吧。</div>
        ) : (
          todos.map((item) => (
            <div key={item.id} className={`todo-item ${item.completed ? 'is-done' : ''}`}>
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                />
                <span>{item.title}</span>
              </label>
              <button type="button" onClick={() => removeTodo(item.id)}>
                删除
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  )
}

export default App
