import { useState } from 'react'
import Button from '../components/Button'
import Dialog from '../components/Dialog'
import Edit from '../components/Edit'

const Page3 = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className='mt-5 ml-5'>
      <Button onClick={() => setIsModalOpen(true)}>編集</Button>
      <Edit
        id={props.id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={props.name}
        description={props.memo}
      ></Edit>
    </div>
  )
}

export default Page3