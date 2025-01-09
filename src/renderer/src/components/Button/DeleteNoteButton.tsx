import { ActionButtonProps, ActionButton } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { FaTrash } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleDelete = () => {
    deleteNote()
  }
  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaTrash className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
