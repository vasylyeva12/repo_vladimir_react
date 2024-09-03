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

  const handlerRemovePost = (postId) => {
    let updatePosts = posts.filter(item => item.id !== postId);

    setPosts(updatePosts);
  }

  const handlerCreatePost = (e) => {
    e.preventDefault();

    let data = new FormData(e.target);

    let newPost = {
      id: String(Math.random() * (100 * 1000)),
      title: data.get("title"),
      body: data.get("body"),
    };

    setPosts([...posts, newPost]);

    e.target.reset();
  }

  return (
    <div className='container'>
      <form className="form" onSubmit={handlerCreatePost}>
        <div className="form__item">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>

        <div className="form__item">
          <label htmlFor="body">Description</label>
          <textarea id="body" name="body" />
        </div>

        <button className="btn" type="submit">Create post</button>
      </form>

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