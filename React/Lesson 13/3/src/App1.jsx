import React, { useState } from 'react'
import "./App.scss"


const App = () => {
  const [username, setUsername] = useState("Bob");
  const [surname, setSurname] = useState("Done");
  const [age, setAge] = useState(20);


  const handleSend = () => {
    console.log({
      username,
      surname,
      age
    })
  }

  return (
    <div className="container">
      <div className='form'>
          <div className="form__item">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id='username' 
                name='username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
          </div>

          <div className="form__item">
              <label htmlFor="surname">Surname</label>
              <input 
                type="text" 
                id='surname' 
                name='surname'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
          </div>

          <div className="form__item">
              <label htmlFor="age">Age</label>
              <input 
                type="number" 
                id='age' 
                name='age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
          </div>

          <button className='btn' onClick={handleSend}>GET USER</button>
      </div>

      <div>
          <ul>
            <li>Username: {username}</li>
            <li>Surname: {surname}</li>
            <li>Age: {age}</li>
          </ul>
      </div>
    </div>
  )
}

export default App