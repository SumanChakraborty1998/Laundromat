import React from 'react';
import AwardsAndRecognition from './AwardsAndRecognition';
import ButtonAppBar from './ButtonAppBar';
import { Footer } from './Footer';
import HomePageSlide1 from './HomePageSlide1';
import ImageCarousel from './ImageCarousel';

const HomeMainPage = () => {
    return (
        <div>
            < ButtonAppBar />
            < HomePageSlide1 />
            < ImageCarousel />
            < AwardsAndRecognition />
            < Footer />
        </div>
    );
};

export default HomeMainPage;