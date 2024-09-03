import React from 'react'
import "./App.scss"


const App = () => {
  return (
    <div className="container">
      <div className='form'>
          <div className="form__item">
              <label htmlFor="username">Username</label>
              <input type="text" id='username' name='username'/>
          </div>

          <div className="form__item">
              <label htmlFor="surname">Surname</label>
              <input type="text" id='surname' name='surname'/>
          </div>

          <div className="form__item">
              <label htmlFor="age">Age</label>
              <input type="number" id='age' name='age'/>
          </div>

          <button className='btn'>GET USER</button>
      </div>
    </div>
  )
}

export default App