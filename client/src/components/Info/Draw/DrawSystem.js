import React from 'react';

const DrawSystem = () => (
    <div className='main-content'>
        <table>
            <tr>
                <th>Obrázek</th>
                <th>Zkumavka / barva víčka</th>
                <th>Typ krve</th>
                <th>Popis / Aditiva</th>
                <th>Použití</th>
            </tr>
            <tr>
                <td><img src={'/images/drawsystem/image011.jpg'} /></td>
                <td>Zlatá</td>
                <td>Srážlivá žilní</td>
                <td>Gel / SiO2 (akcelerátor srážení)</td>
                <td>Biochemická, sérologická vyšetření</td>

            </tr>
            <tr>
                <td><img src={'/images/drawsystem/image013.jpg'} /></td>
                <td>Červená</td>
                <td>Srážlivá žilní</td>
                <td>SiO2 (akcelerátor srážení)</td>
                <td>Analýza hormonů, vitaminů, nádorových markerů</td>
            </tr>     
            <tr>
                <td><img src={'/images/drawsystem/image017.jpg'} /></td>
                <td>Světle zelená</td>
                <td>Nesrážlivá žilní</td>
                <td>Gel / Heparinát lithný</td>
                <td>Statimová vyšetření, dialyzovaní, heparinizovaní pacienti, hsTnI, NT-proBNP</td>
            </tr>  
            <tr>
                <td><img src={'/images/drawsystem/image021.jpg'} /></td>
                <td>Zkumavka Eppendorf</td>
                <td>Srážlivá žilní</td>
                <td>1 ml glukózového roztoku + kapilára (dodá laboratoř)</td>
                <td>Kapilární glykémie</td>
            </tr>              
            <tr>
                <td><img src={'/images/drawsystem/image024.jpg'} /></td>
                <td>Fialová</td>
                <td>Nesrážlivá žilní</td>
                <td>K2EDTA</td>
                <td>Amoniak, laktát, homocystein, glykovaný hemoglobin</td>
            </tr>              
            <tr>
                <td><img src={'/images/drawsystem/image027.jpg'} /></td>
                <td>Šedá</td>
                <td>Nesrážlivá žilní</td>
                <td>K2EDTA nebo K3EDTA + NaF (inhibitor glykolýzy)</td>
                <td>Glykémie</td>
            </tr>   
            <tr>
                <td><img src={'/images/drawsystem/image029.jpg'} /></td>
                <td>Černá</td>
                <td>Nesrážlivá žilní</td>
                <td>citrát 1:4</td>
                <td>Sedimentace</td>
            </tr>        
            <tr>
                <td><img src={'/images/drawsystem/image044.jpg'} /></td>
                <td>Fialová</td>
                <td>Nesrážlivá žilní</td>
                <td>Mikrozkumavka K2EDTA</td>
                <td>Glykovaný hemoglobin</td>
            </tr> 
            <tr>
                <td><img src={'/images/drawsystem/image032.jpg'} /></td>
                <td>Kapilára 100 ul</td>
                <td>Nesrážlivá kapilární</td>
                <td>Heparinát sodný</td>
                <td>ABR, COHb, MetHb, iCa</td>
            </tr>              
            <tr>
                <td><img src={'/images/drawsystem/image042.jpg'} /></td>
                <td>Radiometer stříkačka</td>
                <td>Nesrážlivá arteriální / žilní</td>
                <td>Heparinát lithný</td>
                <td>ABR, COHb, MetHb, iCa</td>
            </tr>                           
            <tr>
                <td><img src={'/images/drawsystem/image035.jpg'} /></td>
                <td>Žlutá / kónické dno</td>
                <td>Odběr moče</td>
                <td>Bez úprav</td>
                <td>Vyšetření chemicky + sediment</td>
            </tr>   
            <tr>
                <td><img src={'/images/drawsystem/image035.jpg'} /></td>
                <td>Žlutá / kónické dno</td>
                <td>Sdběr moče</td>
                <td>Bez úprav</td>
                <td>Biochemická analýza moče</td>
            </tr>  
            <tr>
                <td><img src={'/images/drawsystem/image039.jpg'} /></td>
                <td>Červená</td>
                <td>Odběr likvoru</td>
                <td>Sterilní, bez úprav</td>
                <td>Základní biochemická analýza likvoru</td>
            </tr>              
            <tr>
                <td><img src={'/images/drawsystem/image041.jpg'} /></td>
                <td>Zkumavka na okultní krvácení</td>
                <td>Odběr stolice</td>
                <td>Bez úprav</td>
                <td>Vyšetření stolice na okultní krvácení</td>
            </tr>  

        
        
        </table>
    </div>
);

export default DrawSystem;