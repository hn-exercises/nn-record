import { createHashRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HabitHome from './pages/HabitHome'
import HabitCalendar from './pages/HabitCalendar'
import HabitDetail from './pages/HabitDetail'
import HarvestHome from './pages/HarvestHome'

const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HabitHome /> },
      { path: 'backfill', element: <HabitCalendar /> },
      { path: 'harvest', element: <HarvestHome /> },
      { path: 'habit/:id', element: <HabitDetail /> },
    ],
  },
])

export default router
