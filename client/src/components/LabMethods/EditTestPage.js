import React from 'react';
import {connect} from 'react-redux';
import LabMetForm from './LabMetForm';
import { startEditTest } from '../../actions/testActions';

//When clicked on submit button, formSubmit method is called in LabMetForm, with current component state object as parameter. That state object gets passed here as formData parameter...
//..for onClickEditFunction which calls startEditTest with parameters of id (found in redux based on id in url - by function in mapStateToProps, we could use id from URL directly...
//but we would not know if test in redux exist, this way we do) and data from form. This function makes dispatch action to save updates to db and update redux as well 

class EditTestPage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    onClickEdit = (formData) => {
        console.log('formData', formData);
        this.props.startEditTest(this.props.particularTest._id, formData)
        
    }

    render() {
        return (
            <div>
            This is from my edit test page
               
                <LabMetForm labMetToEdit={this.props.particularTest} formSubmit={this.onClickEdit}  />
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
        startEditTest: (id_arg, test_arg) => {
            dispatch(startEditTest(id_arg, test_arg));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(EditTestPage);
