import { RouteConfig } from 'react-router-config'
import Root from '@pages'
import GalleryPage from '@pages/Gallery'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: GalleryPage,
      },
    ],
  },
]

export default routes
