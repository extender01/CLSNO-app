import React from 'react';
// import Akreditace from '../About/Akreditace';
import Contact from './Contact';
// import LabIdentification from '../Landing/LabIdentification';
import Jumbotron from './Jumbotron';
import Departments from './Departments';
// import DrawOrg from './DrawOrg';

import ForPatients from './ForPatients';
import ForDepartments from './ForDepartments';
// import AboutHeader from '../Headers/AboutHeader';

const Landing = () => (
    <React.Fragment>
        {/* <AboutHeader />*/}
        <Jumbotron />


        <ForDepartments />
        <ForPatients />
        

        <Departments />

        <Contact />
       
       
    </React.Fragment>
);

export default Landing;

// <LabIdentification />
//  <Akreditace />