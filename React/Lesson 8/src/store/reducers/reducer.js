import { ADD_BALANCE, WITHDRAW_BALANCE } from "../types";

let initState = {
    balance: 1000,
    firstName: "John",
    lastName: "Done"
};

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
      case ADD_BALANCE:
        return {...state, balance: state.balance + payload}
      case WITHDRAW_BALANCE:
        return {...state, balance: state.balance - payload}
      default:
        return state;
    }
  }

export default reducer;