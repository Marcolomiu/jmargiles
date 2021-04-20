import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import Obres from './Obres';
//import './header.css';

function Home() {

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
                            <a href="#headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><img src="images/home/Electricitat.png" /></a>
                            <a href="#headingTwo"><img src="images/home/Aigua.png" /></a>
                            <a href="#headingThree"><img src="images/home/Gas.png" /></a>
                            <a href="#headingFour"><img src="images/home/Reparacions.png" /></a>
                            <a href="#headingFive"><img src="images/home/Butlletins.png" /></a>
                            <a href="#headingSix"><img src="images/home/Obres_reformes.png" /></a>
                            <a href="#headingSeven"><img src="images/home/Recarrega_cotxes_electrics.png" /></a>
                            <a href="#headingEight"><img src="images/home/Porters_videoporters.png" /></a>
                            <a href="#headingNine"><img src="images/home/Projectes_legalitzacions.png" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sectionMargin">
                    <div className="container">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Electricitat
                                    </button>
                                    </h5>
                                </div>
                                
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    
                                    <div className="card-body">
                                        <p>Industrials: indústries, bars, restaurants, pàrquings.</p>
                                        <p>Domèstiques: vivendes, locals comercials.</p>
                                        <p>Comunitàries: serveis comuns i escomeses.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Aigua
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Industrials: bars, restaurants, indústries.</p>
                                        <p>Domèstiques: vivendes, locals comercials.</p>
                                        <p>Comunitàries: serveis comuns.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        Gas
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Industrials:  bars, restaurants, indústries.</p>
                                        <p>Domèstiques:  vivendes,  locals comercials.</p>
                                        <p>Revisions, correcció de defectes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Reparacions i petites instal·lacions
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Ampliació i/o reparació d’instal·lacions existents.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFive">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        Butlletins
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Revisió</p>
                                        <p>Instal·lacions d’electricitat</p>
                                        <p>Instal·lacions gas i correcció d’anomalies de gas</p>
                                        
                                        <p>Altes</p>
                                        <p>Instal·lacions d’electricitat</p>
                                        <p>Instal·lacions gas</p>
                                        <p>Instal·lacions d’aigua</p>
                                        
                                        <p>Ampliacions de potència</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingSix">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                        Obres i reformes
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Vivendes i Locals comercials:</p>
                                        <ul>
                                            <li>Electricitat</li>
                                            <li>Gas</li>
                                            <li>Aigua</li>
                                            <li>Envans</li>
                                            <li>Pintura</li>
                                            <li>Fusteria d’alumini</li>
                                            <li>Fusteria de fusta</li>
                                            <li>Parquet</li>
                                            <li>Terra</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingSeven">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                        Recàrrega cotxes elèctrics
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                    <div className="card-body">
                                        Punts de recàrrega per a cotxe elèctric.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingEight">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                        Porters i videoporters
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Domèstiques: vivendes, locals comercials, reparacions i petites instal·lacions de ampliació i/o reparació d’instal·lacions existents.</p>
                                        <p>Comunitàries: serveis comuns.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingNine">
                                    <h5 className="mb-0">
                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                        Projectes i legalitzacions
                                    </button>
                                    </h5>
                                </div>
                                <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Legalitzacions que necessiten projecte.</p>
                                        <p>Llicències d’activitats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;