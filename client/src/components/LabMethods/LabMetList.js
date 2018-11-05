import React from 'react';
import { connect } from 'react-redux';
import LabMetItem from './LabMetItem';
import {startLoadTests} from '../../actions/testActions';
import labMetSelector from '../../selectors/labMetSelector';


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
//=====================================================================================
//DO NEJAKE COMPONENT STATE NEBO REDUX DAT STAV FILTRU ZOBRAZENYCH METOD: INT/EXT/ALL A NAHRADIT HARDCODED V MAPSTATETOPROPS
//=====================================================================================

const mapStateToProps = (state) => {
    return {
        // labTests: state.labTests.tests
        labTests: labMetSelector(state.labTests.tests, 'ext')
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

