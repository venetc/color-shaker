import { Dropzone } from '@shared/ui/dropzone'
import { uploadImagesModel } from '@features/upload-images'
import ImageUp from 'lucide-solid/icons/image-up'
import { useUnit } from 'effector-solid';

export function ImagesUploader() {
  const { filesUploaded } = useUnit(uploadImagesModel)

  return (
    <Dropzone
      accept="image/*"
      onFilesDrop={filesUploaded}
      onChangeList={filesUploaded}
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
  )
}
