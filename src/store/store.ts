import { applyMiddleware, combineReducers, createStore } from "redux";
import invoicesReducer from "./invoicesReducer";
import thunk from "redux-thunk";  //thunk middleware
import { reducer as formReducer } from 'redux-form'


const reducersPush = combineReducers({
  invoicesPart: invoicesReducer,
  form: formReducer
});

type rootSotoreType = typeof reducersPush
 export type globalStateType = ReturnType<rootSotoreType>

const store = createStore(reducersPush, applyMiddleware(thunk));
export default store;