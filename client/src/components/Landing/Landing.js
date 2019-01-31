import React from 'react';
import Akreditace from '../About/Akreditace';
import Contact from '../Landing/Contact';
import LabIdentification from '../Landing/LabIdentification';
import Jumbotron from '../Landing/Jumbotron';
import Departments from '../Landing/Departments';
import DrawOrg from '../Landing/DrawOrg';
// import AboutHeader from '../Headers/AboutHeader';

const Landing = () => (
    <React.Fragment>
        {/* <AboutHeader />*/}
        <Jumbotron />
        
        <DrawOrg />

        <Departments />

        <Contact />
       
       
    </React.Fragment>
);

export default Landing;

// <LabIdentification />
//  <Akreditace />