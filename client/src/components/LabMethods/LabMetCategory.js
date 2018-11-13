import React from 'react';
import { connect } from 'react-redux';
import {categoryFilter} from '../../actions/filterActions';

const LabMetCategory = (props) => (
    <div>
        <button name='all' onClick={(e) => {props.categoryFilter(e.target.name)}} >VSE</button>
        <button name='internal' onClick={(e) => {props.categoryFilter(e.target.name)}} >INTERNI</button>
        <button name='external' onClick={(e) => {props.categoryFilter(e.target.name)}} >EXTERNI</button>
    </div>
);

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryFilter: (category) => {
            dispatch(categoryFilter(category));
        }
       

    };
};

export default connect(undefined, mapDispatchToProps)(LabMetCategory)

const hovno =  (e) => {
    console.log(e.target.name);
    
};