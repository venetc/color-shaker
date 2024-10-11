import { lazy } from 'solid-js'
import { MainPageLoader } from '@pages/main'
import { EditPageLoader } from '@pages/edit'
import { type RouteDefinition, Router } from '@solidjs/router'
import { Transition } from 'solid-transition-group'

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

export function Routing() {
  return (
    <Transition
      name="fade"
      mode="outin"
    >
      <Router>
        {routes}
      </Router>
    </Transition>
  )
}
