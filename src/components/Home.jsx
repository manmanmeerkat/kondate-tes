import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Page2 from './Page2';
import Edit from './Edit';



const Home = () => {

          const navigate = useNavigate();
          const [post, setPosts] = useState([])
          const [name, setName] = useState('');
          const [memo, setMemo] = useState('');

  
          useEffect(() => {
            axios.get("http://localhost:8000/api/menu")
              .then(response => setPosts(response.data))
              .catch(error => console.log(error))
          }, [])
        
             const handleChange = (e) => {
          setName(e.target.value);
        };

        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            const response = await axios.post('http://localhost:8000/api/menu', { name, memo });
            console.log('Created menu:', response.data);
          } catch (error) {
            console.error('Error creating menu:', error);
          }
        };

          
      
         
        const Change = () => {
                axios.get("http://localhost:8000/api/menu")
                .then(res => {
                    setPosts(res.data)
            })
            }

      

        const deleteUser = (id) => {
                axios
                  .delete(`http://localhost:8000/api/menu/${id}`)
                  .then((response) => {
                    console.log(response);
                    setPosts(post.filter((post) => post.id !== id));
                  })
                  .catch((error) => console.log(error));
              };


        const showUser = (id) => {
                axios.get(`http://localhost:8000/api/menu/${id}`)
                  .then(response => setPosts(response.data))
                  .catch(error => console.log(error))
                  
              };

        const onClickDetail = () => navigate("/page1",{ state: {id:1} })
        
        

  return (
    <>
   <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Memo:</label>
        <textarea value={memo} onChange={(e) => setMemo(e.target.value)} />
      </div>
      <button type="submit">追加作成</button>
    </form>

    <div>{post.map((post) => (
          <div key={post.id}>
        <p className='bg-color-red text-red-500'><span className="ml-2 italic">{post.id} : {post.name}
        
        </span></p>
        <button onClick={Change}
          type="button"
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          別のにする
        </button>
        
        <Page2 id={post.id} name={post.name} memo={post.memo}/>
        <button onClick={() => deleteUser(post.id)}>削除</button>
        <button onClick={() => showUser(post.id)}>詳細</button>
      </div>
      
    ))}
    </div>
    
    </>
  )
}

export default Home