import React from 'react';
import Banner from '../Banner/Banner';
import FaqAsk from '../FAQ/FAQ';
import FoodMenu from '../FoodMenu/FoodMenu';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';

const Landing = () => {


    return (
        <div>

            {/* <Header></Header> */}
            <Banner></Banner>
            <FoodMenu></FoodMenu>
            <FaqAsk></FaqAsk>
            <Footer></Footer>

        </div>
    );
};

export default Landing;