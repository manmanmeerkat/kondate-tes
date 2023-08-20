import { useState } from 'react'
import Button from '../components/Button'
import Dialog from '../components/Dialog'

const Page2 = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className='mt-5 ml-5'>
      <Button onClick={() => setIsModalOpen(true)}>詳細を表示</Button>
      <Dialog
        id={props.id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={props.name}
        description={props.memo}
      ></Dialog>
    </div>
  )
}

export default Page2