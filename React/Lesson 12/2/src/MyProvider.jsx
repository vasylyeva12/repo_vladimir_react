import React, { useState } from 'react'
import {MyContext} from "./context";

const MyProvider = ({children}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <MyContext.Provider value={{count, increment}}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider