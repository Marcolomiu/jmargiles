import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
//import './header.css';

function Quisom() {
    return (
        <div>
            <Header/>
            <div className="headerMargin"></div>
            <section>
                <div className="sectionMargin">
                    <div className="container">
                        <div className="row">
                            <div className="quisom-image d-none d-lg-block col-lg-7">
                                <img src="images/quisom/quisom_imatge.png"></img>
                            </div>
                            
                            <div className="textDiv col-lg-5 col-12">
                                <p>En Josep M. Argilés som un grup de professionals formats i especialitzats en tots els àmbits que oferim.</p>

                                <p>Sempre en constant aprenentatge i motivats per fer les coses cada dia millor.</p>

                                <p>Així aconseguim tenir un equip format per un eficaç i flexible grup d’oficials i tècnics especialistes en les diverses àrees.</p>
                                <p>També disposem d’un ampli grup de col·laboradors externs que ens donen suport: enginyers, arquitectes, dissenyadors i especialistes en altres àrees que complementen el nostre àmbit. Tots ells aporten tot l’engranatge necessari per a que les nostres actuacions siguin de bona qualitat.</p>


                                <p>Volem seguir creixent i ampliant el nostre capital humà. Creiem en les persones i portem anys recolzats en professionals eficaços.</p>
                                <p>També apostem per les noves tecnologies. Per això tenim un programa de formació permanent per tal d’aplicar-les correctament en benefici dels nostres clients.</p>
                            </div>
                            <div className="quisom-image d-lg-none col-12">
                                <img src="images/quisom/quisom_imatge.png"></img>
                            </div>
                        </div>
                    </div>
                </div>           
            </section>
        </div>
    );
}

export default Quisom;