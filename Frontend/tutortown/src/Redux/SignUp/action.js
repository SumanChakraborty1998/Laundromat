import Axios from "axios";
import { STUDENT_REGISTER_FAILURE, STUDENT_REGISTER_REQUEST, STUDENT_REGISTER_SUCCESS, TUTOR_REGISTER_FAILURE, TUTOR_REGISTER_REQUEST, TUTOR_REGISTER_SUCCESS } from "./actionType";

const axios = Axios.create({
    baseURL:"http://localhost:3001"
});


const studentRegisterRequest = () => {
    return {
        type : STUDENT_REGISTER_REQUEST
    };
};

const studentRegisterSuccess = (payload) => {
    return {
        type : STUDENT_REGISTER_SUCCESS,
        payload
    };
};

const studentRegisterFailure = (error) => {
    return {
        type : STUDENT_REGISTER_FAILURE,
        payload : error
    };
};

const tutorRegisterRequest = () => {
    return {
        type : TUTOR_REGISTER_REQUEST
    };
};

const tutorRegisterSuccess = (payload) => {
    return {
        type : TUTOR_REGISTER_SUCCESS,
        payload
    };
};

const tutorRegisterFailure = (error) => {
    return {
        type : TUTOR_REGISTER_FAILURE,
        payload : error
    };
};

const studentRegister = (payload) => (dispatch) => {
    dispatch(studentRegisterRequest());

    const config = {
        url:"/students/new",
        method : "post",
        data : payload
    }

    return axios(config)
    .then((res) => {
        dispatch(studentRegisterSuccess(res.data.data));
        console.log(res.data);
    })
    .catch((err) => {
        dispatch(studentRegisterFailure(err));
    })
}

const tutorRegister = (payload) => (dispatch) => {
    dispatch(tutorRegisterRequest());

    const config = {
        url:"/tutors/new",
        method : "post",
        data : payload
    }

    return axios(config)
    .then((res) => {
        dispatch(tutorRegisterSuccess(res.data.data));
        console.log(res.data);
    })
    .catch((err) => {
        dispatch(tutorRegisterFailure(err));
        console.log(err.message);
    })
}

export {studentRegisterRequest, studentRegisterSuccess, studentRegisterFailure, studentRegister, tutorRegisterRequest, tutorRegisterSuccess, tutorRegisterFailure, tutorRegister};