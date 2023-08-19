import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Page2 from './Page2';
import Page3 from './Page3';



const Home = () => {

          const navigate = useNavigate();
          const [post, setPosts] = useState([])
          const [name, setName] = useState('');
          const [searchQuery, setSerachQuery] = useState([]);
          const ref = useRef();

          const handleSearch = () => {
            console.log(ref.current.value);

            //フィルタリング
            setSerachQuery(
              post.filter((post) => 
                post.name.toLowerCase().includes(ref.current.value)
                )
            );
          };
  
        //データ取得
          useEffect(() => {
            axios.get("http://localhost:8000/api/list")
              .then(response => setPosts(response.data))
              .catch(error => console.log(error))
          }, [])
        
             const handleChange = (e) => {
          setName(e.target.value);
        };
          
      
        //更新処理
        const Change = () => {
                axios.get("http://localhost:8000/api/list")
                .then(res => {
                    setPosts(res.data)
            })
            }
        //新規作成
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
        //削除処理
        const deleteUser = (id) => {
                axios
                  .delete(`http://localhost:8000/api/menus/${id}`)
                  .then((response) => {
                    console.log(response);
                    setPosts(post.filter((post) => post.id !== id));
                  })
                  .catch((error) => console.log(error));
              };

        //詳細表示
        const showUser = (id) => {
                axios.get(`http://localhost:8000/api/menus/${id}`)
                  .then(response => setPosts(response.data))
                  .catch(error => console.log(error))
                  
              };

        const onClickDetail = () => navigate("/page1",{ state: {id:1} })
        
        

  return (
    <>
    <input className='border-black' ref={ref} onChange={() => handleSearch()} />
    <div>
    <input type="text" value={name} onChange={handleChange} className='border-red-500'/><br />
    </div>
    <button onClick={ createNewUser }>作成</button>
    <div>{searchQuery.map((post) => (
          <div key={post.id}>
        <p className='bg-color-red text-red-500'><span className="ml-2 italic">{post.id} : {post.name}
        
        </span></p>
        <button onClick={Change}
          type="button"
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          別のにする
        </button>
        <Page2 id={post.id} name={post.name}/>
        <Page3 id={post.id} name={post.name}/>
        <button onClick={() => deleteUser(post.id)}>削除</button>
        <button onClick={() => showUser(post.id)}>詳細</button>
      </div>
      
    ))}
    </div>
    
    </>
  )
}

export default Home