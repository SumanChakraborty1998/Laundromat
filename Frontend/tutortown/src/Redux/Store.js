import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer"
import { registerReducer } from "./SignUp/reducer"
import { tutorReducer } from "./Student/reducer"



const rootreducer = combineReducers({
    tutor:tutorReducer,
    loginred:loginReducer,
    regred:registerReducer,
})

const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))

export default store;