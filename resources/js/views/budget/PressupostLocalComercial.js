import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import parse from 'html-react-parser';

import Header from '../../components/header/Header';
import Pressupost from './Pressupost';
import pressupostVivenda from './PressupostVivenda';
import pressupostLocalComercial from './PressupostLocalComercialForm';

//import './header.css';

let formulari = 2;

// const vivenda = <div dangerouslySetInnerHTML={{ __html: pressupostVivenda.formulari }} />;
// const localComercial = <div dangerouslySetInnerHTML={{ __html: pressupostLocalComercial.formulari }} />;

const vivenda = pressupostVivenda.formulari;
const localComercial = pressupostLocalComercial.formulari;

//document.getElementById().
/*
document.getElementsByClassName('').addEventListener('change', function() {
    document.querySelector(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
});
*/
/*
const [budgetCost, setBudgetCost] = useState(0);

useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/')
    .then(response => {
        setBudgetCost(response.data);
    })
})*/

class PressupostLocalComercial extends React.Component {

    constructor(props)
    {
        super(props);
        this.addFormData = this.addFormData.bind(this);

        this.state = {
            budgetCost: 0
        };
    }

    // https://reactjs.org/docs/hooks-state.html


    componentDidMount() {
        this._radioClick();
    }

    _radioClick() {
        let inputs = document.getElementsByTagName("input"),
        x = inputs.length;
        //console.log(x);


        // https://dev.to/safventure/deploy-laravel-application-with-database-to-heroku-l50


        while(x--) {
            if(inputs[x].type === "checkbox") {

                let aux = this;

                inputs[x].addEventListener("change", function() {
                    // console.log("Checked: " + this.checked);
                    // console.log("Name: " + this.name);
                    // console.log("Value: " + this.value);
                    // console.log("Parent: " + this.parent);
                                        
                    let auxBudgetCost = 0;

                    let inputsAux = document.getElementsByTagName("input"),
                    y = inputsAux.length;
                    
                    //console.log(y);

                    while(y--) {
                        if(inputsAux[y].type === "checkbox") {
                            if (inputsAux[y].checked === true) {
                                auxBudgetCost += Number(inputsAux[y].value);
                                // console.log("Value: " + inputsAux[y].value);
                            } 
                        }
                    }
                    // console.log("Cost total: " + auxBudgetCost);
                    aux.setState({ budgetCost: auxBudgetCost })
                },0);                
            }
        }
    }

    /*
    document.querySelector('input[type="checkbox"]').addEventListener('change', function() {
        document.querySelector(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
    });

    document.querySelector('.check input:checkbox').click(function() {
        document.querySelector('.check input:checkbox').not(this).prop('checked', false);
    });


    // the selector will match all input controls of type :checkbox
    // and attach a click event handler 
    document.querySelector("input:checkbox").addEventListener('click', function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = document.querySelector(this);
        if ($box.is(":checked")) {
        // the name of the box is retrieved using the .attr() method
        // as it is assumed and expected to be immutable
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        // the checked state of the group/box on the other hand will change
        // and the current value is retrieved using .prop() method
        document.querySelector(group).prop("checked", false);
        $box.prop("checked", true);
        } else {
        $box.prop("checked", false);
        }
    });
    */


    // Mail Form Submission
    addFormData(evt)
    {
        evt.preventDefault();

        //Regex
        let regex = true;
        
        if (this.refs.contactNom.value === null || this.refs.contactNom.value === "") {
            document.getElementById("regexNameError").innerHTML = "*El nom és necessari";
            document.getElementById("regexNameError").style.display = "block";
            regex = false;
        } else {
            if (/^[a-zA-ZàèìòùÀÈÌÒÙáéíóúý ]{2,50}$/.test(this.refs.contactNom.value) === false) {
                document.getElementById("regexNameError").innerHTML = "*El nom només pot contenir lletres";
                document.getElementById("regexNameError").style.display = "block";
                regex = false;
            } else {
                document.getElementById("regexNameError").style.display = "none";
            }
        }

        if (this.refs.contactTelf.value === null || this.refs.contactTelf.value === "") {
            document.getElementById("regexTelfError").innerHTML = "*El número és necessari";
            document.getElementById("regexTelfError").style.display = "block";
            regex = false;
        } else {
            if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{8,20}$/.test(this.refs.contactTelf.value) === false) {
                document.getElementById("regexTelfError").innerHTML = "*El número no es vàlid";
                document.getElementById("regexTelfError").style.display = "block";
                regex = false;
            } else {
                document.getElementById("regexTelfError").style.display = "none";
            }
        }

