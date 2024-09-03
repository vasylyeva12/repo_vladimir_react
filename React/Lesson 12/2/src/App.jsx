import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [msg, setMsg] = useState("Hello world !!!");
  const [count, setCount] = useState(0)

  const sayHello = (text) => {
    console.log(text);

    for (let i = 0; i < 999999999; i++) {}
  }

  useEffect(() => {
    sayHello(msg)
  }, [sayHello, msg])

  return (
    <button onClick={() => setCount(prevState => prevState + 1)}> нажали {count}</button>
  )
}

export default App