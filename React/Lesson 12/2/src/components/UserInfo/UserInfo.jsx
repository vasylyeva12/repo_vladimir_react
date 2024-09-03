import React, { useContext } from 'react'
import { UserContext } from '../../context'

const UserInfo = () => {
    const { username, age, changeUsername } = useContext(UserContext)


    return (
        <>
            <button onClick={changeUsername}>Change Username</button>
            <h2>{username} {age}</h2>
        </>
    )

    return (
        <UserContext.Consumer>
            {value => value}
        </UserContext.Consumer>
    )
}

export default UserInfo