import React, { useState } from 'react'

const PostItem = ({ post, remove }) => {

    const [isShow, setIsShow] = useState(false);

    return (
        <section className='item'>
            <h2>{post.title}</h2>
            {isShow && <p>{post.body}</p>}

            <div>
                <button onClick={() => remove(post.id)}>Remove</button>
                <button onClick={() => setIsShow(!isShow)}> {isShow ? "Hide": "Show"}</button>
            </div>
        </section>
    )
}

export default PostItem