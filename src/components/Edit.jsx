import { Dialog as Hensyu } from '@headlessui/react'
import Button from '../components/Button'

function Edit(props) {

  return (
    <Hensyu
      open={props.isOpen}
      onClose={props.onClose}
      className='fixed z-10 inset-0 overflow-y-auto'
    >
      <div className='flex items-center justify-center min-h-screen'>
        <Hensyu.Overlay className='fixed inset-0 bg-black opacity-30' />
        <div className='relative bg-white rounded max-w-lg mx-auto p-5'>
          <Hensyu.Title
            as='h3'
            className='Description-lg font-medium leading-6 Description-gray-900'
          >
            {props.name}
          </Hensyu.Title>
          <Hensyu.Description className='mt-2 text-sm text-gray-500'>
            {props.description}
          </Hensyu.Description>
          <div className='mt-4'>
            <Button onClick={props.onClose}>
              戻る
            </Button>
          </div>
        </div>
      </div>
    </Hensyu>
  )
}

export default Edit