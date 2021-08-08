import Axios from "axios";
import {
    STUDENT_LOGIN_FAILURE,
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
} from "./actionType";

const axios = Axios.create({
    baseURL: "http://localhost:3001",
});

const studentLoginRequest = () => {
    return {
        type: STUDENT_LOGIN_REQUEST,
    };
};

const studentLoginSuccess = (payload) => {
    return {
        type: STUDENT_LOGIN_SUCCESS,
        payload,
    };
};

const studentLoginFailure = (error) => {
    return {
        type: STUDENT_LOGIN_FAILURE,
        payload: error,
    };
};

const tutorLoginRequest = () => {
    return {
        type: STUDENT_LOGIN_REQUEST,
    };
};

const tutorLoginSuccess = (payload) => {
    return {
        type: STUDENT_LOGIN_SUCCESS,
        payload,
    };
};

const tutorLoginFailure = (error) => {
    return {
        type: STUDENT_LOGIN_FAILURE,
        payload: error,
    };
};

const studentLogin = (payload) => (dispatch) => {
    dispatch(studentLoginRequest());

    const config = {
        url: "/students/auth/login",
        method: "post",
        data: payload,
    };

    return axios(config)
        .then((res) => {
            dispatch(studentLoginSuccess(res.data.data));
            // console.log(res.data);
        })
        .catch((err) => {
            dispatch(studentLoginFailure(err));
        });
};

const tutorLogin = (payload) => (dispatch) => {
    dispatch(tutorLoginRequest());

    const config = {
        url: "/tutors/auth/login",
        method: "post",
        data: payload,
    };

    return axios(config)
        .then((res) => {
            dispatch(tutorLoginSuccess(res.data.data));
            console.log(res.data);
        })
        .catch((err) => {
            dispatch(tutorLoginFailure(err));
        });
};

export {
    studentLoginRequest,
    studentLoginSuccess,
    studentLoginFailure,
    studentLogin,
    tutorLoginRequest,
    tutorLoginSuccess,
    tutorLoginFailure,
    tutorLogin,
};
