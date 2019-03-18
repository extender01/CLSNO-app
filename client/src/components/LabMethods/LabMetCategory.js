import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import {categoryFilter, statimFilter, erFilter, additionalFilter, clearFilters} from '../../actions/filterActions';

const LabMetCategory = (props) => (
    <React.Fragment>
        
        <div className='fc lm__cat'>
            <button className={props.active === 'all' ? 'lm__cat-active': undefined} name='all' onClick={() => {props.clearAllFilters()}} >VŠECHNY</button>
            <button className={props.active === 'internal' ? 'lm__cat-active' : undefined} name='internal' onClick={(e) => {props.categoryFilter(e.target.name)}} >INTERNÍ</button>
            <button className={props.active === 'external' ? 'lm__cat-active' : undefined} name='external' onClick={(e) => {props.categoryFilter(e.target.name)}} >EXTERNÍ</button>

        </div>
        
        <Collapsible trigger='Další filtry'>
            <div className='fc lm__cat'>
                <button className={props.statim === true ? 'lm__cat-active' : undefined} name='stat' onClick={() => {props.statimFilter(!props.statim)}} >STATIM</button>
                <button className={props.er === true ? 'lm__cat-active' : undefined} name='er' onClick={() => {props.erFilter(!props.er)}} >POHOTOVOST</button>
                <button className={props.additional === true ? 'lm__cat-active' : undefined} name='additional' onClick={() => {props.additionalFilter(!props.additional)}} >DOHLASKA</button>

            </div>
            
        </Collapsible>

    
    </React.Fragment>
);


const mapStateToProps = (state) => {
    return {
        active: state.labTests.filters.category,
        statim: state.labTests.filters.statim,
        er: state.labTests.filters.er,
        additional: state.labTests.filters.additional
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryFilter: (category) => {
            dispatch(categoryFilter(category));
        },
        clearAllFilters: () => {
            dispatch(clearFilters());
            dispatch(erFilter(false));
            dispatch(additionalFilter(false));
            dispatch(statimFilter(false));
        },
        statimFilter: (statim) => {
            dispatch(statimFilter(statim));
            dispatch(erFilter(false));
            dispatch(additionalFilter(false));
        },
        erFilter: (er) => {
            dispatch(erFilter(er));
            dispatch(statimFilter(false));
            dispatch(additionalFilter(false));

        },
        additionalFilter: (additional) => {
            dispatch(additionalFilter(additional));
            dispatch(statimFilter(false));
            dispatch(erFilter(false));
        }
       

    };
};

// const fce = (arg) => {
//     if (arg === 'all') {
//         return arg;
//     }
// };



export default connect(mapStateToProps, mapDispatchToProps)(LabMetCategory)

