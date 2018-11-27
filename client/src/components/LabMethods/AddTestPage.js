import React from 'react';
import {connect} from 'react-redux';
import LabMetForm from './LabMetForm';
import { startAddTest } from '../../actions/testActions';


class AddTestPage extends React.Component {
  
    render() {
        console.log('renderAddTest ', this.state, this.props);

        return (
            <React.Fragment>
                {this.props.error &&   <p>{this.props.error.message}</p>}
                <LabMetForm new={true} formSubmit={this.props.startAddTest} />
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.labTests.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddTest: (test) => {
            dispatch(startAddTest(test));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(AddTestPage);

