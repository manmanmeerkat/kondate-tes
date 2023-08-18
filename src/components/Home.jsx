import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

          const navigate = useNavigate();
          const [post, setPosts] = useState([])
          const [name, setName] = useState('');
  
          useEffect(() => {
            axios.get("http://localhost:8000/api/list")
              .then(response => setPosts(response.data))
              .catch(error => console.log(error))
          }, [])
        
             const handleChange = (e) => {
          setName(e.target.value);
        };
          
      
         
        const Change = () => {
                axios.get("http://localhost:8000/api/list")
                .then(res => {
                    setPosts(res.data)
            })
            }

        const createNewUser = () => {
                axios
                  .post("http://localhost:8000/api/menus", {
                    name: name,
                  })
                  .then((response) => {
                    setPosts([...post, response.data]);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              };

        const deleteUser = (id) => {
                axios
                  .delete(`http://localhost:8000/api/menus/${id}`)
                  .then((response) => {
                    console.log(response);
                    setPosts(post.filter((post) => post.id !== id));
                  })
                  .catch((error) => console.log(error));
              };


        const showUser = (id) => {
                axios.get(`http://localhost:8000/api/menus/${id}`)
                  .then(response => setPosts(response.data))
                  .catch(error => console.log(error))
                  
              };

        const onClickDetail = () => navigate("/page1",{ state: {id:1} })
        
        

  return (
    <>
    <input value={name} onChange={handleChange} /><br />
    <button onClick={ createNewUser }>作成</button>
    <div>{post.map((post) => (
          <div key={post.id}>
        <p className='bg-color-red text-red-500'><span className="ml-2 italic">{post.id}{post.name}<button onClick={onClickDetail}>Page1</button>
        
        </span></p>
        <button onClick={Change}
          type="button"
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          別のにする
        </button>
        <button onClick={() => deleteUser(post.id)}>削除</button>
        <button onClick={() => showUser(post.id)}>詳細</button>
      </div>
      
    ))}
    </div>
    
    </>
  )
}

export default Home