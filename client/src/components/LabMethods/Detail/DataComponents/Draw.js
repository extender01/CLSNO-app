import React from "react";


export default class Draw extends React.Component {

    constructor(props) {
        super(props);
    };

    drawTypes = {
        sg: "Srazliva krev s gelem",
        se: "Srazliva krev bez gelu",
        pli: "Nesrazliva s Li heparinem",
        edta: "Nesrazliva krev s EDTA",
        citr: "Nesrazliva krev s Na citratem",

        mocj: "Moc jednorazova",
        mocsb: "Moc sbirana",
        pu: "punktat",
        csf: "Likvor"
        
        
    };

    coZaOdber = () => {
        if(!!this.props.draw) {
            let drawTypesToArray = this.props.draw.split(", ");
            return (
                drawTypesToArray.map((item, index) => {
                    if(item.startsWith('custom:')) {
                        const customDraw = 'je tam vlastni odber'
                        return (
                            <p key={index}>{item.substring(7)}</p>
                        )
                    } else {
                        return ( 
                            <div key={index} className="pokusnik" >
                                
                                {this.drawTypes[item] &&
                                    <React.Fragment>
                                    <img src={`/images/${item}.png`} height='60px' />
                                    <p>{this.drawTypes[item]}</p>
                                    </React.Fragment>
                                }
                                
                            </div>
                        );
                    }
                })
            );
        } else {
            return (
                <p>Údaje nejsou k dispozici</p>
            )
        }
        
    };

    render() {
        return (
            <div className={`box ${this.props.classNames}`}>
                <h4>ODBĚR</h4>
                <div className='f'>
                    {this.coZaOdber()}
                    
                </div>
            </div>
        )
    }
}