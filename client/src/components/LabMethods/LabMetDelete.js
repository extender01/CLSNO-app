import React from 'react';
import {connect} from 'react-redux';
import {startDeleteTest} from '../../actions/testActions';

const LabMetDelete = (props) => (
    <div>
        <button onClick={() => {props.deleteTest(props.id)}}>SMAZAT METODU {props.id}</button>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTest: (id_arg) => {
            dispatch(startDeleteTest(id_arg));
        }
    };
};

export default connect(undefined, mapDispatchToProps)(LabMetDelete);