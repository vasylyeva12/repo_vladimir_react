import React from 'react'

const PostItem = ({post}) => {
    return (
        <section className='item'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </section>
    )
}

export default PostItem