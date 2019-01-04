import React from 'react';
import Akreditace from './Akreditace';
import Contact from './Contact';
import LabIdentification from './LabIdentification';
import Introduction from './Introduction';
import Methods from './Methods';
import Departments from './Departments';
import DrawOrg from './DrawOrg';
import Request from './Request';

const About = () => (
    <React.Fragment>
        <Introduction />
        <Methods />
        <Departments />
        <DrawOrg />
        <Request />
        <Contact />
        <LabIdentification />
        <Akreditace />
    </React.Fragment>
);

export default About;