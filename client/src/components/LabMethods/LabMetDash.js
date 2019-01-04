import React from 'react';
import LabMetList from './LabMetList';
import LabMetAlphabet from './LabMetAlphabet';
import LabMetCategory from './LabMetCategory';
import LabMetSearch from './LabMetSearch';


export default class LabMetDash extends React.Component {
    constructor(props) {
        super(props);
    }
   
   
   
    render() {
        console.log('dash se renderoval');
        
        return (
            <div className='lm'>
                <LabMetSearch />
                <LabMetCategory />
                {/*<LabMetAlphabet /> */}
                <LabMetList />
            </div>
        );
    }
}