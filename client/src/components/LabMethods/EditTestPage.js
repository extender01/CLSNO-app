import React from 'react';
import {connect} from 'react-redux';
import LabMetForm from './LabMetForm';
import { startEditTest } from '../../actions/testActions';


class EditTestPage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            This is from my edit test page
               
                <LabMetForm labMetToEdit={this.props.particularTest} formSubmit={this.props.startEditTest}  />
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        particularTest: state.labTests.tests.find((item) => item._id === ownProps.match.params.id),
        loading: state.labTests.loading,
        error: state.labTests.error
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startEditTest: (test) => {
            dispatch(startEditTest(ownProps.match.params.id, test));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(EditTestPage);
