import axios from "axios";

export const postTutorRequest = () => {
    return {
        type: "POST_TUTOR_REQUEST"
    }
}

export const postTutorSuccess = () => {
    return {
        type: "POST_TUTOR_SUCCESS"
    }
}

export const postTutorFailure = (err) => {
    return {
        type: "POST_TUTOR_FAILURE",
        payload: err
    }
}

export const getTutorRequest = () => {
    return {
        type: "GET_TUTOR_REQUEST"
    }
}

export const getTutorSuccess = (payload) => {
    return {
        type: "GET_TUTOR_SUCCESS",
        payload
    }
}

export const getTutorFailure = (err) => {
    return {
        type: "GET_TUTOR_FAILURE",
        payload: err
    }
}

export const deleteTutorRequest = () => {
    return {
        type: "DELETE_TUTOR_REQUEST"
    }
}

export const deleteTutorSuccess = () => {
    return {
        type: "DELETE_TUTOR_SUCCESS"
    }
}

export const deleteTutorFailure = (err) => {
    return {
        type: "DELETE_TUTOR_FAILURE",
        payload: err
    }
}

export const patchTutorRequest = () => {
    return {
        type: "PATCH_TUTOR_REQUEST"
    }
}

export const patchTutorSuccess = () => {
    return {
        type: "PATCH_TUTOR_SUCCESS"
    }
}

export const patchTutorFailure = (err) => {
    return {
        type: "PATCH_TUTOR_FAILURE",
        payload: err
    }
}

export const postTutorData = payload => dispatch => {
    dispatch( postTutorRequest() )

    return axios.post("http://localhost:3001/bookings/new", payload )
    .then(res => {
        // dispatch( postTutorSuccess() )
        // dispatch( getTutorData() )
        console.log(res);
    })
    .catch(err=> {
        dispatch( postTutorFailure() )
    })
}

// export const patchTutorData = (clickedId, isQtySame) => dispatch => {
//     dispatch( patchTutorRequest() )

//     return axios.patch(`https://masai-project.herokuapp.com/bag/${clickedId}`, { quantity: `${isQtySame}` } )
//     .then(res => {
//         dispatch( patchTutorSuccess() )
//         dispatch( getTutorData() )
//     })
//     .catch(err=> {
//         dispatch( patchTutorFailure() )
//     })
// }

// export const patchBagSizesData = (clickedSizesId, isSizesSame) => dispatch => {
//     dispatch( patchTutorRequest() )

//     return axios.patch(`https://masai-project.herokuapp.com/bag/${clickedSizesId}`, { selected_size: `${isSizesSame}` } )
//     .then(res => {
//         dispatch( patchTutorSuccess() )
//         dispatch( getTutorData() )
//     })
//     .catch(err=> {
//         dispatch( patchTutorFailure() )
//     })
// }

// export const deleteTutorData = (idx) => dispatch => {
//     dispatch( deleteTutorRequest() )

//     return axios.delete(`https://masai-project.herokuapp.com/bag/${idx}` )
//     .then(res => {
//         dispatch( deleteTutorSuccess() )
//         dispatch( getTutorData() )
//     })
//     .catch(err=> {
//         dispatch( deleteTutorFailure() )
//     })
// }

export const getTutorData = (subj, loc, payload) => dispatch => {
    dispatch( getTutorRequest() )

    return axios.get(`http://localhost:3001/tutors/${loc}/${subj}`, payload )
    .then(res => {
        // console.log(res.data.tutors)
        dispatch( getTutorSuccess(res.data) )
    })
    .catch(err=> {
        dispatch( getTutorFailure() )
    })
}
