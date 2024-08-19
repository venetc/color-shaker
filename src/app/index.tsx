import { render } from 'solid-js/web'
import './providers/styles.css'

const ROOT_CONTAINER_ID = 'root'

mountApp()

function mountApp() {
  const container = document.getElementById(ROOT_CONTAINER_ID)
  if (!container) throw new Error(`Root app container not found - #${ROOT_CONTAINER_ID}`)

  render(() => <Root />, container)
}

function Root() {
  return (
    <div>Helo</div>
  )
}
