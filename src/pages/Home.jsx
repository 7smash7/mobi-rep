import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import StorePreview from '../components/StorePreview';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <BentoGrid />
            <Stats />
            <StorePreview />
            <Testimonials />
            <FAQ />
        </>
    );
};

export default Home;
