import React from 'react'
import { useDispatch } from 'react-redux';
import { increment } from '../../store/actions/countAction';

const Other = () => {

    const dispatch = useDispatch();

  return (
    <>
        <button onClick={() => dispatch(increment())}>Other Increment</button>
    </>
  )
}

export default Other