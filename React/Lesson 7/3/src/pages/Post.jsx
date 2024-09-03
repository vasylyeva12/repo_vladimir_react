import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../assets/styles/components/post.scss"

const Post = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { postId } = useParams(); // 1

    const fetchPost = async () => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

            let post = await res.json();

            setData(post);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPost()
    }, [])

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className='post'>
            <img className='post__image' src="../post.png" alt="" />

            <h1 className='post__title'>{data.title}</h1>

            <p className='post__desc'>{data.body}</p>
        </div>
    )
}

export default Post