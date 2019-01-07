import React from 'react';
import Akreditace from './Akreditace';
import Contact from './Contact';
import LabIdentification from './LabIdentification';
import Introduction from './Introduction';
import Methods from './Methods';
import Departments from './Departments';
import DrawOrg from './DrawOrg';
import Request from './Request';
import AboutHeader from '../Headers/AboutHeader';

const About = () => (
    <React.Fragment>
        <AboutHeader />
        <Introduction />
        
        <DrawOrg />

        <Departments />

        <Contact />
        <LabIdentification />
        <Akreditace />
    </React.Fragment>
);

export default About;