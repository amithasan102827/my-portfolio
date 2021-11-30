import React from 'react';
import Banner from '../Banner/Banner';
import ContactSection from '../ContactSection/ContactSection';
import ContactUs from '../ContactUs/ContactUs';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ContactUs></ContactUs> */}
            <Projects></Projects>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;