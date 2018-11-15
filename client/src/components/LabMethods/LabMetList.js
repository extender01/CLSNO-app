import React from 'react';
import { connect } from 'react-redux';
import LabMetItem from './LabMetItem';
import {startLoadTests} from '../../actions/testActions';
import labMetSelector from '../../selectors/labMetSelector';


class LabMetList extends React.Component {
    
    constructor(props) {
        super(props);
       
    }


    
    render() {
        console.log('labmetlist se renderoval');
        
        return (
            <div className='lm'>
                {this.props.labTests.map((labTest) => {
                    return <LabMetItem key={labTest._id} {...labTest} />;
                })}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // labTests: state.labTests.tests
        labTests: labMetSelector(state.labTests.tests, state.labTests.filters)
    };
};

// pokud bude fungovat v componentDidMount z headeru tak tohle smazat
// const mapDispatchToProps = (dispatch) => {
//     return {
//         startLoadTests: () => {
//             dispatch(startLoadTests());
//         }
//     };
// };

export default connect(mapStateToProps)(LabMetList);

