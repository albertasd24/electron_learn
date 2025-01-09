import { ActionButton, ActionButtonProps } from '@/components'
import { FaFileSignature } from 'react-icons/fa6'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const handleCreation = () => {
    createEmptyNote()
  }
  return (
    <ActionButton onClick={handleCreation} {...props}>
      <FaFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
