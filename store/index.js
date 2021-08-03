import { createStore } from 'redux'
import { COUNTER_ADD, COUNTER_SUB } from './actions.js'


const initialState = {
    number: 0,
}

const reducer = (prevState = initialState, action) => {
    switch (action.type){
        case COUNTER_ADD:
            return { ...prevState, number : prevState.number + action.payload }
        case COUNTER_SUB:
            return { ...prevState, number : prevState.number - action.payload }
        default:
            return prevState;
        }
    }
            
const store = createStore(reducer);

export default store;