import { Button } from '@shared/ui/button'
import { Dropzone } from '@shared/ui/dropzone'
import { createSignal } from 'solid-js'
import ImageUp from 'lucide-solid/icons/image-up'

export function MainPage() {
  const [disabled, setDisabled] = createSignal(false)
  return (
    <div>
      <div>Main Page</div>
      <Dropzone
        accept="image/*"
        onDrop={console.log}
        onChange={console.log}
        disabled={disabled() ?? false}
        multiple
      >
        <div class="py-8 flex flex-col justify-center items-center leading-tight font-medium text-sm">
          <ImageUp
            size={36}
            strokeWidth={1.25}
            class="mb-4 opacity-40"
          />
          <p>Drag & Drop images</p>
          <p>or</p>
          <p class="text-blue-500">browse files</p>
        </div>
      </Dropzone>
      <Button onClick={() => setDisabled(!disabled())}>
        Toggle
      </Button>
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
