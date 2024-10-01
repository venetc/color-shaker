export { TEST } from './model'

export const EditPageLoader = () => import('./ui').then(({ EditPage }) => ({ default: EditPage }))