        if (this.refs.contactEmail.value === null || this.refs.contactEmail.value === "") {
            document.getElementById("regexEmailError").innerHTML = "*El email és necessari";
            document.getElementById("regexEmailError").style.display = "block";
            regex = false;
        } else {
            if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.refs.contactEmail.value) === false) {
                document.getElementById("regexEmailError").innerHTML = "*El email no és valid";
                document.getElementById("regexEmailError").style.display = "block";
                regex = false;
            } else {
                document.getElementById("regexEmailError").style.display = "none";
            }
        }

        /*
        if (this.refs.contactDescripcio.value === null || this.refs.contactDescripcio.value === "") {
            document.getElementById("regexDescripcioError").innerHTML = "*La descripció és necessaria";
            document.getElementById("regexDescripcioError").style.display = "block";
            regex = false;
        } else {
            document.getElementById("regexDescripcioError").style.display = "none";
        }
        */

        if (regex) {
            document.getElementById("contactFormSubmitBtn").disabled = true; // Disable submit button

            const fd = new FormData();
            
            fd.append('nom', this.refs.contactNom.value);
            fd.append('telf', this.refs.contactTelf.value);
            fd.append('email', this.refs.contactEmail.value);
            fd.append('descripcio', this.refs.contactDescripcio.value);

            // Comprovacions zona públic
            
            if (this.refs.zona_public_illuminacio.checked) {
                fd.append('zona_public_illuminacio', 'Si');
            } else {
                fd.append('zona_public_illuminacio', '');
            }

            if (this.refs.zona_public_preses_corrent.checked) {
                fd.append('zona_public_preses_corrent', 'Si');
            } else {
                fd.append('zona_public_preses_corrent', '');
            }

            if (this.refs.zona_public_dades_ordinador.checked) {
                fd.append('zona_public_dades_ordinador', 'Si');
            } else {
                fd.append('zona_public_dades_ordinador', '');
            }

            if (this.refs.zona_public_calefaccio.checked) {
                fd.append('zona_public_calefaccio', 'Si');
            } else {
                fd.append('zona_public_calefaccio', '');
            }

            if (this.refs.zona_public_pintura.checked) {
                fd.append('zona_public_pintura', 'Si');
            } else {
                fd.append('zona_public_pintura', '');
            }

            if (this.refs.zona_public_aire_condicionat.checked) {
                fd.append('zona_public_aire_condicionat', 'Si');
            } else {
                fd.append('zona_public_aire_condicionat', '');
            }

            // Comprovacions mostrador individual

            if (this.refs.mostrador_individual_illuminacio.checked) {
                fd.append('mostrador_individual_illuminacio', 'Si');
            } else {
                fd.append('mostrador_individual_illuminacio', '');
            }

            if (this.refs.mostrador_individual_preses_corrent.checked) {
                fd.append('mostrador_individual_preses_corrent', 'Si');
            } else {
                fd.append('mostrador_individual_preses_corrent', '');
            }

            if (this.refs.mostrador_individual_dades_ordinador.checked) {
                fd.append('mostrador_individual_dades_ordinador', 'Si');
            } else {
                fd.append('mostrador_individual_dades_ordinador', '');
            }

            if (this.refs.mostrador_individual_pintura.checked) {
                fd.append('mostrador_individual_pintura', 'Si');
            } else {
                fd.append('mostrador_individual_pintura', '');
            }

            // Comprovacions zona cuina

            if (this.refs.zona_cuina_illuminacio.checked) {
                fd.append('zona_cuina_illuminacio', 'Si');
            } else {
                fd.append('zona_cuina_illuminacio', '');
            }

            if (this.refs.zona_cuina_preses_corrent.checked) {
                fd.append('zona_cuina_preses_corrent', 'Si');
            } else {
                fd.append('zona_cuina_preses_corrent', '');
            }

            if (this.refs.zona_cuina_aigua.checked) {
                fd.append('zona_cuina_aigua', 'Si');
            } else {
                fd.append('zona_cuina_aigua', '');
            }

            if (this.refs.zona_cuina_gas.checked) {
                fd.append('zona_cuina_gas', 'Si');
            } else {
                fd.append('zona_cuina_gas', '');
            }

            if (this.refs.zona_cuina_calefaccio.checked) {
                fd.append('zona_cuina_calefaccio', 'Si');
            } else {
                fd.append('zona_cuina_calefaccio', '');
            }

            if (this.refs.zona_cuina_pintura.checked) {
                fd.append('zona_cuina_pintura', 'Si');
            } else {
                fd.append('zona_cuina_pintura', '');
            }

            if (this.refs.zona_cuina_aire_condicionat.checked) {
                fd.append('zona_cuina_aire_condicionat', 'Si');
            } else {
                fd.append('zona_cuina_aire_condicionat', '');
            }

            // Comprovacions magatzem

            if (this.refs.magatzem_illuminacio.checked) {
                fd.append('magatzem_illuminacio', 'Si');
            } else {
                fd.append('magatzem_illuminacio', '');
            }

            if (this.refs.magatzem_preses_corrent.checked) {
                fd.append('magatzem_preses_corrent', 'Si');
            } else {
                fd.append('magatzem_preses_corrent', '');
            }

            if (this.refs.magatzem_dades_ordinador.checked) {
                fd.append('magatzem_dades_ordinador', 'Si');
            } else {
                fd.append('magatzem_dades_ordinador', '');
            }

            if (this.refs.magatzem_pintura.checked) {
                fd.append('magatzem_pintura', 'Si');
            } else {
                fd.append('magatzem_pintura', '');
            }

            // Comprovacions bany

            if (this.refs.bany_illuminacio.checked) {
                fd.append('bany_illuminacio', 'Si');
            } else {
                fd.append('bany_illuminacio', '');
            }

            if (this.refs.bany_preses_corrent.checked) {
                fd.append('bany_preses_corrent', 'Si');
            } else {
                fd.append('bany_preses_corrent', '');
            }

            if (this.refs.bany_aigua.checked) {
                fd.append('bany_aigua', 'Si');
            } else {
                fd.append('bany_aigua', '');
            }

            if (this.refs.bany_pintura.checked) {
                fd.append('bany_pintura', 'Si');
            } else {
                fd.append('bany_pintura', '');
            }

            // Comprovacions aigua calenta sanitaria (ACS)

            if (this.refs.acs_aigua.checked) {
                fd.append('acs_aigua', 'Si');
            } else {
                fd.append('acs_aigua', '');
            }

            if (this.refs.acs_gas.checked) {
                fd.append('acs_gas', 'Si');
            } else {
                fd.append('acs_gas', '');
            }

            // Comprovacions videoporter

            if (this.refs.videoporter_illuminacio.checked) {
                fd.append('videoporter_illuminacio', 'Si');
            } else {
                fd.append('videoporter_illuminacio', '');
            }

            // Comprovacions persiana eléctrica (només part elèctrica)

            if (this.refs.persiana_electrica_illuminacio.checked) {
                fd.append('persiana_electrica_illuminacio', 'Si');
            } else {
                fd.append('persiana_electrica_illuminacio', '');
            }

            console.log(fd);
            
            // axios.post('api/send/email', fd);

            axios.post('api/send/commercialPremisesBudget', fd).then(res=>
                {  
                    document.getElementById("contactFormSubmitBtn").disabled = false;
                    
                    console.log(res);
                    console.log(res.data);
                    this.myFormRef.reset();
                    
                    /*
                    if (response.data.success==true) {
                        alert(response.data.message)
                        // cargar datos de nuevo
                        // this.loadDataProduct()
                        // $("#exampleModal").modal("hide");
                    }
                    */

                    //alertify.set('notifier','position', 'top-right');
                    //alertify.success('Current position : ' + alertify.get('notifier','position'));
                    
                    //alertify.set('notifier','delay', 10);
                    //alertify.set('notifier','position', 'top-right');
                    //alertify.success('Email enviat, ens posarem en contacte amb tu el més aviat possible!');
                }
            );

            /*
            .then(res=>
            {
                console.log(res.data);
                this.myFormRef.reset();
                //Success Message in Sweetalert modal
                Swal.fire({
                    title: 'Hurray!!',
                    text: "Mail has been send successfully.",
                    type: 'success',
                    
                });
            
            }
            );*/
        }
    }

    formButton(e) {
        
        // alert(className);

        if (e === "vivenda") {
            ReactDOM.render(<Pressupost />, document.getElementById("index"));
            //document.getElementById("pressupostBody").innerHTML = "";
            
            /*return(
                <div dangerouslySetInnerHTML={{ __html: `This text is set using dangerouslySetInnerHTML` }}>    
                </div>
            )*/
            
            //console.log(<div dangerouslySetInnerHTML={{ __html: vivenda }} />);
            //document.getElementById("pressupostBody").insertAdjacentElement = <div dangerouslySetInnerHTML={{ __html: vivenda }} />;
            //document.getElementById("pressupostBody").insertAdjacentHTML('beforeend', vivenda);
        }
        if (e === "localComercial") {
            ReactDOM.render(<PressupostLocalComercial />, document.getElementById("index"));
            //document.getElementById("pressupostBody").innerHTML = "";
            //document.getElementById("pressupostBody").insertAdjacentHTML('beforeend', localComercial);
        }

        //ReactDOM.render(<Pressupost />, document.getElementById("pressupostBody"));
        
    }

    // <button className="switchButtons vivenda">X</button>
    // <button className="switchButtons vivenda">Z</button>

    render() {

        const { budgetCost } = this.state;

        return (
            <div>
                <Header/>
                <div className="headerMargin"></div>
                <section>
                    <div className="sectionMargin">
                        <div className="container">
                            <div className="switchButtons">
                                <button className="btn btn-jma vivenda" align="center" onClick={() => this.formButton("vivenda")}>Vivenda</button>
                                <button className="btn btn-jma localComercial" align="center" onClick={() => this.formButton("localComercial")}>Local Comercial</button>
                            </div>
                            <div className="notificationContainer">
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    Cal tenir present que aquest pressupost és aproximat.
                                    Per fer-lo més precís i, d’acord amb els gustos i necessitats vostres, és preferible fer una visita, contactan's <strong><a href="/contacte">aquí</a></strong>.
                                    <p>Recordem que la visita <strong>NO</strong> te cap cost.</p>

                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div id="pressupostForm">
                                <form ref={(el) => this.myFormRef = el}>
                                    <div id="pressupostBody">
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        Zona al públic
                                                    </button>
                                                    </h5>
                                                </div>
                                                
                                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                    
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Il·luminació</span>
                                                                    <input type="checkbox" value="800" ref="zona_public_illuminacio"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Preses corrent</span>
                                                                    <input type="checkbox" value="360" ref="zona_public_preses_corrent"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Dades ordinador</span>
                                                                    <input type="checkbox" value="160" ref="zona_public_dades_ordinador"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Calefacció</span>
                                                                    <input type="checkbox" value="780" ref="zona_public_calefaccio"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Pintura</span>
                                                                    <input type="checkbox" value="1525" ref="zona_public_pintura"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Aire condicionat</span>
                                                                    <input type="checkbox" value="3000" ref="zona_public_aire_condicionat"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Mostrador individual
                                                    </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Il·luminació</span>
                                                                    <input type="checkbox" value="100" ref="mostrador_individual_illuminacio"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Preses corrent</span>
                                                                    <input type="checkbox" value="240" ref="mostrador_individual_preses_corrent"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Dades ordinador</span>
                                                                    <input type="checkbox" value="240" ref="mostrador_individual_dades_ordinador"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Pintura</span>
                                                                    <input type="checkbox" value="150" ref="mostrador_individual_pintura"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                        Zona cuina
                                                    </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Il·luminació</span>
                                                                    <input type="checkbox" value="100" ref="zona_cuina_illuminacio"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Preses corrent</span>
                                                                    <input type="checkbox" value="320" ref="zona_cuina_preses_corrent"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Aigua</span>
                                                                    <input type="checkbox" value="220" ref="zona_cuina_aigua"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Gas</span>
                                                                    <input type="checkbox" value="320" ref="zona_cuina_gas"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Calefacció</span>
                                                                    <input type="checkbox" value="190" ref="zona_cuina_calefaccio"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Pintura</span>
                                                                    <input type="checkbox" value="225" ref="zona_cuina_pintura"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Aire condicionat</span>
                                                                    <input type="checkbox" value="1500" ref="zona_cuina_aire_condicionat"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="headingFour">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                        Magatzem
                                                    </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Il·luminació</span>
                                                                    <input type="checkbox" value="250" ref="magatzem_illuminacio"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Preses corrent</span>
                                                                    <input type="checkbox" value="240" ref="magatzem_preses_corrent"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Dades ordinador</span>
                                                                    <input type="checkbox" value="80" ref="magatzem_dades_ordinador"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Pintura</span>
                                                                    <input type="checkbox" value="675" ref="magatzem_pintura"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="headingFive">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                        Bany
                                                    </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Il·luminació</span>
                                                                    <input type="checkbox" value="60" ref="bany_illuminacio"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Preses corrent</span>
                                                                    <input type="checkbox" value="40" ref="bany_preses_corrent"/>
                                                                </td>
                                                            </tr>

                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Aigua</span>
                                                                    <input type="checkbox" value="280" ref="bany_aigua"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Pintura</span>
                                                                    <input type="checkbox" value="450" ref="bany_pintura"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="headingSix">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                        Aigua Calenta Sanitaria (ACS)
                                                    </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Aigua</span>
                                                                    <input type="checkbox" value="680" ref="acs_aigua"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Gas</span>
                                                                    <input type="checkbox" value="780" ref="acs_gas"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="headingSeven">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                        Videoporter
                                                    </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Il·luminació</span>
                                                                    <input type="checkbox" value="320" ref="videoporter_illuminacio"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="headingEight">
                                                    <h5 className="mb-0">
                                                    <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                                        Persiana eléctrica (només part elèctrica)
                                                    </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    </div>

                                                    <table>
                                                        <tbody className="pressupostLocal row">
                                                            <tr className="pressupostLocal col-lg-6 col-12">
                                                                <td>
                                                                    <span>Il·luminació</span>
                                                                    <input type="checkbox" value="380" ref="persiana_electrica_illuminacio"/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-price">
                                        <div className="card-body">
                                            <p>Cost total</p>
                                            <h1>{ this.state.budgetCost } €</h1>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="contactNom" placeholder="Nom*" ref="contactNom" />
                                        <span id="regexNameError" className="regexError" style={{display: 'none' }}></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="contactTelf" placeholder="Telèfon*" ref="contactTelf" />
                                        <span id="regexTelfError" className="regexError" style={{display: 'none' }}></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="contactEmail" aria-describedby="emailHelp" placeholder="Email*" ref="contactEmail" />
                                        <span id="regexEmailError" className="regexError" style={{display: 'none' }}></span>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="contactDescripcio" placeholder="Què necessites?*" ref="contactDescripcio"></textarea>
                                        <span id="regexDescripcioError" className="regexError" style={{display: 'none' }}></span>
                                    </div>
                                    <div className="form-btn">
                                        <button id="contactFormSubmitBtn" type="submit" className="btn btn-jma" onClick={this.addFormData}>Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PressupostLocalComercial;