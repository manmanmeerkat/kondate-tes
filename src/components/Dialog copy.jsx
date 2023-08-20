import { Dialog as HuiDialog } from '@headlessui/react'
import Button from '../components/Button'

function Dialog(props) {

  return (
    <HuiDialog
      open={props.isOpen}
      onClose={props.onClose}
      className='fixed z-10 inset-0 overflow-y-auto'
    >
      <div className='flex items-center justify-center min-h-screen'>
        <HuiDialog.Overlay className='fixed inset-0 bg-black opacity-30' />
        <div className='relative bg-white rounded max-w-lg mx-auto p-5'>
          <HuiDialog.Title
            as='h3'
            className='Description-lg font-medium leading-6 Description-gray-900'
          >
            {props.name}
          </HuiDialog.Title>
          <HuiDialog.Description className='mt-2 text-sm text-gray-500'>
            {props.description}
          </HuiDialog.Description>
          <div className='mt-4'>
            <Button onClick={props.onClose}>
              閉じる
            </Button>
          </div>
        </div>
      </div>
    </HuiDialog>
  )
}

export default Dialog