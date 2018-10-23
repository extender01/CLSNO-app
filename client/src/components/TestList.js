import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {showTests, startLoadTests} from '../actions/testActions';
import { TestItem } from './TestItem';


let testArray = [];

class TestList extends React.Component {
    
    componentDidMount() {
        this.props.startLoadTests()
    };
    
    render() {
        return (
        <div>
            <p>List of Tests</p>
            
            {this.props.loading ?  <h1>hovno</h1> : <p>prd</p>}
        </div>
        )
    };
};


const mapStateToProps = (state) => {
    return {
        tests: state.tests,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        startLoadTests: () => {
            dispatch(startLoadTests())
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TestList);

