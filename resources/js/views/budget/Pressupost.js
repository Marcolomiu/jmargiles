import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import axios from 'axios';
import parse from 'html-react-parser';
import pressupostVivenda from './PressupostVivenda';
import pressupostLocalComercial from './PressupostLocalComercial';

//import './header.css';

/*
const myelement = `<div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Cuina
                                </button>
                                </h5>
                            </div>
                            
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th>Qualitat 1</th>
                                            <th>Qualitat 2</th>
                                            <th>Qualitat 3</th>
                                        </tr>
                                        <tr>
                                            <th>Sostres alumini:</th>
                                            <td><input type="radio" name="cuina_group16" value="q1"/></td>
                                            <td><input type="radio" name="cuina_group16" value="q2"/></td>
                                            <td><input type="radio" name="cuina_group16" value="q3"/></td>
                                        </tr>

                                        <tr>
                                            <th>Alicatat:</th>
                                            <td><input type="radio" name="cuina_group17" value="q1"/></td>
                                            <td><input type="radio" name="cuina_group17" value="q2"/></td>
                                            <td><input type="radio" name="cuina_group17" value="q3"/></td>
                                        </tr>

                                        <tr>
                                            <th>Pintura:</th>
                                            <td><input type="radio" name="cuina_group18" value="q1"/></td>
                                            <td><input type="radio" name="cuina_group18" value="q2"/></td>
                                            <td><input type="radio" name="cuina_group18" value="q3"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </button>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                    </div>`;
*/

// const myelement = <div dangerouslySetInnerHTML={{ __html: pressupostVivenda.formulari }} />;
// const myelement1 = <div dangerouslySetInnerHTML={{ __html: pressupostLocalComercial.formulari }} />;

const myelement = pressupostVivenda.formulari;
const myelement1 = pressupostLocalComercial.formulari;

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

class Pressupost extends React.Component {

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
        console.log(x);

