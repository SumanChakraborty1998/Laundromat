import { STUDENT_LOGIN_FAILURE } from "../Login/actionType";
import { STUDENT_REGISTER_REQUEST, STUDENT_REGISTER_SUCCESS, TUTOR_REGISTER_FAILURE, TUTOR_REGISTER_REQUEST, TUTOR_REGISTER_SUCCESS } from "./actionType";


const init = {
    isLoading : false,
    isError : false
}


const registerReducer = (state = init, action) => {
    switch (action.type) {
        case STUDENT_REGISTER_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }

        case STUDENT_REGISTER_SUCCESS: {
            return {
                ...state, isLoading : false
            }
        }

        case STUDENT_LOGIN_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }

        case TUTOR_REGISTER_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }

        case TUTOR_REGISTER_SUCCESS: {
            return {
                ...state, isLoading : false
            }
        }

        case TUTOR_REGISTER_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }
            
        default:
            return state;
    }
}

export {registerReducer}