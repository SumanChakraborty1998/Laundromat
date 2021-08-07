import React from 'react';
import Join from '../JoinChat/Join';
import AwardsAndRecognition from './AwardsAndRecognition';
import ButtonAppBar from './ButtonAppBar';
import { Footer } from './Footer';
import HomePageSlide1 from './HomePageSlide1';
import ImageCarousel from './ImageCarousel';
import styles from "./HomeMainPage.module.css"

const HomeMainPage = () => {
    return (
        <div className={styles.fontStyle}>
            < ButtonAppBar />
            < HomePageSlide1 />
            < ImageCarousel />
            < AwardsAndRecognition />
            
            <Join/>
            < Footer />
        </div>
    );
};

export default HomeMainPage;