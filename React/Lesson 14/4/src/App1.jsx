import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import "./App.scss"


// const users = [
//     {
//         id: 1,
//         username: "John",
//         email: "admin@gmail.com",
//         password: "admin123"
//     }
// ]


// {
//     email: "admin@gmail.com",
//     password: "admin123"
// }


const App = () => {
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState(null);

    const handleSend = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        const object = Object.fromEntries(formData);

        setUsers([...users, {id: uuidv4(), ...object}])
    }

    const handleLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        const object = Object.fromEntries(formData);

        let foundUser = users.find(item => item.email === object.emailLogin);

        if(foundUser){
            if(foundUser.password === object.passwordLogin){
                setUser(foundUser);
            }else {
                alert("Пароль не совпадает!")
            }
        }else {
            alert("Email не совпадает!")
        }
    }

    console.log(users)

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
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                    />
                </div>

                <button type='submit' className='btn'>ADD USER</button>
            </form>


            <form className='form' onSubmit={handleLogin}>
                <div className="form__item">
                    <label htmlFor="emailLogin">Email</label>
                    <input
                        type="emailLogin"
                        id='emailLogin'
                        name='emailLogin'
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="passwordLogin">Password</label>
                    <input
                        type="passwordLogin"
                        id='passwordLogin'
                        name='passwordLogin'
                    />
                </div>

                <button type='submit' className='btn'>Login</button>
            </form>

            {user && <h1>{user.username}</h1>}
        </div>
    )
}

export default App