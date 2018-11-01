import React from 'react';
import { connect } from 'react-redux';
import LabMetItem from './LabMetItem';
import {startLoadTests} from '../../actions/testActions';


class LabMetList extends React.Component {
    
    componentDidMount() {
        console.log('baf', this.props.labTests);
        //  this.props.startLoadTests();
    }
    
    
    render() {
        
        return (
            <div>
                <p>Tady budou vsechny metody sveta</p>
                
                {this.props.labTests.map((labTest) => {
                    return <LabMetItem key={labTest._id} {...labTest} />;
                })}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        labTests: state.labTests.tests
    };
};

// pokud bude fungovat v componentDidMount z headeru tak tohle smazat
const mapDispatchToProps = (dispatch) => {
    return {
        startLoadTests: () => {
            dispatch(startLoadTests());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabMetList);

