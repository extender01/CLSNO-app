import React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';


//general html structure in cardJSX, whichLink chooses if it is wrapped in ScrollLink from react-scroll or Link from react-router based on props

class GeneralCard extends React.Component {
    
    cardJSX = () => (
        <div className='general__card'>
            <img src={this.props.cardImg} />
            <h2>{this.props.cardHead}</h2>
            <p>{this.props.cardText}</p>
        </div>
    )




    
    whichLink = () => {
        if(this.props.scrollLink) {
            return (
                <ScrollLink activeClass="active" to="draw__order" smooth={true} >
                  {this.cardJSX()} 
                </ScrollLink>
            )
        } else {
            return (
                <Link to={this.props.cardLink}>
                    {this.cardJSX()} 
                </Link>
            )
        }
    }





    render() {
        return (
            this.whichLink()
        );
    }
}

export default GeneralCard;