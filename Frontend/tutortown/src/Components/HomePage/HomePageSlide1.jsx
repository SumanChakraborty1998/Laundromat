import React from 'react';
import images1 from "../Images/girl.png"
import styles from "./HomePageSlide1.module.css"
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const HomePageSlide1 = () => {

    const history = useHistory()

    const handleRegister = () => {
        history.push("/signup")
    }
    
    return (
        <>
        <br />
        <br />
        <br />
        <div>
            <img width="100%" src={images1} alt="" />
        </div>

        <div className={styles.learnDiv}>
            <div>
                𝓦𝓪𝓷𝓷𝓪 𝓵𝓮𝓪𝓻𝓷 𝓷𝓸𝔀? 𝓐𝓼𝓴 𝓶𝓮 𝓱𝓸𝔀
            </div>
            <br />

            <Button onClick={handleRegister} variant="contained" color="secondary" size="large" style={{width: "300px", fontSize: "25px"}} disableElevation>
                Register
            </Button>

        </div>
        </>
    );
};

export default HomePageSlide1;