import { ADD_BALANCE, WITHDRAW_BALANCE } from "../types"

export const actionAddBalance = (payload) => ({type: ADD_BALANCE, payload})
export const actionWithdrawBalance = (payload) => ({type: WITHDRAW_BALANCE, payload})
