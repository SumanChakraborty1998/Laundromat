import axios from "axios";

export const postTutorBookingRequest = () => {
    return {
        type: "POST_TUTOR_BOOKING_REQUEST"
    }
}

export const postTutorBookingSuccess = () => {
    return {
        type: "POST_TUTOR_BOOKING_SUCCESS"
    }
}

export const postTutorBookingFailure = (err) => {
    return {
        type: "POST_TUTOR_BOOKING_FAILURE",
        payload: err
    }
}

export const getTutorBookingRequest = () => {
    return {
        type: "GET_TUTOR_BOOKING_REQUEST"
    }
}

export const getTutorBookingSuccess = (payload) => {
    return {
        type: "GET_TUTOR_BOOKING_SUCCESS",
        payload
    }
}

export const getTutorBookingFailure = (err) => {
    return {
        type: "GET_TUTOR_BOOKING_FAILURE",
        payload: err
    }
}

export const postTutorBookingData = payload => dispatch => {
    dispatch( postTutorBookingRequest() )

    return axios.post("https://masai-project.herokuapp.com/bag", payload )
    .then(res => {
        dispatch( postTutorBookingSuccess() )
        dispatch( getTutorBookingData() )
    })
    .catch(err=> {
        dispatch( postTutorBookingFailure() )
    })
}

export const getTutorBookingData = (subj, loc, payload) => dispatch => {
    dispatch( getTutorBookingRequest() )

    return axios.get(`http://localhost:3001/tutors/${loc}/${subj}`, payload )
    .then(res => {
        // console.log(res.data.tutors)
        dispatch( getTutorBookingSuccess(res.data) )
    })
    .catch(err=> {
        dispatch( getTutorBookingFailure() )
    })
}
