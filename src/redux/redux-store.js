import {legacy_createStore as createStore} from "redux";
import reducer from './reducer'

// let reducers = combineReducers({reducer});
// если несколько редюсеров (как и должно быть)

let store = createStore(reducer);

export default store;