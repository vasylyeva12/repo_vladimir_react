const initState = {
    count:0
}

const countReducer = (state = initState, action) => {
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count - 1}
        case "REMOVE":
            return {...state, count: 0}
        default:
            return state;
    }
}

export default countReducer;