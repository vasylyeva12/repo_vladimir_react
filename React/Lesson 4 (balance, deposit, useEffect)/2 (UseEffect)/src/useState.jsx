import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {

    let newCount = count + 1;

    setCount(newCount);

    // setCount(prevState => {
    //   console.log("prevState", prevState)

    //   return prevState + 1;
    // })
  }

  return (
    <div className='counter'>
        <button onClick={increment}>Increment</button>

        <h2>{count}</h2>
    </div>
  )
}

export default App