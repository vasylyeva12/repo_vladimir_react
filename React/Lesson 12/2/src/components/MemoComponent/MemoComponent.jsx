import React, {memo} from 'react'

const MemoComponent = ({ name }) => {
    console.log("Rendering component!");

    return (
        <div>{name}</div>
    )
}

export default memo(MemoComponent);