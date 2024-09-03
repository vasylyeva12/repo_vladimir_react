import React, { useContext } from 'react'
import { MyContext } from '../../context';

const Counter2 = () => {
    const {count, increment} = useContext(MyContext);

    return (
        <div>
            <p>Count2: {count}</p>

            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter2