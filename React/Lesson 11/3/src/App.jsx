import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove } from './store/reducer/countReducerToolkit';
// import { increment } from './store/actions/countAction';

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.count);

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
      <button onClick={()=>dispatch(remove())}>REMOVE</button>

      <h2>{count}</h2>
    </div>
  )
}

export default App