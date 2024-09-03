import React from 'react'
import Child from '../Child/Child'

const Item = ({increment, decrement, remove}) => <Child 
    increment={increment}  
    decrement={decrement} 
    remove={remove}
/>

export default Item