import React, { useState } from 'react'
import "./App.scss"


const App = () => {
    const [data, setData] = useState({
        username: "John",
        surname: "Done",
        age: 20
    });

    const handleSend = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)

        // console.log(formData.get("username"))
        // console.log(formData.get("surname"))
        // console.log(formData.get("age"))

        // const object = Object.fromEntries(formData)

        // setData(object)

        setData({
            username: formData.get("username"),
            surname: formData.get("surname"),
            age: formData.get("age")
        })
    }

    return (
        <div className="container">
            <form className='form' onSubmit={handleSend}>
                <div className="form__item">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="surname">Surname</label>
                    <input
                        type="text"
                        id='surname'
                        name='surname'
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id='age'
                        name='age'
                    />
                </div>

                <button type='submit' className='btn'>GET USER</button>
            </form>

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