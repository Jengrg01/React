import { combineReducers, legacy_createStore } from "redux";
// data combine garera object ma pathaunu to app.js
import cartFunction from "./redux/reducer/cartFunction";
import studentReducer from "./redux/reducer/studentReducer";
const reducer = combineReducers({
    cart: cartFunction,
    student: studentReducer
})
const store = legacy_createStore(reducer)
export default store