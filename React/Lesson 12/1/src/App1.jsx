import React, { useState } from 'react'
import User from './components/User/User'
import { UserContext } from './context'

const App = () => {
  const [username, setUsername] = useState("John Done");

  const changeUsername = () => {
    setUsername("Bob")
  }

  const user = {
    username,
    changeUsername,
    age: 28
  }

  return (
    <UserContext.Provider value={user}>
      <User />
    </UserContext.Provider>
  )
}

export default App