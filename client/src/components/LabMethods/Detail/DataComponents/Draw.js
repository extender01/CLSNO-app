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
            let drawToArray = this.props.draw.split(", ");
            return (
                drawToArray.map((item, index) => {
                    return ( 
                        <div key={index} className="flexi--column" >
                            <div className={`detail__img-${item}`}></div>
                            <p>{this.drawTypes[item] ? this.drawTypes[item] : drawToArray[index]}</p>
                        </div>
                    );
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
            <div className={this.props.classNames}>
                <h4>ODBĚR</h4>
                <div className="flexi--align-low">
                    {this.coZaOdber(this.props.draw)}
                    
                </div>
            </div>
        )
    }
}