import React from 'react';
import styles from "./AwardsAndRecognition.module.css"
import award1 from "../Images/award1.png"
import award2 from "../Images/award2.png"
import award3 from "../Images/award3.png"
import award4 from "../Images/award4.png"
import award5 from "../Images/award5.png"

const AwardsAndRecognition = () => {
    return (
        <>
        <br />
        <br />
        <div className={styles.fontBig}>Awards And Recognitions</div>
        <br />
        <br />

        <div className={styles.display}>
            <div className={styles.marginTop}>
                <img src={award1} alt="" />
            </div>
            <div>
                <img src={award2} alt="" />
            </div>
            <div>
                <img src={award3} alt="" />
            </div>
            <div>
                <img src={award4} alt="" />
            </div>
            <div className={styles.marginTop}>
                <img src={award5} alt="" />
            </div>
        </div>
        <br />
        <br />

        </>
    );
};

export default AwardsAndRecognition;