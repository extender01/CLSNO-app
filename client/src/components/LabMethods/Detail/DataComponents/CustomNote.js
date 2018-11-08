import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

// default fallback object (empty object) must be set when props are destructured: {name, age} = {}, setting default values is not enough...
//beacuse destructured parameters are always required. Here when department has no custom note, then error would be thrown

// here props object is props: {customNote: {customNote, department}, label, _id, user}
const CustomNote = ({customNote: {customNote = null} = {}, user, ...otherProps } = {}) => (
    
    <div>
    
        <div>
            <h4>POZNAMKA ODDELENI {( user !== 'nobody'  &&  user)}</h4>    
            
            <Link to={{
                pathname: '/customNote/' + otherProps._id,
                jmeno: otherProps.label
            }}>
                zmenit/pridat poznamku
            </Link>

            <p>{customNote}</p>
        </div>
        
    
    </div>
);

const mapStateToProps = (state) => ({user: state.users.user.nick});

export default connect(mapStateToProps)(CustomNote);



//  PRI ZMENE POZNAMKY AT JE INPUT VYPLNENY PUVODNI POZNAMKOU