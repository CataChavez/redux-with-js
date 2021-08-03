import { createStore } from 'redux'

const initialState = {
    number: 0,
}

const reducer = (prevState = initialState, action) => {
    switch (action.type){
        case 'COUNTER_ADD':
            return { ...prevState, number : prevState.number + action.payload }
        case 'COUNTER_SUB':
            return { ...prevState, number : prevState.number - action.payload }
        default:
            return prevState;
        }
    }
            
const store = createStore(reducer)            
            
            
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'COUNTER_ADD',
    payload: 1,
})

store.dispatch({
    type: 'COUNTER_SUB',
    payload: 1,
})
store.dispatch({
    type: 'COUNTER_ADD',
    payload: 1,
})
