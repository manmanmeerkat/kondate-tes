import { Dialog as HuiDialog } from '@headlessui/react'
import Button from '../components/Button'
import axios from 'axios';
import { useState } from 'react';

function Dialog(props) {
  const { id } = props; // propsからidを取得
  const [name, setName] = useState('');
  const [memo, setMemo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/menu/${id}`, { name: name, memo: memo });
      console.log('Created post:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };



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
          <form onSubmit={handleSubmit}>
          <div>
            <label>name:</label>
            <input type="text" placeholder={props.name} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
            <label>Content:</label>
            <textarea value={memo} placeholder={props.description} onChange={(e) => setMemo(e.target.value)} />
            <button type="submit">保存する</button>
          </form>
          </HuiDialog.Title>
          <HuiDialog.Description className='mt-2 text-sm text-gray-500'>
          
        
           
          </HuiDialog.Description> 
          <div className='mt-4'>
            <Button onClick={props.onClose}>
              閉じる{props.id}
            </Button>
          </div>
        </div>
      </div>
    </HuiDialog>
  )
}

export default Dialog