        while(x--) {
            if(inputs[x].type === "radio") {
                inputs[x].addEventListener("change", function() {
                    console.log("Checked: " + this.checked);
                    console.log("Name: " + this.name);
                    console.log("Value: " + this.value);
                    console.log("Parent: " + this.parent);
                    console.log(" ");
                    console.log(" ");
                    console.log(" ");
                    
                    let auxBudgetCost = 0;

                    let inputsAux = document.getElementsByTagName("input"),
                    y = inputsAux.length;
                    console.log(y);

                    while(y--) {
                        if(inputsAux[y].type === "radio") {
                            //inputsAux[y].addEventListener("change", function() {
                                if (inputsAux[y].checked === true) {
                                    auxBudgetCost += Number(inputsAux[y].value);
                                    console.log("Value: " + inputsAux[y].value);
                                    console.log(" ");
                                }
                            //},0);
                        }
                    }
                    console.log("Cost total: " + auxBudgetCost);

                    this.setState({ budgetCost: auxBudgetCost })

                    console.log(" ");
                    console.log(" ");
                    console.log(this.props.budgetCost);
                    console.log(" ");
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

        if (this.refs.contactDescripcio.value === null || this.refs.contactDescripcio.value === "") {
            document.getElementById("regexDescripcioError").innerHTML = "*La descripció és necessaria";
            document.getElementById("regexDescripcioError").style.display = "block";
            regex = false;
        } else {
            document.getElementById("regexDescripcioError").style.display = "none";
        }

        if (regex) {
            document.getElementById("contactFormSubmitBtn").disabled = true;

            const fd = new FormData();
            
            fd.append('nom', this.refs.contactNom.value);
            fd.append('telf', this.refs.contactTelf.value);
            fd.append('email', this.refs.contactEmail.value);
            fd.append('descripcio', this.refs.contactDescripcio.value);

            // Comprovacions cuina
            
            if (this.refs.cuina_electricitat_q1.checked) {
                fd.append('cuina_electricitat', 'q1');
            } else {
                if (this.refs.cuina_electricitat_q2.checked) {
                    fd.append('cuina_electricitat', 'q2');
                } else {
                    if (this.refs.cuina_electricitat_q3.checked) {
                        fd.append('cuina_electricitat', 'q3');
                    } else {
                        fd.append('cuina_electricitat', '');
                    }
                }
            }

            if (this.refs.cuina_aigua_q1.checked) {
                fd.append('cuina_aigua', 'q1');
            } else {
                if (this.refs.cuina_aigua_q2.checked) {
                    fd.append('cuina_aigua', 'q2');
                } else {
                    if (this.refs.cuina_aigua_q3.checked) {
                        fd.append('cuina_aigua', 'q3');
                    } else {
                        fd.append('cuina_aigua', '');
                    }
                }
            }

            if (this.refs.cuina_gas_q1.checked) {
                fd.append('cuina_gas', 'q1');
            } else {
                if (this.refs.cuina_gas_q2.checked) {
                    fd.append('cuina_gas', 'q2');
                } else {
                    if (this.refs.cuina_gas_q3.checked) {
                        fd.append('cuina_gas', 'q3');
                    } else {
                        fd.append('cuina_gas', '');
                    }
                }
            }

            if (this.refs.cuina_mobles240_q1.checked) {
                fd.append('cuina_mobles240', 'q1');
            } else {
                if (this.refs.cuina_mobles240_q2.checked) {
                    fd.append('cuina_mobles240', 'q2');
                } else {
                    if (this.refs.cuina_mobles240_q3.checked) {
                        fd.append('cuina_mobles240', 'q3');
                    } else {
                        fd.append('cuina_mobles240', '');
                    }
                }
            }

            if (this.refs.cuina_encimera_gas_q1.checked) {
                fd.append('cuina_encimera_gas', 'q1');
            } else {
                if (this.refs.cuina_encimera_gas_q2.checked) {
                    fd.append('cuina_encimera_gas', 'q2');
                } else {
                    if (this.refs.cuina_encimera_gas_q3.checked) {
                        fd.append('cuina_encimera_gas', 'q3');
                    } else {
                        fd.append('cuina_encimera_gas', '');
                    }
                }
            }

            if (this.refs.cuina_encimera_vitroceramica_q1.checked) {
                fd.append('cuina_encimera_vitroceramica', 'q1');
            } else {
                if (this.refs.cuina_encimera_vitroceramica_q2.checked) {
                    fd.append('cuina_encimera_vitroceramica', 'q2');
                } else {
                    if (this.refs.cuina_encimera_vitroceramica_q3.checked) {
                        fd.append('cuina_encimera_vitroceramica', 'q3');
                    } else {
                        fd.append('cuina_encimera_vitroceramica', '');
                    }
                }
            }

            if (this.refs.cuina_encimera_induccio_q1.checked) {
                fd.append('cuina_encimera_induccio', 'q1');
            } else {
                if (this.refs.cuina_encimera_induccio_q2.checked) {
                    fd.append('cuina_encimera_induccio', 'q2');
                } else {
                    if (this.refs.cuina_encimera_induccio_q3.checked) {
                        fd.append('cuina_encimera_induccio', 'q3');
                    } else {
                        fd.append('cuina_encimera_induccio', '');
                    }
                }
            }

            if (this.refs.cuina_rentaplats_q1.checked) {
                fd.append('cuina_rentaplats', 'q1');
            } else {
                if (this.refs.cuina_rentaplats_q2.checked) {
                    fd.append('cuina_rentaplats', 'q2');
                } else {
                    if (this.refs.cuina_rentaplats_q3.checked) {
                        fd.append('cuina_rentaplats', 'q3');
                    } else {
                        fd.append('cuina_rentaplats', '');
                    }
                }
            }

            if (this.refs.cuina_forn_q1.checked) {
                fd.append('cuina_forn', 'q1');
            } else {
                if (this.refs.cuina_forn_q2.checked) {
                    fd.append('cuina_forn', 'q2');
                } else {
                    if (this.refs.cuina_forn_q3.checked) {
                        fd.append('cuina_forn', 'q3');
                    } else {
                        fd.append('cuina_forn', '');
                    }
                }
            }

            if (this.refs.cuina_fregadora_q1.checked) {
                fd.append('cuina_fregadora', 'q1');
            } else {
                if (this.refs.cuina_fregadora_q2.checked) {
                    fd.append('cuina_fregadora', 'q2');
                } else {
                    if (this.refs.cuina_fregadora_q3.checked) {
                        fd.append('cuina_fregadora', 'q3');
                    } else {
                        fd.append('cuina_fregadora', '');
                    }
                }
            }

            if (this.refs.cuina_campana_q1.checked) {
                fd.append('cuina_campana', 'q1');
            } else {
                if (this.refs.cuina_campana_q2.checked) {
                    fd.append('cuina_campana', 'q2');
                } else {
                    if (this.refs.cuina_campana_q3.checked) {
                        fd.append('cuina_campana', 'q3');
                    } else {
                        fd.append('cuina_campana', '');
                    }
                }
            }

            if (this.refs.cuina_aixeta_q1.checked) {
                fd.append('cuina_aixeta', 'q1');
            } else {
                if (this.refs.cuina_aixeta_q2.checked) {
                    fd.append('cuina_aixeta', 'q2');
                } else {
                    if (this.refs.cuina_aixeta_q3.checked) {
                        fd.append('cuina_aixeta', 'q3');
                    } else {
                        fd.append('cuina_aixeta', '');
                    }
                }
            }

            if (this.refs.cuina_rentadora_q1.checked) {
                fd.append('cuina_rentadora', 'q1');
            } else {
                if (this.refs.cuina_rentadora_q2.checked) {
                    fd.append('cuina_rentadora', 'q2');
                } else {
                    if (this.refs.cuina_rentadora_q3.checked) {
                        fd.append('cuina_rentadora', 'q3');
                    } else {
                        fd.append('cuina_rentadora', '');
                    }
                }
            }

            if (this.refs.cuina_caldera_q1.checked) {
                fd.append('cuina_caldera', 'q1');
            } else {
                if (this.refs.cuina_caldera_q2.checked) {
                    fd.append('cuina_caldera', 'q2');
                } else {
                    if (this.refs.cuina_caldera_q3.checked) {
                        fd.append('cuina_caldera', 'q3');
                    } else {
                        fd.append('cuina_caldera', '');
                    }
                }
            }

            if (this.refs.cuina_sostre_pladur_q1.checked) {
                fd.append('cuina_sostre_pladur', 'q1');
            } else {
                if (this.refs.cuina_sostre_pladur_q2.checked) {
                    fd.append('cuina_sostre_pladur', 'q2');
                } else {
                    if (this.refs.cuina_sostre_pladur_q3.checked) {
                        fd.append('cuina_sostre_pladur', 'q3');
                    } else {
                        fd.append('cuina_sostre_pladur', '');
                    }
                }
            }

            if (this.refs.cuina_sostre_alumini_q1.checked) {
                fd.append('cuina_sostre_alumini', 'q1');
            } else {
                if (this.refs.cuina_sostre_alumini_q2.checked) {
                    fd.append('cuina_sostre_alumini', 'q2');
                } else {
                    if (this.refs.cuina_sostre_alumini_q3.checked) {
                        fd.append('cuina_sostre_alumini', 'q3');
                    } else {
                        fd.append('cuina_sostre_alumini', '');
                    }
                }
            }

            if (this.refs.cuina_alicatat_q1.checked) {
                fd.append('cuina_alicatat', 'q1');
            } else {
                if (this.refs.cuina_alicatat_q2.checked) {
                    fd.append('cuina_alicatat', 'q2');
                } else {
                    if (this.refs.cuina_alicatat_q3.checked) {
                        fd.append('cuina_alicatat', 'q3');
                    } else {
                        fd.append('cuina_alicatat', '');
                    }
                }
            }
            
            if (this.refs.cuina_pintura_q1.checked) {
                fd.append('cuina_pintura', 'q1');
            } else {
                if (this.refs.cuina_pintura_q2.checked) {
                    fd.append('cuina_pintura', 'q2');
                } else {
                    if (this.refs.cuina_pintura_q3.checked) {
                        fd.append('cuina_pintura', 'q3');
                    } else {
                        fd.append('cuina_pintura', '');
                    }
                }
            }

            // Comprovacions bany 1

            if (this.refs.bany1_electricitat_q1.checked) {
                fd.append('bany1_electricitat', 'q1');
            } else {
                if (this.refs.bany1_electricitat_q2.checked) {
                    fd.append('bany1_electricitat', 'q2');
                } else {
                    if (this.refs.bany1_electricitat_q3.checked) {
                        fd.append('bany1_electricitat', 'q3');
                    } else {
                        fd.append('bany1_electricitat', '');
                    }
                }
            }

            if (this.refs.bany1_aigua_q1.checked) {
                fd.append('bany1_aigua', 'q1');
            } else {
                if (this.refs.bany1_aigua_q2.checked) {
                    fd.append('bany1_aigua', 'q2');
                } else {
                    if (this.refs.bany1_aigua_q3.checked) {
                        fd.append('bany1_aigua', 'q3');
                    } else {
                        fd.append('bany1_aigua', '');
                    }
                }
            }

            if (this.refs.bany1_moble_rentamans_q1.checked) {
                fd.append('bany1_moble_rentamans', 'q1');
            } else {
                if (this.refs.bany1_moble_rentamans_q2.checked) {
                    fd.append('bany1_moble_rentamans', 'q2');
                } else {
                    if (this.refs.bany1_moble_rentamans_q3.checked) {
                        fd.append('bany1_moble_rentamans', 'q3');
                    } else {
                        fd.append('bany1_moble_rentamans', '');
                    }
                }
            }

            if (this.refs.bany1_rentamans_q1.checked) {
                fd.append('bany1_rentamans', 'q1');
            } else {
                if (this.refs.bany1_rentamans_q2.checked) {
                    fd.append('bany1_rentamans', 'q2');
                } else {
                    if (this.refs.bany1_rentamans_q3.checked) {
                        fd.append('bany1_rentamans', 'q3');
                    } else {
                        fd.append('bany1_rentamans', '');
                    }
                }
            }

            if (this.refs.bany1_mirall_q1.checked) {
                fd.append('bany1_mirall', 'q1');
            } else {
                if (this.refs.bany1_mirall_q2.checked) {
                    fd.append('bany1_mirall', 'q2');
                } else {
                    if (this.refs.bany1_mirall_q3.checked) {
                        fd.append('bany1_mirall', 'q3');
                    } else {
                        fd.append('bany1_mirall', '');
                    }
                }
            }

            if (this.refs.bany1_mampara_banyera_q1.checked) {
                fd.append('bany1_mampara_banyera', 'q1');
            } else {
                if (this.refs.bany1_mampara_banyera_q2.checked) {
                    fd.append('bany1_mampara_banyera', 'q2');
                } else {
                    if (this.refs.bany1_mampara_banyera_q3.checked) {
                        fd.append('bany1_mampara_banyera', 'q3');
                    } else {
                        fd.append('bany1_mampara_banyera', '');
                    }
                }
            }

            if (this.refs.bany1_mampara_dutxa_q1.checked) {
                fd.append('bany1_mampara_dutxa', 'q1');
            } else {
                if (this.refs.bany1_mampara_dutxa_q2.checked) {
                    fd.append('bany1_mampara_dutxa', 'q2');
                } else {
                    if (this.refs.bany1_mampara_dutxa_q3.checked) {
                        fd.append('bany1_mampara_dutxa', 'q3');
                    } else {
                        fd.append('bany1_mampara_dutxa', '');
                    }
                }
            }

            if (this.refs.bany1_aixeta_dutxa_q1.checked) {
                fd.append('bany1_aixeta_dutxa', 'q1');
            } else {
                if (this.refs.bany1_aixeta_dutxa_q2.checked) {
                    fd.append('bany1_aixeta_dutxa', 'q2');
                } else {
                    if (this.refs.bany1_aixeta_dutxa_q3.checked) {
                        fd.append('bany1_aixeta_dutxa', 'q3');
                    } else {
                        fd.append('bany1_aixeta_dutxa', '');
                    }
                }
            }

            if (this.refs.bany1_aixeta_bany_q1.checked) {
                fd.append('bany1_aixeta_bany', 'q1');
            } else {
                if (this.refs.bany1_aixeta_bany_q2.checked) {
                    fd.append('bany1_aixeta_bany', 'q2');
                } else {
                    if (this.refs.bany1_aixeta_bany_q3.checked) {
                        fd.append('bany1_aixeta_bany', 'q3');
                    } else {
                        fd.append('bany1_aixeta_bany', '');
                    }
                }
            }

            if (this.refs.bany1_accesoris_bany_q1.checked) {
                fd.append('bany1_accesoris_bany', 'q1');
            } else {
                if (this.refs.bany1_accesoris_bany_q2.checked) {
                    fd.append('bany1_accesoris_bany', 'q2');
                } else {
                    if (this.refs.bany1_accesoris_bany_q3.checked) {
                        fd.append('bany1_accesoris_bany', 'q3');
                    } else {
                        fd.append('bany1_accesoris_bany', '');
                    }
                }
            }

            if (this.refs.bany1_tovalloler_q1.checked) {
                fd.append('bany1_tovalloler', 'q1');
            } else {
                if (this.refs.bany1_tovalloler_q2.checked) {
                    fd.append('bany1_tovalloler', 'q2');
                } else {
                    if (this.refs.bany1_tovalloler_q3.checked) {
                        fd.append('bany1_tovalloler', 'q3');
                    } else {
                        fd.append('bany1_tovalloler', '');
                    }
                }
            }

            if (this.refs.bany1_wc_q1.checked) {
                fd.append('bany1_wc', 'q1');
            } else {
                if (this.refs.bany1_wc_q2.checked) {
                    fd.append('bany1_wc', 'q2');
                } else {
                    if (this.refs.bany1_wc_q3.checked) {
                        fd.append('bany1_wc', 'q3');
                    } else {
                        fd.append('bany1_wc', '');
                    }
                }
            }

            if (this.refs.bany1_bidet_q1.checked) {
                fd.append('bany1_bidet', 'q1');
            } else {
                if (this.refs.bany1_bidet_q2.checked) {
                    fd.append('bany1_bidet', 'q2');
                } else {
                    if (this.refs.bany1_bidet_q3.checked) {
                        fd.append('bany1_bidet', 'q3');
                    } else {
                        fd.append('bany1_bidet', '');
                    }
                }
            }

            if (this.refs.bany1_banyera_q1.checked) {
                fd.append('bany1_banyera', 'q1');
            } else {
                if (this.refs.bany1_banyera_q2.checked) {
                    fd.append('bany1_banyera', 'q2');
                } else {
                    if (this.refs.bany1_banyera_q3.checked) {
                        fd.append('bany1_banyera', 'q3');
                    } else {
                        fd.append('bany1_banyera', '');
                    }
                }
            }

            if (this.refs.bany1_dutxa_q1.checked) {
                fd.append('bany1_dutxa', 'q1');
            } else {
                if (this.refs.bany1_dutxa_q2.checked) {
                    fd.append('bany1_dutxa', 'q2');
                } else {
                    if (this.refs.bany1_dutxa_q3.checked) {
                        fd.append('bany1_dutxa', 'q3');
                    } else {
                        fd.append('bany1_dutxa', '');
                    }
                }
            }

            if (this.refs.bany1_sostre_pladur_q1.checked) {
                fd.append('bany1_sostre_pladur', 'q1');
            } else {
                if (this.refs.bany1_sostre_pladur_q2.checked) {
                    fd.append('bany1_sostre_pladur', 'q2');
                } else {
                    if (this.refs.bany1_sostre_pladur_q3.checked) {
                        fd.append('bany1_sostre_pladur', 'q3');
                    } else {
                        fd.append('bany1_sostre_pladur', '');
                    }
                }
            }
            // MIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR
            if (this.refs.bany1_sostre_alumini_q1.checked) {
                fd.append('bany1_sostre_alumini', 'q1');
            } else {
                if (this.refs.bany1_sostre_alumini_q2.checked) {
                    fd.append('bany1_sostre_alumini', 'q2');
                } else {
                    if (this.refs.bany1_sostre_alumini_q3.checked) {
                        fd.append('bany1_sostre_alumini', 'q3');
                    } else {
                        fd.append('bany1_sostre_alumini', '');
                    }
                }
            }

            if (this.refs.bany1_alicatat_q1.checked) {
                fd.append('bany1_alicatat', 'q1');
            } else {
                if (this.refs.bany1_alicatat_q2.checked) {
                    fd.append('bany1_alicatat', 'q2');
                } else {
                    if (this.refs.bany1_alicatat_q3.checked) {
                        fd.append('bany1_alicatat', 'q3');
                    } else {
                        fd.append('bany1_alicatat', '');
                    }
                }
            }

            if (this.refs.bany1_pintura_q1.checked) {
                fd.append('bany1_pintura', 'q1');
            } else {
                if (this.refs.bany1_pintura_q2.checked) {
                    fd.append('bany1_pintura', 'q2');
                } else {
                    if (this.refs.bany1_pintura_q3.checked) {
                        fd.append('bany1_pintura', 'q3');
                    } else {
                        fd.append('bany1_pintura', '');
                    }
                }
            }

            // Comprovacions salo

            if (this.refs.salo_interruptors_endolls_q1.checked) {
                fd.append('salo_interruptors_endolls', 'q1');
            } else {
                if (this.refs.salo_interruptors_endolls_q2.checked) {
                    fd.append('salo_interruptors_endolls', 'q2');
                } else {
                    if (this.refs.salo_interruptors_endolls_q3.checked) {
                        fd.append('salo_interruptors_endolls', 'q3');
                    } else {
                        fd.append('salo_interruptors_endolls', '');
                    }
                }
            }

            if (this.refs.salo_tv_q1.checked) {
                fd.append('salo_tv', 'q1');
            } else {
                if (this.refs.salo_tv_q2.checked) {
                    fd.append('salo_tv', 'q2');
                } else {
                    if (this.refs.salo_tv_q3.checked) {
                        fd.append('salo_tv', 'q3');
                    } else {
                        fd.append('salo_tv', '');
                    }
                }
            }

            if (this.refs.salo_dades_internet_q1.checked) {
                fd.append('salo_dades_internet', 'q1');
            } else {
                if (this.refs.salo_dades_internet_q2.checked) {
                    fd.append('salo_dades_internet', 'q2');
                } else {
                    if (this.refs.salo_dades_internet_q3.checked) {
                        fd.append('salo_dades_internet', 'q3');
                    } else {
                        fd.append('salo_dades_internet', '');
                    }
                }
            }

            if (this.refs.salo_aire_condicionat_q1.checked) {
                fd.append('salo_aire_condicionat', 'q1');
            } else {
                if (this.refs.salo_aire_condicionat_q2.checked) {
                    fd.append('salo_aire_condicionat', 'q2');
                } else {
                    if (this.refs.salo_aire_condicionat_q3.checked) {
                        fd.append('salo_aire_condicionat', 'q3');
                    } else {
                        fd.append('salo_aire_condicionat', '');
                    }
                }
            }

            if (this.refs.salo_calefaccio_q1.checked) {
                fd.append('salo_calefaccio', 'q1');
            } else {
                if (this.refs.salo_calefaccio_q2.checked) {
                    fd.append('salo_calefaccio', 'q2');
                } else {
                    if (this.refs.salo_calefaccio_q3.checked) {
                        fd.append('salo_calefaccio', 'q3');
                    } else {
                        fd.append('salo_calefaccio', '');
                    }
                }
            }

            if (this.refs.salo_sostre_fals_q1.checked) {
                fd.append('salo_sostre_fals', 'q1');
            } else {
                if (this.refs.salo_sostre_fals_q2.checked) {
                    fd.append('salo_sostre_fals', 'q2');
                } else {
                    if (this.refs.salo_sostre_fals_q3.checked) {
                        fd.append('salo_sostre_fals', 'q3');
                    } else {
                        fd.append('salo_sostre_fals', '');
                    }
                }
            }

            if (this.refs.salo_pintura_q1.checked) {
                fd.append('salo_pintura', 'q1');
            } else {
                if (this.refs.salo_pintura_q2.checked) {
                    fd.append('salo_pintura', 'q2');
                } else {
                    if (this.refs.salo_pintura_q3.checked) {
                        fd.append('salo_pintura', 'q3');
                    } else {
                        fd.append('salo_pintura', '');
                    }
                }
            }

            // Comprovacions habitació matrimoni 1

            if (this.refs.hb_mat1_interruptors_endolls_q1.checked) {
                fd.append('hb_mat1_interruptors_endolls', 'q1');
            } else {
                if (this.refs.hb_mat1_interruptors_endolls_q2.checked) {
                    fd.append('hb_mat1_interruptors_endolls', 'q2');
                } else {
                    if (this.refs.hb_mat1_interruptors_endolls_q3.checked) {
                        fd.append('hb_mat1_interruptors_endolls', 'q3');
                    } else {
                        fd.append('hb_mat1_interruptors_endolls', '');
                    }
                }
            }

            if (this.refs.hb_mat1_tv_q1.checked) {
                fd.append('hb_mat1_tv', 'q1');
            } else {
                if (this.refs.hb_mat1_tv_q2.checked) {
                    fd.append('hb_mat1_tv', 'q2');
                } else {
                    if (this.refs.hb_mat1_tv_q3.checked) {
                        fd.append('hb_mat1_tv', 'q3');
                    } else {
                        fd.append('hb_mat1_tv', '');
                    }
                }
            }

            if (this.refs.hb_mat1_dades_internet_q1.checked) {
                fd.append('hb_mat1_dades_internet', 'q1');
            } else {
                if (this.refs.hb_mat1_dades_internet_q2.checked) {
                    fd.append('hb_mat1_dades_internet', 'q2');
                } else {
                    if (this.refs.hb_mat1_dades_internet_q3.checked) {
                        fd.append('hb_mat1_dades_internet', 'q3');
                    } else {
                        fd.append('hb_mat1_dades_internet', '');
                    }
                }
            }

            if (this.refs.hb_mat1_aire_condicionat_q1.checked) {
                fd.append('hb_mat1_aire_condicionat', 'q1');
            } else {
                if (this.refs.hb_mat1_aire_condicionat_q2.checked) {
                    fd.append('hb_mat1_aire_condicionat', 'q2');
                } else {
                    if (this.refs.hb_mat1_aire_condicionat_q3.checked) {
                        fd.append('hb_mat1_aire_condicionat', 'q3');
                    } else {
                        fd.append('hb_mat1_aire_condicionat', '');
                    }
                }
            }

            if (this.refs.hb_mat1_calefaccio_q1.checked) {
                fd.append('hb_mat1_calefaccio', 'q1');
            } else {
                if (this.refs.hb_mat1_calefaccio_q2.checked) {
                    fd.append('hb_mat1_calefaccio', 'q2');
                } else {
                    if (this.refs.hb_mat1_calefaccio_q3.checked) {
                        fd.append('hb_mat1_calefaccio', 'q3');
                    } else {
                        fd.append('hb_mat1_calefaccio', '');
                    }
                }
            }

            if (this.refs.hb_mat1_sostre_fals_q1.checked) {
                fd.append('hb_mat1_sostre_fals', 'q1');
            } else {
                if (this.refs.hb_mat1_sostre_fals_q2.checked) {
                    fd.append('hb_mat1_sostre_fals', 'q2');
                } else {
                    if (this.refs.hb_mat1_sostre_fals_q3.checked) {
                        fd.append('hb_mat1_sostre_fals', 'q3');
                    } else {
                        fd.append('hb_mat1_sostre_fals', '');
                    }
                }
            }

            if (this.refs.hb_mat1_pintura_q1.checked) {
                fd.append('hb_mat1_pintura', 'q1');
            } else {
                if (this.refs.hb_mat1_pintura_q2.checked) {
                    fd.append('hb_mat1_pintura', 'q2');
                } else {
                    if (this.refs.hb_mat1_pintura_q3.checked) {
                        fd.append('hb_mat1_pintura', 'q3');
                    } else {
                        fd.append('hb_mat1_pintura', '');
                    }
                }
            }

            // Comprovacions habitació individual 1

            if (this.refs.hb_ind1_interruptors_endolls_q1.checked) {
                fd.append('hb_ind1_interruptors_endolls', 'q1');
            } else {
                if (this.refs.hb_ind1_interruptors_endolls_q2.checked) {
                    fd.append('hb_ind1_interruptors_endolls', 'q2');
                } else {
                    if (this.refs.hb_ind1_interruptors_endolls_q3.checked) {
                        fd.append('hb_ind1_interruptors_endolls', 'q3');
                    } else {
                        fd.append('hb_ind1_interruptors_endolls', '');
                    }
                }
            }

            if (this.refs.hb_ind1_tv_q1.checked) {
                fd.append('hb_ind1_tv', 'q1');
            } else {
                if (this.refs.hb_ind1_tv_q2.checked) {
                    fd.append('hb_ind1_tv', 'q2');
                } else {
                    if (this.refs.hb_ind1_tv_q3.checked) {
                        fd.append('hb_ind1_tv', 'q3');
                    } else {
                        fd.append('hb_ind1_tv', '');
                    }
                }
            }

            if (this.refs.hb_ind1_dades_internet_q1.checked) {
                fd.append('hb_ind1_dades_internet', 'q1');
            } else {
                if (this.refs.hb_ind1_dades_internet_q2.checked) {
                    fd.append('hb_ind1_dades_internet', 'q2');
                } else {
                    if (this.refs.hb_ind1_dades_internet_q3.checked) {
                        fd.append('hb_ind1_dades_internet', 'q3');
                    } else {
                        fd.append('hb_ind1_dades_internet', '');
                    }
                }
            }

            if (this.refs.hb_ind1_aire_condicionat_q1.checked) {
                fd.append('hb_ind1_aire_condicionat', 'q1');
            } else {
                if (this.refs.hb_ind1_aire_condicionat_q2.checked) {
                    fd.append('hb_ind1_aire_condicionat', 'q2');
                } else {
                    if (this.refs.hb_ind1_aire_condicionat_q3.checked) {
                        fd.append('hb_ind1_aire_condicionat', 'q3');
                    } else {
                        fd.append('hb_ind1_aire_condicionat', '');
                    }
                }
            }

            if (this.refs.hb_ind1_calefaccio_q1.checked) {
                fd.append('hb_ind1_calefaccio', 'q1');
            } else {
                if (this.refs.hb_ind1_calefaccio_q2.checked) {
                    fd.append('hb_ind1_calefaccio', 'q2');
                } else {
                    if (this.refs.hb_ind1_calefaccio_q3.checked) {
                        fd.append('hb_ind1_calefaccio', 'q3');
                    } else {
                        fd.append('hb_ind1_calefaccio', '');
                    }
                }
            }

            if (this.refs.hb_ind1_sostre_fals_q1.checked) {
                fd.append('hb_ind1_sostre_fals', 'q1');
            } else {
                if (this.refs.hb_ind1_sostre_fals_q2.checked) {
                    fd.append('hb_ind1_sostre_fals', 'q2');
                } else {
                    if (this.refs.hb_ind1_sostre_fals_q3.checked) {
                        fd.append('hb_ind1_sostre_fals', 'q3');
                    } else {
                        fd.append('hb_ind1_sostre_fals', '');
                    }
                }
            }

            if (this.refs.hb_ind1_pintura_q1.checked) {
                fd.append('hb_ind1_pintura', 'q1');
            } else {
                if (this.refs.hb_ind1_pintura_q2.checked) {
                    fd.append('hb_ind1_pintura', 'q2');
                } else {
                    if (this.refs.hb_ind1_pintura_q3.checked) {
                        fd.append('hb_ind1_pintura', 'q3');
                    } else {
                        fd.append('hb_ind1_pintura', '');
                    }
                }
            }

            // Comprovacions habitació individual 2

            if (this.refs.hb_ind2_interruptors_endolls_q1.checked) {
                fd.append('hb_ind2_interruptors_endolls', 'q1');
            } else {
                if (this.refs.hb_ind2_interruptors_endolls_q2.checked) {
                    fd.append('hb_ind2_interruptors_endolls', 'q2');
                } else {
                    if (this.refs.hb_ind2_interruptors_endolls_q3.checked) {
                        fd.append('hb_ind2_interruptors_endolls', 'q3');
                    } else {
                        fd.append('hb_ind2_interruptors_endolls', '');
                    }
                }
            }

            if (this.refs.hb_ind2_tv_q1.checked) {
                fd.append('hb_ind2_tv', 'q1');
            } else {
                if (this.refs.hb_ind2_tv_q2.checked) {
                    fd.append('hb_ind2_tv', 'q2');
                } else {
                    if (this.refs.hb_ind2_tv_q3.checked) {
                        fd.append('hb_ind2_tv', 'q3');
                    } else {
                        fd.append('hb_ind2_tv', '');
                    }
                }
            }

            if (this.refs.hb_ind2_dades_internet_q1.checked) {
                fd.append('hb_ind2_dades_internet', 'q1');
            } else {
                if (this.refs.hb_ind2_dades_internet_q2.checked) {
                    fd.append('hb_ind2_dades_internet', 'q2');
                } else {
                    if (this.refs.hb_ind2_dades_internet_q3.checked) {
                        fd.append('hb_ind2_dades_internet', 'q3');
                    } else {
                        fd.append('hb_ind2_dades_internet', '');
                    }
                }
            }

            if (this.refs.hb_ind2_aire_condicionat_q1.checked) {
                fd.append('hb_ind2_aire_condicionat', 'q1');
            } else {
                if (this.refs.hb_ind2_aire_condicionat_q2.checked) {
                    fd.append('hb_ind2_aire_condicionat', 'q2');
                } else {
                    if (this.refs.hb_ind2_aire_condicionat_q3.checked) {
                        fd.append('hb_ind2_aire_condicionat', 'q3');
                    } else {
                        fd.append('hb_ind2_aire_condicionat', '');
                    }
                }
            }

            if (this.refs.hb_ind2_calefaccio_q1.checked) {
                fd.append('hb_ind2_calefaccio', 'q1');
            } else {
                if (this.refs.hb_ind2_calefaccio_q2.checked) {
                    fd.append('hb_ind2_calefaccio', 'q2');
                } else {
                    if (this.refs.hb_ind2_calefaccio_q3.checked) {
                        fd.append('hb_ind2_calefaccio', 'q3');
                    } else {
                        fd.append('hb_ind2_calefaccio', '');
                    }
                }
            }

            if (this.refs.hb_ind2_sostre_fals_q1.checked) {
                fd.append('hb_ind2_sostre_fals', 'q1');
            } else {
                if (this.refs.hb_ind2_sostre_fals_q2.checked) {
                    fd.append('hb_ind2_sostre_fals', 'q2');
                } else {
                    if (this.refs.hb_ind2_sostre_fals_q3.checked) {
                        fd.append('hb_ind2_sostre_fals', 'q3');
                    } else {
                        fd.append('hb_ind2_sostre_fals', '');
                    }
                }
            }

            if (this.refs.hb_ind2_pintura_q1.checked) {
                fd.append('hb_ind2_pintura', 'q1');
            } else {
                if (this.refs.hb_ind2_pintura_q2.checked) {
                    fd.append('hb_ind2_pintura', 'q2');
                } else {
                    if (this.refs.hb_ind2_pintura_q3.checked) {
                        fd.append('hb_ind2_pintura', 'q3');
                    } else {
                        fd.append('hb_ind2_pintura', '');
                    }
                }
            }

            // Comprovacions rebedor/passadis

            if (this.refs.rebedor_interruptors_endolls_q1.checked) {
                fd.append('rebedor_interruptors_endolls', 'q1');
            } else {
                if (this.refs.rebedor_interruptors_endolls_q2.checked) {
                    fd.append('rebedor_interruptors_endolls', 'q2');
                } else {
                    if (this.refs.rebedor_interruptors_endolls_q3.checked) {
                        fd.append('rebedor_interruptors_endolls', 'q3');
                    } else {
                        fd.append('rebedor_interruptors_endolls', '');
                    }
                }
            }

            if (this.refs.rebedor_calefaccio_q1.checked) {
                fd.append('rebedor_calefaccio', 'q1');
            } else {
                if (this.refs.rebedor_calefaccio_q2.checked) {
                    fd.append('rebedor_calefaccio', 'q2');
                } else {
                    if (this.refs.rebedor_calefaccio_q3.checked) {
                        fd.append('rebedor_calefaccio', 'q3');
                    } else {
                        fd.append('rebedor_calefaccio', '');
                    }
                }
            }

            if (this.refs.rebedor_sostre_fals_q1.checked) {
                fd.append('rebedor_sostre_fals', 'q1');
            } else {
                if (this.refs.rebedor_sostre_fals_q2.checked) {
                    fd.append('rebedor_sostre_fals', 'q2');
                } else {
                    if (this.refs.rebedor_sostre_fals_q3.checked) {
                        fd.append('rebedor_sostre_fals', 'q3');
                    } else {
                        fd.append('rebedor_sostre_fals', '');
                    }
                }
            }

            if (this.refs.rebedor_pintura_q1.checked) {
                fd.append('rebedor_pintura', 'q1');
            } else {
                if (this.refs.rebedor_pintura_q2.checked) {
                    fd.append('rebedor_pintura', 'q2');
                } else {
                    if (this.refs.rebedor_pintura_q3.checked) {
                        fd.append('rebedor_pintura', 'q3');
                    } else {
                        fd.append('rebedor_pintura', '');
                    }
                }
            }
            
            axios.post('http://127.0.0.1:8000/api/send/budget', fd
            ).then(res=>
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

    formButton(className) {
        
        // alert(className);

        if (className === "vivenda") {
            document.getElementById("pressupostForm").innerHTML = "";
            document.getElementById("pressupostForm").insertAdjacentHTML('beforeend', myelement);
        }
        if (className === "barRestaurant") {
            document.getElementById("pressupostForm").innerHTML = "";
            document.getElementById("pressupostForm").insertAdjacentHTML('beforeend', myelement1);
        }
        
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
                                <button className="btn btn-jma barRestaurant" align="center" onClick={() => this.formButton("barRestaurant")}>Local Comercial</button>
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
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Cuina
                                                </button>
                                                </h5>
                                            </div>
                                            
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                </div>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th></th>
                                                            <th>Qualitat 1</th>
                                                            <th>Qualitat 2</th>
                                                            <th>Qualitat 3</th>
                                                        </tr>

                                                        <tr>
                                                            <th>Electricitat:</th>
                                                            <td><input type="radio" name="cuina_group1" value="500" ref="cuina_electricitat_q1"/></td>
                                                            <td><input type="radio" name="cuina_group1" value="600" ref="cuina_electricitat_q2"/></td>
                                                            <td><input type="radio" name="cuina_group1" value="700" ref="cuina_electricitat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aigua:</th>
                                                            <td><input type="radio" name="cuina_group2" value="500" ref="cuina_aigua_q1"/></td>
                                                            <td><input type="radio" name="cuina_group2" value="600" ref="cuina_aigua_q2"/></td>
                                                            <td><input type="radio" name="cuina_group2" value="700" ref="cuina_aigua_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Gas:</th>
                                                            <td><input type="radio" name="cuina_group3" value="500" ref="cuina_gas_q1"/></td>
                                                            <td><input type="radio" name="cuina_group3" value="600" ref="cuina_gas_q2"/></td>
                                                            <td><input type="radio" name="cuina_group3" value="700" ref="cuina_gas_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Mobles 2,40m lineals:</th>
                                                            <td><input type="radio" name="cuina_group4" value="500" ref="cuina_mobles240_q1"/></td>
                                                            <td><input type="radio" name="cuina_group4" value="600" ref="cuina_mobles240_q2"/></td>
                                                            <td><input type="radio" name="cuina_group4" value="700" ref="cuina_mobles240_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Encimera gas:</th>
                                                            <td><input type="radio" name="cuina_group5" value="500" ref="cuina_encimera_gas_q1"/></td>
                                                            <td><input type="radio" name="cuina_group5" value="600" ref="cuina_encimera_gas_q2"/></td>
                                                            <td><input type="radio" name="cuina_group5" value="700" ref="cuina_encimera_gas_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Encimera vitroceràmica:</th>
                                                            <td><input type="radio" name="cuina_group6" value="150" ref="cuina_encimera_vitroceramica_q1"/></td>
                                                            <td><input type="radio" name="cuina_group6" value="230" ref="cuina_encimera_vitroceramica_q2"/></td>
                                                            <td><input type="radio" name="cuina_group6" value="250" ref="cuina_encimera_vitroceramica_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Encimera inducció:</th>
                                                            <td><input type="radio" name="cuina_group7" value="190" ref="cuina_encimera_induccio_q1"/></td>
                                                            <td><input type="radio" name="cuina_group7" value="240" ref="cuina_encimera_induccio_q2"/></td>
                                                            <td><input type="radio" name="cuina_group7" value="700" ref="cuina_encimera_induccio_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Rentaplats:</th>
                                                            <td><input type="radio" name="cuina_group8" value="220" ref="cuina_rentaplats_q1"/></td>
                                                            <td><input type="radio" name="cuina_group8" value="300" ref="cuina_rentaplats_q2"/></td>
                                                            <td><input type="radio" name="cuina_group8" value="550" ref="cuina_rentaplats_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Forn:</th>
                                                            <td><input type="radio" name="cuina_group9" value="250" ref="cuina_forn_q1"/></td>
                                                            <td><input type="radio" name="cuina_group9" value="300" ref="cuina_forn_q2"/></td>
                                                            <td><input type="radio" name="cuina_group9" value="400" ref="cuina_forn_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Fregadora:</th>
                                                            <td><input type="radio" name="cuina_group10" value="50" ref="cuina_fregadora_q1"/></td>
                                                            <td><input type="radio" name="cuina_group10" value="100" ref="cuina_fregadora_q2"/></td>
                                                            <td><input type="radio" name="cuina_group10" value="150" ref="cuina_fregadora_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Campana:</th>
                                                            <td><input type="radio" name="cuina_group11" value="70" ref="cuina_campana_q1"/></td>
                                                            <td><input type="radio" name="cuina_group11" value="150" ref="cuina_campana_q2"/></td>
                                                            <td><input type="radio" name="cuina_group11" value="200" ref="cuina_campana_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aixeta:</th>
                                                            <td><input type="radio" name="cuina_group12" value="45" ref="cuina_aixeta_q1"/></td>
                                                            <td><input type="radio" name="cuina_group12" value="70" ref="cuina_aixeta_q2"/></td>
                                                            <td><input type="radio" name="cuina_group12" value="100" ref="cuina_aixeta_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Rentadora:</th>
                                                            <td><input type="radio" name="cuina_group13" value="325" ref="cuina_rentadora_q1"/></td>
                                                            <td><input type="radio" name="cuina_group13" value="500" ref="cuina_rentadora_q2"/></td>
                                                            <td><input type="radio" name="cuina_group13" value="650" ref="cuina_rentadora_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Caldera:</th>
                                                            <td><input type="radio" name="cuina_group14" value="1400" ref="cuina_caldera_q1"/></td>
                                                            <td><input type="radio" name="cuina_group14" value="1800" ref="cuina_caldera_q2"/></td>
                                                            <td><input type="radio" name="cuina_group14" value="2000" ref="cuina_caldera_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostres pladur:</th>
                                                            <td><input type="radio" name="cuina_group15" value="225" ref="cuina_sostre_pladur_q1"/></td>
                                                            <td><input type="radio" name="cuina_group15" value="315" ref="cuina_sostre_pladur_q2"/></td>
                                                            <td><input type="radio" name="cuina_group15" value="405" ref="cuina_sostre_pladur_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostres alumini:</th>
                                                            <td><input type="radio" name="cuina_group16" value="315" ref="cuina_sostre_alumini_q1"/></td>
                                                            <td><input type="radio" name="cuina_group16" value="405" ref="cuina_sostre_alumini_q2"/></td>
                                                            <td><input type="radio" name="cuina_group16" value="495" ref="cuina_sostre_alumini_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Alicatat:</th>
                                                            <td><input type="radio" name="cuina_group17" value="900" ref="cuina_alicatat_q1"/></td>
                                                            <td><input type="radio" name="cuina_group17" value="1350" ref="cuina_alicatat_q2"/></td>
                                                            <td><input type="radio" name="cuina_group17" value="1650" ref="cuina_alicatat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Pintura:</th>
                                                            <td><input type="radio" name="cuina_group18" value="750" ref="cuina_pintura_q1"/></td>
                                                            <td><input type="radio" name="cuina_group18" value="850" ref="cuina_pintura_q2"/></td>
                                                            <td><input type="radio" name="cuina_group18" value="950" ref="cuina_pintura_q3"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Bany
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                </div>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th></th>
                                                            <th>Qualitat 1</th>
                                                            <th>Qualitat 2</th>
                                                            <th>Qualitat 3</th>
                                                        </tr>

                                                        <tr>
                                                            <th>Electricitat</th>
                                                            <td><input type="radio" name="bany1_group1" value="220" ref="bany1_electricitat_q1"/></td>
                                                            <td><input type="radio" name="bany1_group1" value="280" ref="bany1_electricitat_q2"/></td>
                                                            <td><input type="radio" name="bany1_group1" value="280" ref="bany1_electricitat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aigua</th>
                                                            <td><input type="radio" name="bany1_group2" value="180" ref="bany1_aigua_q1"/></td>
                                                            <td><input type="radio" name="bany1_group2" value="220" ref="bany1_aigua_q2"/></td>
                                                            <td><input type="radio" name="bany1_group2" value="260" ref="bany1_aigua_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Moble rentamans</th>
                                                            <td><input type="radio" name="bany1_group3" value="140" ref="bany1_moble_rentamans_q1"/></td>
                                                            <td><input type="radio" name="bany1_group3" value="250" ref="bany1_moble_rentamans_q2"/></td>
                                                            <td><input type="radio" name="bany1_group3" value="350" ref="bany1_moble_rentamans_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Rentamans</th>
                                                            <td><input type="radio" name="bany1_group4" value="60" ref="bany1_rentamans_q1"/></td>
                                                            <td><input type="radio" name="bany1_group4" value="90" ref="bany1_rentamans_q2"/></td>
                                                            <td><input type="radio" name="bany1_group4" value="120" ref="bany1_rentamans_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Mirall</th>
                                                            <td><input type="radio" name="bany1_group5" value="40" ref="bany1_mirall_q1"/></td>
                                                            <td><input type="radio" name="bany1_group5" value="60" ref="bany1_mirall_q2"/></td>
                                                            <td><input type="radio" name="bany1_group5" value="80" ref="bany1_mirall_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Mampara banyera</th>
                                                            <td><input type="radio" name="bany1_group6" value="80" ref="bany1_mampara_banyera_q1"/></td>
                                                            <td><input type="radio" name="bany1_group6" value="120" ref="bany1_mampara_banyera_q2"/></td>
                                                            <td><input type="radio" name="bany1_group6" value="190" ref="bany1_mampara_banyera_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Mampara dutxa</th>
                                                            <td><input type="radio" name="bany1_group7" value="90" ref="bany1_mampara_dutxa_q1"/></td>
                                                            <td><input type="radio" name="bany1_group7" value="140" ref="bany1_mampara_dutxa_q2"/></td>
                                                            <td><input type="radio" name="bany1_group7" value="230" ref="bany1_mampara_dutxa_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aixeta dutxa</th>
                                                            <td><input type="radio" name="bany1_group8" value="45" ref="bany1_aixeta_dutxa_q1"/></td>
                                                            <td><input type="radio" name="bany1_group8" value="75" ref="bany1_aixeta_dutxa_q2"/></td>
                                                            <td><input type="radio" name="bany1_group8" value="190" ref="bany1_aixeta_dutxa_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aixeta bany</th>
                                                            <td><input type="radio" name="bany1_group9" value="50" ref="bany1_aixeta_bany_q1"/></td>
                                                            <td><input type="radio" name="bany1_group9" value="85" ref="bany1_aixeta_bany_q2"/></td>
                                                            <td><input type="radio" name="bany1_group9" value="130" ref="bany1_aixeta_bany_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Accesoris bany</th>
                                                            <td><input type="radio" name="bany1_group10" value="45" ref="bany1_accesoris_bany_q1"/></td>
                                                            <td><input type="radio" name="bany1_group10" value="65" ref="bany1_accesoris_bany_q2"/></td>
                                                            <td><input type="radio" name="bany1_group10" value="85" ref="bany1_accesoris_bany_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Tovalloler</th>
                                                            <td><input type="radio" name="bany1_group11" value="45" ref="bany1_tovalloler_q1"/></td>
                                                            <td><input type="radio" name="bany1_group11" value="90" ref="bany1_tovalloler_q2"/></td>
                                                            <td><input type="radio" name="bany1_group11" value="130" ref="bany1_tovalloler_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>W.C.</th>
                                                            <td><input type="radio" name="bany1_group12" value="140" ref="bany1_wc_q1"/></td>
                                                            <td><input type="radio" name="bany1_group12" value="220" ref="bany1_wc_q2"/></td>
                                                            <td><input type="radio" name="bany1_group12" value="345" ref="bany1_wc_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Bidet</th>
                                                            <td><input type="radio" name="bany1_group13" value="65" ref="bany1_bidet_q1"/></td>
                                                            <td><input type="radio" name="bany1_group13" value="100" ref="bany1_bidet_q2"/></td>
                                                            <td><input type="radio" name="bany1_group13" value="140" ref="bany1_bidet_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Banyera</th>
                                                            <td><input type="radio" name="bany1_group14" value="80" ref="bany1_banyera_q1"/></td>
                                                            <td><input type="radio" name="bany1_group14" value="130" ref="bany1_banyera_q2"/></td>
                                                            <td><input type="radio" name="bany1_group14" value="470" ref="bany1_banyera_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Dutxa</th>
                                                            <td><input type="radio" name="bany1_group15" value="90" ref="bany1_dutxa_q1"/></td>
                                                            <td><input type="radio" name="bany1_group15" value="150" ref="bany1_dutxa_q2"/></td>
                                                            <td><input type="radio" name="bany1_group15" value="230" ref="bany1_dutxa_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostres pladur</th>
                                                            <td><input type="radio" name="bany1_group16" value="100" ref="bany1_sostre_pladur_q1"/></td>
                                                            <td><input type="radio" name="bany1_group16" value="180" ref="bany1_sostre_pladur_q2"/></td>
                                                            <td><input type="radio" name="bany1_group16" value="210" ref="bany1_sostre_pladur_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostres alumini</th>
                                                            <td><input type="radio" name="bany1_group17" value="120" ref="bany1_sostre_alumini_q1"/></td>
                                                            <td><input type="radio" name="bany1_group17" value="200" ref="bany1_sostre_alumini_q2"/></td>
                                                            <td><input type="radio" name="bany1_group17" value="250" ref="bany1_sostre_alumini_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Alicatat</th>
                                                            <td><input type="radio" name="bany1_group18" value="450" ref="bany1_alicatat_q1"/></td>
                                                            <td><input type="radio" name="bany1_group18" value="675" ref="bany1_alicatat_q2"/></td>
                                                            <td><input type="radio" name="bany1_group18" value="825" ref="bany1_alicatat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Pintura</th>
                                                            <td><input type="radio" name="bany1_group19" value="300" ref="bany1_pintura_q1"/></td>
                                                            <td><input type="radio" name="bany1_group19" value="340" ref="bany1_pintura_q2"/></td>
                                                            <td><input type="radio" name="bany1_group19" value="390" ref="bany1_pintura_q3"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                    Saló
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                </div>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th></th>
                                                            <th>Qualitat 1</th>
                                                            <th>Qualitat 2</th>
                                                            <th>Qualitat 3</th>
                                                        </tr>

                                                        <tr>
                                                            <th>Interruptors i endolls</th>
                                                            <td><input type="radio" name="salo_group1" value="210" ref="salo_interruptors_endolls_q1"/></td>
                                                            <td><input type="radio" name="salo_group1" value="315" ref="salo_interruptors_endolls_q2"/></td>
                                                            <td><input type="radio" name="salo_group1" value="365" ref="salo_interruptors_endolls_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>TV</th>
                                                            <td><input type="radio" name="salo_group2" value="30" ref="salo_tv_q1"/></td>
                                                            <td><input type="radio" name="salo_group2" value="45" ref="salo_tv_q2"/></td>
                                                            <td><input type="radio" name="salo_group2" value="50" ref="salo_tv_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Dades ordinador</th>
                                                            <td><input type="radio" name="salo_group3" value="40" ref="salo_dades_internet_q1"/></td>
                                                            <td><input type="radio" name="salo_group3" value="45" ref="salo_dades_internet_q2"/></td>
                                                            <td><input type="radio" name="salo_group3" value="50" ref="salo_dades_internet_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aire Condicionat</th>
                                                            <td><input type="radio" name="salo_group4" value="1100" ref="salo_aire_condicionat_q1"/></td>
                                                            <td><input type="radio" name="salo_group4" value="1200" ref="salo_aire_condicionat_q2"/></td>
                                                            <td><input type="radio" name="salo_group4" value="1300" ref="salo_aire_condicionat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Calefacció</th>
                                                            <td><input type="radio" name="salo_group5" value="180" ref="salo_calefaccio_q1"/></td>
                                                            <td><input type="radio" name="salo_group5" value="240" ref="salo_calefaccio_q2"/></td>
                                                            <td><input type="radio" name="salo_group5" value="340" ref="salo_calefaccio_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostre fals</th>
                                                            <td><input type="radio" name="salo_group6" value="500" ref="salo_sostre_fals_q1"/></td>
                                                            <td><input type="radio" name="salo_group6" value="700" ref="salo_sostre_fals_q2"/></td>
                                                            <td><input type="radio" name="salo_group6" value="900" ref="salo_sostre_fals_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Pintura</th>
                                                            <td><input type="radio" name="salo_group7" value="750" ref="salo_pintura_q1"/></td>
                                                            <td><input type="radio" name="salo_group7" value="850" ref="salo_pintura_q2"/></td>
                                                            <td><input type="radio" name="salo_group7" value="1350" ref="salo_pintura_q3"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <h5 className="mb-0">
                                                <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                    Habitació matrimoni (aprox 18 m2)
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                </div>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th></th>
                                                            <th>Qualitat 1</th>
                                                            <th>Qualitat 2</th>
                                                            <th>Qualitat 3</th>
                                                        </tr>

                                                        <tr>
                                                            <th>Interruptors i endolls</th>
                                                            <td><input type="radio" name="hb_mat1_group1" value="210" ref="hb_mat1_interruptors_endolls_q1"/></td>
                                                            <td><input type="radio" name="hb_mat1_group1" value="315" ref="hb_mat1_interruptors_endolls_q2"/></td>
                                                            <td><input type="radio" name="hb_mat1_group1" value="280" ref="hb_mat1_interruptors_endolls_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>TV</th>
                                                            <td><input type="radio" name="hb_mat1_group2" value="30" ref="hb_mat1_tv_q1"/></td>
                                                            <td><input type="radio" name="hb_mat1_group2" value="45" ref="hb_mat1_tv_q2"/></td>
                                                            <td><input type="radio" name="hb_mat1_group2" value="50" ref="hb_mat1_tv_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Dades ordinador</th>
                                                            <td><input type="radio" name="hb_mat1_group3" value="40" ref="hb_mat1_dades_internet_q1"/></td>
                                                            <td><input type="radio" name="hb_mat1_group3" value="45" ref="hb_mat1_dades_internet_q2"/></td>
                                                            <td><input type="radio" name="hb_mat1_group3" value="50" ref="hb_mat1_dades_internet_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aire Condicionat</th>
                                                            <td><input type="radio" name="hb_mat1_group4" value="1100" ref="hb_mat1_aire_condicionat_q1"/></td>
                                                            <td><input type="radio" name="hb_mat1_group4" value="1200" ref="hb_mat1_aire_condicionat_q2"/></td>
                                                            <td><input type="radio" name="hb_mat1_group4" value="1300" ref="hb_mat1_aire_condicionat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Calefacció</th>
                                                            <td><input type="radio" name="hb_mat1_group5" value="180" ref="hb_mat1_calefaccio_q1"/></td>
                                                            <td><input type="radio" name="hb_mat1_group5" value="220" ref="hb_mat1_calefaccio_q2"/></td>
                                                            <td><input type="radio" name="hb_mat1_group5" value="240" ref="hb_mat1_calefaccio_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostre fals</th>
                                                            <td><input type="radio" name="hb_mat1_group6" value="225" ref="hb_mat1_sostre_fals_q1"/></td>
                                                            <td><input type="radio" name="hb_mat1_group6" value="315" ref="hb_mat1_sostre_fals_q2"/></td>
                                                            <td><input type="radio" name="hb_mat1_group6" value="405" ref="hb_mat1_sostre_fals_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Pintura</th>
                                                            <td><input type="radio" name="hb_mat1_group7" value="750" ref="hb_mat1_pintura_q1"/></td>
                                                            <td><input type="radio" name="hb_mat1_group7" value="850" ref="hb_mat1_pintura_q2"/></td>
                                                            <td><input type="radio" name="hb_mat1_group7" value="950" ref="hb_mat1_pintura_q3"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingFive">
                                                <h5 className="mb-0">
                                                <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                    Hb individual 1 (aprox 9 m2)
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                </div>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th></th>
                                                            <th>Qualitat 1</th>
                                                            <th>Qualitat 2</th>
                                                            <th>Qualitat 3</th>
                                                        </tr>

                                                        <tr>
                                                            <th>Interruptors i endolls</th>
                                                            <td><input type="radio" name="hb_ind1_group1" value="120" ref="hb_ind1_interruptors_endolls_q1"/></td>
                                                            <td><input type="radio" name="hb_ind1_group1" value="180" ref="hb_ind1_interruptors_endolls_q2"/></td>
                                                            <td><input type="radio" name="hb_ind1_group1" value="210" ref="hb_ind1_interruptors_endolls_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>TV</th>
                                                            <td><input type="radio" name="hb_ind1_group2" value="30" ref="hb_ind1_tv_q1"/></td>
                                                            <td><input type="radio" name="hb_ind1_group2" value="45" ref="hb_ind1_tv_q2"/></td>
                                                            <td><input type="radio" name="hb_ind1_group2" value="50" ref="hb_ind1_tv_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Dades ordinador</th>
                                                            <td><input type="radio" name="hb_ind1_group3" value="40" ref="hb_ind1_dades_internet_q1"/></td>
                                                            <td><input type="radio" name="hb_ind1_group3" value="45" ref="hb_ind1_dades_internet_q2"/></td>
                                                            <td><input type="radio" name="hb_ind1_group3" value="50" ref="hb_ind1_dades_internet_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aire Condicionat</th>
                                                            <td><input type="radio" name="hb_ind1_group4" value="1100" ref="hb_ind1_aire_condicionat_q1"/></td>
                                                            <td><input type="radio" name="hb_ind1_group4" value="1200" ref="hb_ind1_aire_condicionat_q2"/></td>
                                                            <td><input type="radio" name="hb_ind1_group4" value="1300" ref="hb_ind1_aire_condicionat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Calefacció</th>
                                                            <td><input type="radio" name="hb_ind1_group5" value="90" ref="hb_ind1_calefaccio_q1"/></td>
                                                            <td><input type="radio" name="hb_ind1_group5" value="120" ref="hb_ind1_calefaccio_q2"/></td>
                                                            <td><input type="radio" name="hb_ind1_group5" value="150" ref="hb_ind1_calefaccio_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostre fals</th>
                                                            <td><input type="radio" name="hb_ind1_group6" value="150" ref="hb_ind1_sostre_fals_q1"/></td>
                                                            <td><input type="radio" name="hb_ind1_group6" value="210" ref="hb_ind1_sostre_fals_q2"/></td>
                                                            <td><input type="radio" name="hb_ind1_group6" value="270" ref="hb_ind1_sostre_fals_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Pintura</th>
                                                            <td><input type="radio" name="hb_ind1_group7" value="600" ref="hb_ind1_pintura_q1"/></td>
                                                            <td><input type="radio" name="hb_ind1_group7" value="700" ref="hb_ind1_pintura_q2"/></td>
                                                            <td><input type="radio" name="hb_ind1_group7" value="850" ref="hb_ind1_pintura_q3"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingSix">
                                                <h5 className="mb-0">
                                                <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                    Hb individual 2 (aprox 9 m2)
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                </div>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th></th>
                                                            <th>Qualitat 1</th>
                                                            <th>Qualitat 2</th>
                                                            <th>Qualitat 3</th>
                                                        </tr>

                                                        <tr>
                                                            <th>Interruptors i endolls</th>
                                                            <td><input type="radio" name="hb_ind2_group1" value="120" ref="hb_ind2_interruptors_endolls_q1"/></td>
                                                            <td><input type="radio" name="hb_ind2_group1" value="180" ref="hb_ind2_interruptors_endolls_q2"/></td>
                                                            <td><input type="radio" name="hb_ind2_group1" value="210" ref="hb_ind2_interruptors_endolls_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>TV</th>
                                                            <td><input type="radio" name="hb_ind2_group2" value="30" ref="hb_ind2_tv_q1"/></td>
                                                            <td><input type="radio" name="hb_ind2_group2" value="45" ref="hb_ind2_tv_q2"/></td>
                                                            <td><input type="radio" name="hb_ind2_group2" value="50" ref="hb_ind2_tv_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Dades ordinador</th>
                                                            <td><input type="radio" name="hb_ind2_group3" value="40" ref="hb_ind2_dades_internet_q1"/></td>
                                                            <td><input type="radio" name="hb_ind2_group3" value="45" ref="hb_ind2_dades_internet_q2"/></td>
                                                            <td><input type="radio" name="hb_ind2_group3" value="50" ref="hb_ind2_dades_internet_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Aire Condicionat</th>
                                                            <td><input type="radio" name="hb_ind2_group4" value="1100" ref="hb_ind2_aire_condicionat_q1"/></td>
                                                            <td><input type="radio" name="hb_ind2_group4" value="1200" ref="hb_ind2_aire_condicionat_q2"/></td>
                                                            <td><input type="radio" name="hb_ind2_group4" value="1300" ref="hb_ind2_aire_condicionat_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Calefacció</th>
                                                            <td><input type="radio" name="hb_ind2_group5" value="90" ref="hb_ind2_calefaccio_q1"/></td>
                                                            <td><input type="radio" name="hb_ind2_group5" value="120" ref="hb_ind2_calefaccio_q2"/></td>
                                                            <td><input type="radio" name="hb_ind2_group5" value="150" ref="hb_ind2_calefaccio_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostre fals</th>
                                                            <td><input type="radio" name="hb_ind2_group6" value="150" ref="hb_ind2_sostre_fals_q1"/></td>
                                                            <td><input type="radio" name="hb_ind2_group6" value="210" ref="hb_ind2_sostre_fals_q2"/></td>
                                                            <td><input type="radio" name="hb_ind2_group6" value="270" ref="hb_ind2_sostre_fals_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Pintura</th>
                                                            <td><input type="radio" name="hb_ind2_group7" value="600" ref="hb_ind2_pintura_q1"/></td>
                                                            <td><input type="radio" name="hb_ind2_group7" value="700" ref="hb_ind2_pintura_q2"/></td>
                                                            <td><input type="radio" name="hb_ind2_group7" value="850" ref="hb_ind2_pintura_q3"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingSeven">
                                                <h5 className="mb-0">
                                                <button type="button" className="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                    Rebedor/Passadís
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                </div>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th></th>
                                                            <th>Qualitat 1</th>
                                                            <th>Qualitat 2</th>
                                                            <th>Qualitat 3</th>
                                                        </tr>

                                                        <tr>
                                                            <th>Interruptors i endolls</th>
                                                            <td><input type="radio" name="rebedor_group1" value="120" ref="rebedor_interruptors_endolls_q1"/></td>
                                                            <td><input type="radio" name="rebedor_group1" value="180" ref="rebedor_interruptors_endolls_q2"/></td>
                                                            <td><input type="radio" name="rebedor_group1" value="210" ref="rebedor_interruptors_endolls_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Calefacció</th>
                                                            <td><input type="radio" name="rebedor_group2" value="90"  ref="rebedor_calefaccio_q1"/></td>
                                                            <td><input type="radio" name="rebedor_group2" value="120" ref="rebedor_calefaccio_q2"/></td>
                                                            <td><input type="radio" name="rebedor_group2" value="150" ref="rebedor_calefaccio_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Sostre fals</th>
                                                            <td><input type="radio" name="rebedor_group3" value="150" ref="rebedor_sostre_fals_q1"/></td>
                                                            <td><input type="radio" name="rebedor_group3" value="210" ref="rebedor_sostre_fals_q2"/></td>
                                                            <td><input type="radio" name="rebedor_group3" value="270" ref="rebedor_sostre_fals_q3"/></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Pintura</th>
                                                            <td><input type="radio" name="rebedor_group4" value="600" ref="rebedor_pintura_q1"/></td>
                                                            <td><input type="radio" name="rebedor_group4" value="700" ref="rebedor_pintura_q2"/></td>
                                                            <td><input type="radio" name="rebedor_group4" value="850" ref="rebedor_pintura_q3"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>Cost total</p>
                                            <h1>{ this.state.budgetCost }</h1>
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

export default Pressupost;