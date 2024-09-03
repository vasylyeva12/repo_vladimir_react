import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddBalance, actionWithdrawBalance } from './store/actions/actions';

const App = () => {
  const balance = useSelector(state => state.reducer.balance);
  const [values, setValues] = useState(0)

  const dispatch = useDispatch();

  return (
    <>
      <input type="text" onChange={e => setValues(+e.target.value)} value={values} />

      <button onClick={() => dispatch(actionAddBalance(values))}>ADD BALANCE</button>
      <button onClick={() => dispatch(actionWithdrawBalance(values))}>WITHDRAW BALANCE</button>

      <h2>Balance: {balance} $</h2>
    </>
  )
}

export default App