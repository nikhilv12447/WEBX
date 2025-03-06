import store from "./store"
import { loginAct } from "./LoginSlice"
const dispatch = store.dispatch

function wrapWithDispatch(actions = {}) {
    let res = {}
    
    for (let action in actions) {
        res[action] = (data) => dispatch(actions[action](data))
    }
    return res
}
const loginActions = wrapWithDispatch(loginAct)
export { loginActions }