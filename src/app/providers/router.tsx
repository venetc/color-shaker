import { lazy } from 'solid-js'
import { MainPageLoader } from '@pages/main'
import { EditPageLoader } from '@pages/edit'
import { type RouteDefinition, Router } from '@solidjs/router'

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(MainPageLoader),
  },
  {
    path: '/edit',
    component: lazy(EditPageLoader),
  },
]

export const Routing = () => <Router>{routes}</Router>
