import React from 'react';
import { connect } from 'react-redux';
import {categoryFilter} from '../../actions/filterActions';

const LabMetCategory = (props) => (
    <div className='fc lm__cat'>
        <button className={props.active === 'all' ? 'lm__cat-active': undefined} name='all' onClick={(e) => {props.categoryFilter(e.target.name)}} >VŠECHNY</button>
        <button className={props.active === 'internal' ? 'lm__cat-active' : undefined} name='internal' onClick={(e) => {props.categoryFilter(e.target.name)}} >INTERNÍ</button>
        <button className={props.active === 'external' ? 'lm__cat-active' : undefined} name='external' onClick={(e) => {props.categoryFilter(e.target.name)}} >EXTERNÍ</button>
    </div>
);


const mapStateToProps = (state) => {
    return {
        active: state.labTests.filters.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryFilter: (category) => {
            dispatch(categoryFilter(category));
        }
       

    };
};

// const fce = (arg) => {
//     if (arg === 'all') {
//         return arg;
//     }
// };



export default connect(mapStateToProps, mapDispatchToProps)(LabMetCategory)

