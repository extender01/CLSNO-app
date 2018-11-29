import React from 'react';
import { connect } from 'react-redux';
import LabMetItem from './LabMetItem';
import {startLoadTests} from '../../actions/testActions';
import labMetSelector from '../../selectors/labMetSelector';


export class LabMetList extends React.Component {
    
    constructor(props) {
        super(props);
       
    }


    
    render() {
        console.log('labmetlist se renderoval');
        
        return (
            <div className='lm'>
                {
                    this.props.labTests.length === 0 ? (
                        <h2>Laboratorní metody nenalezeny</h2>
                    ) : (
                        this.props.labTests.map((labTest) => {
                            return <LabMetItem key={labTest._id} {...labTest} />;
                        })
                    )
                }
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



export default connect(mapStateToProps)(LabMetList);

