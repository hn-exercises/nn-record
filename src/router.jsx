import { createHashRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HabitHome from './pages/HabitHome'
import HabitCalendar from './pages/HabitCalendar'
import HabitDetail from './pages/HabitDetail'
import HarvestHome from './pages/HarvestHome'
import HarvestDetail from './pages/HarvestDetail'

const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HabitHome /> },
      { path: 'backfill', element: <HabitCalendar /> },
      { path: 'harvest', element: <HarvestHome /> },
      { path: 'harvest/:id', element: <HarvestDetail /> },
      { path: 'habit/:id', element: <HabitDetail /> },
    ],
  },
])

export default router
