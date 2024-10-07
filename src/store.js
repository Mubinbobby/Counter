//import { legacy_createStore as createStore } from "redux";
import {legacy_createStore} from "redux";
import counterReducer from "./reducer"
//const store=createStore(counterReducer);
const store=legacy_createStore(counterReducer)
export default store;