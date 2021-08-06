import React from 'react';
import Join from '../JoinChat/Join';
import AwardsAndRecognition from './AwardsAndRecognition';
import ButtonAppBar from './ButtonAppBar';
import { Footer } from './Footer';
import HomePageSlide1 from './HomePageSlide1';
import ImageCarousel from './ImageCarousel';

const HomeMainPage = () => {
    return (
        <div>
            < ButtonAppBar />
            < ImageCarousel />
            < HomePageSlide1 />
            < AwardsAndRecognition />
            
            <Join/>
            < Footer />
        </div>
    );
};

export default HomeMainPage;