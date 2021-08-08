import { STUDENT_LOGIN_FAILURE, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, TUTOR_LOGIN_FAILURE, TUTOR_LOGIN_REQUEST, TUTOR_LOGIN_SUCCESS } from "./actionType";


const init = {
    student_data : {},
    tutor_data : {},
    isLoading : false,
    isError : false
}

const loginReducer = (state = init, action) => {
    switch (action.type) {
        case STUDENT_LOGIN_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }

        case STUDENT_LOGIN_SUCCESS: {
            return {
                ...state, isLoading : false, student_data : action.payload
            }
        }

        case STUDENT_LOGIN_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }

        case TUTOR_LOGIN_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }

        case TUTOR_LOGIN_SUCCESS: {
            return {
                ...state, isLoading : false, tutor_data : action.payload
            }
        }

        case TUTOR_LOGIN_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }
        
        default:
            return state
    }
}

export {loginReducer};