import React, { useEffect, useState } from 'react'
import "../assets/styles/components/posts.scss";
import { Link } from 'react-router-dom';

const Posts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");

      let posts = await res.json();

      setData(posts);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if(isLoading){
    return <h1>Loading ...</h1>
  }

  return (
    <div className='posts'>
      {
        data && data.map(item => (
          <div className="item" key={item.id}>
            <img src="./post.png" alt={item.title} className='item__image' />

            <Link to={`/posts/${item.id}`} className='item__title'>{item.title}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Posts