import React from 'react';
import DrawDash  from './DrawDash';
import DrawSystem from './DrawSystem';
import DrawOrder from './DrawOrder';

const Draw = () => (
    <React.Fragment>
        <DrawDash />
        <DrawSystem />
        <DrawOrder />
    </React.Fragment>

);

export default Draw;