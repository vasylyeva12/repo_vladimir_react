import React, { useState } from 'react'
import Item from '../Item/Item'
import { useSelector } from 'react-redux'

const Post = () => {
    const count = useSelector(state => state.count);
    // const [count, setCount] = useState(0);


    const increment = () => {
        // setCount(prevState => prevState + 1)
    }

    const decrement = () => {
        // setCount(prevState => prevState - 1)
    }

    const remove = () => {
        // setCount(0)
    }

    return <>
        <Item />
        
        {count}
    </>
}

export default Post