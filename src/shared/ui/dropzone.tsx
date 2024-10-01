import { cn } from '../lib/cn';
import { splitProps } from 'solid-js';
import type { ComponentProps, JSX } from 'solid-js';

type DropzoneCallback = (files: FileList | null) => void;

type DropzoneProps = Partial<Pick<HTMLInputElement, 'accept' | 'multiple'>> & DropzoneCallbacks & {
  disabled?: boolean
}

interface DropzoneCallbacks {
  onDrop?: DropzoneCallback
  onDragStart?: DropzoneCallback
  onDragEnter?: DropzoneCallback
  onDragEnd?: DropzoneCallback
  onDragLeave?: DropzoneCallback
  onDragOver?: DropzoneCallback
  onDrag?: DropzoneCallback
  onChange?: DropzoneCallback
}

export function Dropzone(props: ComponentProps<'label'> & DropzoneProps) {
  const [local, rest] = splitProps(props, [
    'disabled',
    'accept',
    'multiple',
    'onDrag',
    'onDragOver',
    'onDragLeave',
    'onDragEnd',
    'onDragEnter',
    'onDragStart',
    'onDrop',
    'onChange',
  ])

  const onDragStart: JSX.EventHandler<HTMLLabelElement, DragEvent> = (event) => {
    if (local.disabled) return
    handleEvents(local.onDragStart, event);
  };
  const onDragEnd: JSX.EventHandler<HTMLLabelElement, DragEvent> = (event) => {
    if (local.disabled) return
    handleEvents(local.onDragEnd, event);
  };
  const onDragEnter: JSX.EventHandler<HTMLLabelElement, DragEvent> = (event) => {
    if (local.disabled) return
    handleEvents(local.onDragEnter, event);
  };
  const onDragLeave: JSX.EventHandler<HTMLLabelElement, DragEvent> = (event) => {
    if (local.disabled) return
    handleEvents(local.onDragLeave, event);
  };
  const onDragOver: JSX.EventHandler<HTMLLabelElement, DragEvent> = (event) => {
    event.preventDefault();
    if (local.disabled) return
    handleEvents(local.onDragOver, event);
  };
  const onDrag: JSX.EventHandler<HTMLLabelElement, DragEvent> = (event) => {
    if (local.disabled) return
    handleEvents(local.onDrag, event);
  };
  const onDrop: JSX.EventHandler<HTMLLabelElement, DragEvent> = (event) => {
    event.preventDefault();
    if (local.disabled) return
    handleEvents(local.onDrop, event);
  };
  const onChange: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (local.disabled) return
    handleEvents(local.onChange, event);
  }
  return (
    <label
      role="presentation"
      tabIndex={0}
      class={cn(`
          group relative grid w-full place-items-center text-foreground max-w-xs select-none
          rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition
          ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          `, `${local.disabled ? 'cursor-not-allowed opacity-40 grayscale' : 'cursor-pointer opacity-100 hover:bg-muted/25'}`)}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrag={onDrag}
      {...rest}
    >
      <input
        type="file"
        class="hidden"
        accept={local.accept}
        multiple={local.multiple}
        disabled={local.disabled}
        onChange={onChange}
      />
      <div>
        {rest.children}
      </div>
    </label>
  )
}

function handleEvents(cb: DropzoneCallback | undefined, event: DragEvent | Event) {
  if (!cb) return;

  if (event instanceof DragEvent) {
    if (!event.dataTransfer || !event.dataTransfer.files) return
    cb(event.dataTransfer.files);
    return
  }

  if (event instanceof Event) {
    if (!event.currentTarget || !(event.currentTarget instanceof HTMLInputElement)) return
    if (!event.currentTarget.files) return
    cb(event.currentTarget.files);
  }
}
