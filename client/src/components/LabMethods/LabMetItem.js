import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import accentFold from '../../selectors/labMetSelector';

const LabMetItem = (props) => (
    <div  className={`lm__item lm__${props.category}`}>
        
       
        {/* if filtering text exists in redux, check if that searched text string is contained in name of labTest, if so then apply class to div*/}
        <div className={(props.textFilter && props.name.toLowerCase().includes(props.textFilter.toLowerCase())) ? 'lm__item--found' : undefined}>
            {props.category === 'external' ? (   
                <Link to={{
                    pathname: '/metody/detail/' + props._id,
                    state: 'external' 
                }}>
                    {props.name}
                </Link>
            ) : (
                <Link to={{
                    pathname: '/metody/detail/' + props._id,
                    state: 'internal' 
                }}>
                    {props.name}
                </Link>
            )}

        </div>

        <div className={(props.textFilter && props.syn.toLowerCase().includes(props.textFilter.toLowerCase())) ? 'lm__item--found' : undefined}>
            <p>{props.syn}</p>
        </div>

        <div>
            <Link to={'/edit/' + props._id}>{props.where}</Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        textFilter: state.labTests.filters.text
    };
};


export default connect(mapStateToProps)(LabMetItem);

