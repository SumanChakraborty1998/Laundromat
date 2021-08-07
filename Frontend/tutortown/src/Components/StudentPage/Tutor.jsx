import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorData } from '../../Redux/Student/action';
import styles from "./Tutor.module.css"
import Button from '@material-ui/core/Button';

const Tutor = () => {

    const tutorData = useSelector(state=>state.tutor.tutorData)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch( getTutorData() )
    }, [dispatch])
    // console.log();

    // if (tutorData.length>0) {

        // let tutorDetails = tutorData.data.tutors
        // console.log(tutorDetails);

    // }

    return (
        <div>
            <br/>

            <div className={styles.display}>
                {
                    tutorData[2]?.map((item,i) => (
                        <div key={i} className={styles.tutorCard} >
                            <div >
                                <img className={styles.roundImg} width="100%" src={item.profile_photo}  alt="" />
                            </div>
                            <div className={styles.bigFont}>I'm <span className={styles.colorText} >{item.name}</span></div>
                            <div>{item.experience} Years of Teaching Experience</div>
                            <br />
                            <Button variant="contained" color="secondary" size="large" disableElevation>
                                LEARN WITH ME
                            </Button>
                        </div>
                    ))
                    
                }
            </div>
        </div>
    );
};

export default Tutor;