import React, { useState } from 'react'
import "./App.scss"


const App = () => {
    const [data, setData] = useState({
        username: "John",
        surname: "Done",
        age: 20
    });

    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value)

        setData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSend = () => {
        console.log(data);
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
                        value={data.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="surname">Surname</label>
                    <input
                        type="text"
                        id='surname'
                        name='surname'
                        value={data.surname}
                        onChange={handleChange}
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id='age'
                        name='age'
                        value={data.age}
                        onChange={handleChange}
                    />
                </div>

                <button className='btn' onClick={handleSend}>GET USER</button>
            </div>

            <div>
                <ul>
                    <li>Username: {data.username}</li>
                    <li>Surname: {data.surname}</li>
                    <li>Age: {data.age}</li>
                </ul>
            </div>
        </div>
    )
}

export default App