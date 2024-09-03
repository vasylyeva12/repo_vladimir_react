import React, { useEffect, useState } from 'react'
import PostItem from './components/PostItem'

const API_POSTS = "https://jsonplaceholder.typicode.com/posts";

let x = 10;
x = 20;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      let response = await fetch(API_POSTS);

      let data = await response.json();

      setPosts(data);
    } catch (err) {
      console.error(err);
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();

    let filteredData = posts.filter(item => item.title.toLowerCase().includes(value));

    setFilteredPosts(filteredData);
  }

  const data = filteredPosts.length > 0 ? filteredPosts : posts;

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

      <div className="search">
          <input type="text" placeholder="Search ..." onChange={handleChange}/>
      </div>

      <div className='posts'>
        {
          isLoading
            ? <div className="loader"><div className="loader-content"></div></div>
            : (
              data && data.map(item => <PostItem
                key={item.id}
                post={item}
                remove={handlerRemovePost}
              />)
            )
        }

      </div>
    </div>
  )
}

export default App