import React, { useEffect } from 'react'

const ListItem = () => {

    useEffect(() => {
        console.log("ListItem UseEffect");

        return () => {
            console.log("Remove Component !!!")
        }
    }, [])

    return (
        <div>ListItem</div>
    )
}

export default ListItem