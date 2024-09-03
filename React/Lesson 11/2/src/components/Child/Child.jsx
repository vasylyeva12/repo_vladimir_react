import React from 'react'
import Other from '../Other/Other'
import { useDispatch } from 'react-redux'
import { increment } from '../../store/actions/countAction';

const Child = () => {
    const dispatch = useDispatch();

    // const increment = () => {
    //     dispatch({type: "INCREMENT"})
    // }

    // const decrement = () => {
    //     dispatch({type: "DECREMENT"})
    // }

    // const remove = () => {
    //     dispatch({type: "REMOVE"})
    // }


  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type: "REMOVE"})}>Remove</button>



        <Other />
    </div>
    
  )
}

export default Child