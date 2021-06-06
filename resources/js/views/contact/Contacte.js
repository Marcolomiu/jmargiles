import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import axios from 'axios';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import credentials from './Credentials';

//import './header.css';

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 41.42414208594018, lng: 2.174209345619327 }}
    >
        <Marker
            position={{ lat: 41.42414208594018, lng: 2.174209345619327 }}
        />
    </GoogleMap>
));

const mapURL = `https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}&v=3.exp&libraries=geometry,drawing,places`;

class Contacte extends React.Component {

    constructor(props)
    {
        super(props);
        this.addFormData = this.addFormData.bind(this);
    }
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
            
            axios.post('/api/send/contactEmail', fd).then(res=>
                {
                    console.log(res.data);
                    this.myFormRef.reset();
                    /*
                    alertify.set('notifier','position', 'top-right');
                    alertify.success('Current position : ' + alertify.get('notifier','position'));
                    */
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
            );
            */
        }
    }

    /*
    <Mapa 
                    googleMapURL = {`https://maps.googleapis.com/api/js?v=3.exp&key=${credentials.mapsKey}`}
                    containerElement = {<div style={{ height: '400px' }} />}
                    mapElement = {<div style={{ height: '100%' }} />}
                    loadingElement = {<p>Cargant</p>}
                />
    */

    render() {
        return (
            <div>
                <Header/>
                <div className="headerMargin"></div>
                <section>
                    <div className="sectionMargin">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-12">

                                    <p>Telf: 659 51 41 70</p>
                                    <p>Contacte: info@rgil.es</p>
                                    <p>Segle XX 62, Local 2, 08041, Barcelona</p>

                                    <MapWithAMarker 
                                        googleMapURL = {mapURL}
                                        containerElement = {<div style={{ height: '400px' }} />}
                                        mapElement = {<div style={{ height: '100%' }} />}
                                        loadingElement = {<p>Cargant</p>}
                                    />
                                </div>
                                <div className="col-lg-5 col-12 mb-5 mt-5 text-left">

                                    <h2>Contacte</h2>
                                    <p>Contacte amb JMA Instal·lacions</p>

                                    <form ref={(el) => this.myFormRef = el}>
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
                    </div>
                </section>
            </div>
        );
    }
}

export default Contacte;