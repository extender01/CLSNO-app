import React from 'react';
import LabMetList from './LabMetList';
import LabMetCategory from './LabMetCategory';
import LabMetSearch from './LabMetSearch';

const LabMetDash = () => (
    <div className='lm__container'>
        <div className='lm'>
            <LabMetSearch />
            <LabMetCategory />
            <LabMetList />
        </div>
    </div>
);

export default LabMetDash;
