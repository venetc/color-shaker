import { Button } from '@shared/ui/button'
import { ImagesUploader } from '@features/upload-images'

export function MainPage() {
  return (
    <div>
      <div>Main Page</div>
      <div>Hello?</div>

      <ImagesUploader />

      <Button
        as="a"
        href="/edit"
        variant="link"
      >
        Edit
      </Button>
    </div>
  )
}
