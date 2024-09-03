import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

// const ADD_BALANCE = "ADD_BALANCE";
// const WITHDRAW_BALANCE = "WITHDRAW_BALANCE";

// let initState = {
//   balance: 0,
//   firstName: "John",
//   lastName: "Done"
// };

// const reducer = (state = initState, {type, payload}) => {
//   if(action.type === "ADD_BALANCE"){
//     return {...state, balance: state.balance + action.payload}
//   }else if(action.type === "WITHDRAW_BALANCE"){
//     return {...state, balance: state.balance - action.payload}
//   }else {
//     return state;
//   }

//   switch (type) {
//     case ADD_BALANCE:
//       return {...state, balance: state.balance + payload}
//     case WITHDRAW_BALANCE:
//       return {...state, balance: state.balance - payload}
//     default:
//       return state;
//   }
// }

// const actionAddBalance = (payload) => ({type: ADD_BALANCE, payload})
// const actionWithdraw = (payload) => ({type: WITHDRAW_BALANCE, payload})

// initState = reducer(initState, actionAddBalance(1000));
// initState = reducer(initState, actionAddBalance(500));
// initState = reducer(initState, actionAddBalance(1500));

// initState = reducer(initState, actionWithdraw(500))
// initState = reducer(initState, actionWithdraw(200))

// const dispatch = action => {
//     initState = reducer(initState, action)
// }

// dispatch(actionAddBalance(1000))
// dispatch(actionWithdraw(200))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
