import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from './components/Layout'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Index,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]
