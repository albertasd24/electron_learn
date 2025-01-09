import { selectedNoteAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'
export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return {
    selectedNote
  }
}
