import React from 'react'

const PostItem = ({post, remove}) => {
    return (
        <section className='item'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <div>
                <button onClick={() => remove(post.id)}>Remove</button>
            </div>
        </section>
    )
}

export default PostItem