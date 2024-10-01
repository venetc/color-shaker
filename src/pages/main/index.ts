export { TEST } from './model'

export const MainPageLoader = () => import('./ui').then(({ MainPage }) => ({ default: MainPage }))
