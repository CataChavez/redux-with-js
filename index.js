import { COUNTER_ADD, COUNTER_SUB } from "./store/actions.js"
import store from "./store/index.js"      
            
store.subscribe(() => {
    console.log(store.getState()) //le pedimos que nos avise cada vez que hay un cambio
})

const autoSum = (payload) => ({ //action creator for ADD
    type: COUNTER_ADD,
    payload: payload,
})

const autoSub = (payload) => ({
    type: COUNTER_SUB,
    payload: payload,
})

store.dispatch(
    autoSum(1)
)

store.dispatch(
    autoSub(1)
)
store.dispatch(
    autoSum(1)
)
