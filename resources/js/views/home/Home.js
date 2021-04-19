import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import Obres from './Obres';
//import './header.css';

function Home() {

    const [obres, setObres] = useState([
        {
            titol: 'Electricitat',
            descripcio: `<p>Industrials:  indústries, bars, restaurants, pàrquing.</p> `
                        + 'Domèstiques:  vivendes,  locals comercials.\n '
                        + '<br>'
                        + 'Comunitàries: Serveis comuns i escomeses',
            open: false
        },
        {
            titol: 'Gas',
            descripcio: 'Industrials:  bars, restaurants, indústries. '
                        + 'Domèstiques:  vivendes,  locals comercials Revisions, correcció de defectes.',
            open: false
        },
        {
            titol: 'Aigua',
            descripcio: 'Industrials:  bars, restaurants, indústries. ' 
                        + 'Domèstiques:  vivendes,  locals comercials. '
                        + 'Comunitàries: Serveis comuns.'
                        + 'Bateries d’aigua.',
            open: false
        },
        {
            titol: 'Butlletins',
            descripcio: 'Revisió '
            + 'Instal·lacions d’electricitat. '
            + 'Instal·lacions gas i Correcció d’anomalies de gas. '
            
            + 'Altes '
            + 'Instal·lacions d’electricitat. '
            + 'Instal·lacions gas. '
            + 'Instal·lacions d’aigua. '
            
            + 'Ampliacions de potència.',
            open: false
        },
        {
            titol: 'Recàrrega de cotxes elèctrics',
            descripcio: 'Punts de recàrrega per a cotxe elèctric.',
            open: false
        },
        {
            titol: 'Projectes i Legalitzacions ',
            descripcio: 'Legalitzacions que necessiten projecte. '
                        + 'Llicències d’activitats.',
            open: false
        },
        {
            titol: 'Porters i videoporters',
            descripcio: 'Domèstiques:  vivendes,  locals comercials, reparacions i petites instal·lacions de ampliació i/o reparació d’instal·lacions existents. '
                        + 'Comunitàries: Serveis comuns.',
            open: false
        },
        {
            titol: 'Obres i reformes',
            descripcio: 'Vivendes i Locals comercials: Electricitat, Gas, Aigua, Envans, Pintura, Fusteria d’alumini, Fusteria de fusta, Parquet, Terra',
            open: false
        },
        {
            titol: 'Reparacions i petites instal·lacions',
            descripcio: 'Ampliació i/o reparació d’instal·lacions existents.',
            open: false
        }
    ])

    const toggleObres = index => {
        setObres(obres.map((obra, i) => {
            if (i === index) {
                obra.open = !obra.open
            } else {
                obra.open = false;
            }
            return obra;
        }))
    }

    return (
        <div>
            <Header/>
            <div className="headerMargin"></div>
            <section>
                <div className="sectionMargin">
                    <div className="container">
                        <div className="slogan">
                            <h2>Llum, aigua, gas, reformes, llicències?</h2>
                            <h2>Què necessites?</h2>
                            <h1>Ho solucionem tot</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sectionMargin">
                    <div className="container">
                        <div className="obresMenu">
                            <a href="#"><img src="images/home/Electricitat.png" /></a>
                            <a href="#"><img src="images/home/Gas.png" /></a>
                            <a href="#"><img src="images/home/Aigua.png" /></a>
                            <a href="#"><img src="images/home/Butlletins.png" /></a>
                            <a href="#"><img src="images/home/Recarrega_cotxes_electrics.png" /></a>
                            <a href="#"><img src="images/home/Projectes_legalitzacions.png" /></a>
                            <a href="#"><img src="images/home/Porters_videoporters.png" /></a>
                            <a href="#"><img src="images/home/Obres_reformes.png" /></a>
                            <a href="#"><img src="images/home/Reparacions.png" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sectionMargin">
                    <div className="container">
                        <div className="obresAccordion">
                            {obres.map((obra, i) => (
                                <Obres obra={obra} index={i} toggleObres={toggleObres} />
                            ))}
                        </div>
                    </div>    
                </div>
            </section>
        </div>
    );
}

export default Home;