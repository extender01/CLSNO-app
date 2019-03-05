import React from 'react';
import Collapsible from 'react-collapsible';
import DrawMistakesItem from './DrawMistakesItem';
import mistakes from '../../../../data/drawMistakes.json';
import DrawMistakesHeader from './DrawMistakesHeader';
import VADRecommendations from './VADRecommendations';



export default class DrawMistakesSummary extends React.Component {

    
    render() {
        return (
            <div className='container__white'>
                <div className='draw__mistakes'>
                    <h1>Chyby v preanalytické fázi vyšetření</h1>

                    <Collapsible trigger={<DrawMistakesHeader box={mistakes.tubeCont.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.tubeCont} />
                    </Collapsible>

                    <Collapsible trigger={<DrawMistakesHeader box={mistakes.infusionCont.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.infusionCont} />
                        <VADRecommendations />
                    </Collapsible>

                    <Collapsible trigger={<DrawMistakesHeader box={mistakes.hemolysis.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.hemolysis} />
                    </Collapsible>

                    <Collapsible trigger={<DrawMistakesHeader box={mistakes.abr.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.abr} />
                    </Collapsible>


                    <Collapsible trigger={<DrawMistakesHeader box={mistakes.preparation.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.preparation} />
                    </Collapsible>

                </div>

                    
                
                
            </div>
        );
    }


    
    // edtaButton = 'PŘÍKLAD'
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         edta: false,
    //         infusion: false,
    //         bubble: false
            
    //     };
    // }


    // edtaToggle = () => {
    //     this.setState((prevState) => {
    //         return {edta: !prevState.edta}
    //     })
    // }


    // render() {
    //     return (
    //         <div className='draw__mistakes'>
    //             <div>
    //                 <h1>Chyby v preanalytické fázi</h1>
    //                 <p>Správné provedení preanalytické fáze je kritické pro získání validních výsledků. Až 75% chyb při laboratorní analýze se stane právě v preanalytické fázi.</p>
    //             </div>
        
    //             {/*<div>
    //                 <h2>Kontaminace infuzí</h2>
    //                 <p>Kontaminace vzorku infuzí může výrazně ovlivnit výsledky.</p>
    //             </div>*/}
        
    //             <div className='draw__mistakes__item'>
    //                 <img src='/images/mistakes/tube_contamination.jpg' />
    //                 <div className='draw__mistakes__description'>
    //                     <h2>Kontaminace aditivy</h2>
    //                     <p>Zkumavky obsahují různá aditiva, která vždy slouží nějakému účelu a nelze je mezi sebou zaměňovat nebo míchat obsah mezi zkumavkami.</p>
    //                     <div className='draw__mistakes__button' onClick={this.edtaToggle}><p>{this.state.edta ? 'SKRÝT' : 'DŮSLEDKY'}</p></div>
    //                 </div>
    //             </div>
    //             <div className={this.state.edta ? 'draw__mistakes__detail' : 'draw__mistakes__detail hide'}>
    //                 <h2>ZKUMAVKA NA KREVNÍ OBRAZ</h2>
    //                 <p>K2EDTA brání srážení krve vyvázáním iontů Ca2+, které jsou úspěšné koagulaci potřeba</p>
                    
    //                 <h3>Sipka dolu</h3>
    //                 <p>K2EDTA vychytává nejen Ca2+, ale i Mg2+ a Zn2+. Všechny tyto ionty budou při měření snížené. Dále bude uměle snížené ALP, které pro svou funkci potřebuje Zn2+. Zároveň K2EDTA vnáší velké množství K+</p>

    //                 <div className='f_stretch draw__mistakes__table'>
    //                     <div className='draw__mistakes__table__item'>
    //                         <p>Ca2+</p>
    //                         <img src='/images/mistakes/arrow_down.png' />
    //                     </div>
    //                     <div className='draw__mistakes__table__item'>
    //                         <p>Mg2+</p>
    //                         <img src='/images/mistakes/arrow_down.png' />
    //                     </div>
    //                     <div className='draw__mistakes__table__item'>
    //                         <p>Zn2+</p>
    //                         <img src='/images/mistakes/arrow_down.png' />
    //                     </div>
    //                     <div className='draw__mistakes__table__item'>
    //                         <p>ALP</p>
    //                         <img src='/images/mistakes/arrow_down.png' />
    //                     </div>
    //                     <div className='draw__mistakes__table__item'>
    //                         <p>CK</p>
    //                         <img src='/images/mistakes/arrow_down.png' />
    //                     </div>
    //                     <div className='draw__mistakes__table__item'>
    //                         <p>K+</p>
    //                         <img src='/images/mistakes/arrow_up.png' />
    //                     </div>
    //                 </div>

    //             </div>
    //         {/*
    //             <div>
    //                 <h2>Astrup</h2>
    //                 <h3>Bubliny vzduchu  ve stříkačce a kapiláře</h3>
    //                 <p>Odběry na stanovení ABR je potřeba provádět anaerobně.</p>
        
    //                 <h3>Nepromíchaný vzorek</h3>
    //                 <p>Tvoří se sraženiny a ucpe se stroj</p>
    //     </div> */}
        
        
    //         </div>
    //     );
    // }
}


