import React, { useMemo, useState } from 'react'
import MemoComponent from './components/MemoComponent/MemoComponent';

const App = () => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState("John");

    const handleClick = () => {
        setCount(prevState => prevState + 1)
    }

    const handleChangeName = () => {
        setName(name === "John" ? "Jane" : "John");
    }

    const handleInput = useMemo(() => {
        console.log("Handle Input Update");

        return count * 2
    }, [count])

    return (
        <div>
            <input type="text" onChange={(e) => setCount(e.target.value)} />

            <button onClick={handleClick}>Increment count</button>
            <button onClick={handleChangeName}>Change Name</button>
            <p>Count: {count}</p>

            <MemoComponent name={name} />


            <p>handleInput count: {handleInput}</p>
        </div>
    )
}

export default App