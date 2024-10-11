import { createEvent, createStore, sample } from 'effector';

type FilesMap = Map<string, File>;
type UploadEventPayload = FileList | null

export const $files = createStore<FilesMap>(new Map())

export const filesUploaded = createEvent<UploadEventPayload>()

sample({
  clock: filesUploaded,
  source: $files,
  fn: populateFiles,
  target: $files,
})

// #region helpers
function populateFiles(
  map: FilesMap,
  maybeFiles: FileList | null,
) {
  const result = new Map(map)
  if (!maybeFiles) return result;

  for (const file of maybeFiles) {
    result.set(file.name, file)
  }

  return result
}
// #endregion
