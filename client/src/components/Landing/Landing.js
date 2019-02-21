import React from 'react';
// import Akreditace from '../ForDepartments/Akreditace';
import Contact from './Contact';
// import LabIdentification from '../Landing/LabIdentification';
import Jumbotron from './Jumbotron';
import Departments from './Departments';
// import DrawOrg from './DrawOrg';

import ForPatients from './ForPatients';
import ForDepartments from './ForDepartments';

const Landing = () => (
    <React.Fragment>
        
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