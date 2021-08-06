import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorData } from '../../Redux/Student/action';


const Tutor = () => {

    const tutorData = useSelector(state=>state.tutor.tutorData)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch( getTutorData() )
    }, [dispatch])
    console.log(tutorData);

    return (
        <div>
            <div>
                {/* {
                    [1].map((item,i) => (
                        <div key={i}>
                        <div>uhfuhfg</div>
                        <div>uhfuhfg</div>
                        </div>
                    ))
                } */}
            </div>
        </div>
    );
};

export default Tutor;