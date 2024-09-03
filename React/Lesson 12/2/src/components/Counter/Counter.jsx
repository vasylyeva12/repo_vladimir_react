import React, { useContext } from 'react'
import { MyContext } from '../../context';

const Counter = () => {
    const {count, increment} = useContext(MyContext);

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter