import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import AllCars from './AllCars/AllCars';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <AllCars></AllCars>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;