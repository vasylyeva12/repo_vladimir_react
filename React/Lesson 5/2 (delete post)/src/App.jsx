import React, { useState } from 'react'
import PostItem from './components/PostItem'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Lorem, ipsum dolor. 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure consectetur eius iusto temporibus sed illum laudantium.Ipsum inventore provident alias aut sequi eligendi nisi ut."
    },
    {
      id: "2",
      title: "Lorem, ipsum dolor. 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure consectetur eius iusto temporibus sed illum laudantium.Ipsum inventore provident alias aut sequi eligendi nisi ut."
    },
    {
      id: "3",
      title: "Lorem, ipsum dolor. 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure consectetur eius iusto temporibus sed illum laudantium.Ipsum inventore provident alias aut sequi eligendi nisi ut."
    },
    {
      id: "4",
      title: "Lorem, ipsum dolor. 4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure consectetur eius iusto temporibus sed illum laudantium.Ipsum inventore provident alias aut sequi eligendi nisi ut."
    }
  ]);

  const handlerRemovePost = () => {
    console.log("Remove Post");
  }

  return (
    <div className='container'>
      <div className='posts'>

        {
          posts && posts.map(item => <PostItem 
              key={item.id} 
              post={item} 
              remove={handlerRemovePost}
            />)
        }
        
      </div>
    </div>
  )
}

export default App