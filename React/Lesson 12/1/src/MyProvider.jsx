import React from 'react'

const MyProvider = ({children}) => {
  return (
    <div className='parent'>{children}</div>
  )
}

export default MyProvider