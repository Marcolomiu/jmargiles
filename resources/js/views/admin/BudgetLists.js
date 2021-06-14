import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import axios from 'axios';
import { data } from 'jquery';
//import './header.css';

function BudgetLists() {

	const [budget, setBudget] = useState([]);

	useEffect(() => {
		axios.get('https://jmargiles.herokuapp.com/api')
		.then(response => {
			setBudget(response.data);
		})
	}, [])

	function deleteBudget(id) {
		console.log(id);

		const fd = new FormData();
		fd.append('id', id);

		console.log("Entra");

		axios.delete('api/delete/homeBudget', fd).then(res=>
			{
				console.log("Surt");
				console.log(res.data);
				// Aquí tindria que recarregar el render
			}
		);
	}

    return (
        <div>
            <Header/>
            <div className="headerMargin"></div>
            <section>
                <div className="sectionMargin">
                    <div className="table-list">
						<table>
							<thead>
								<tr>
									<th>###</th>
									<th>Nom</th>
									<th>Telèfon</th>
									<th>Email</th>
									<th>Descripció</th>

									<th>Cuina electricitat</th>
									<th>Cuina aigua</th>
									<th>Cuina gas</th>
									<th>Cuina mobles 240</th>
									<th>Cuina encimera gas</th>
									<th>Cuina encimera vitroceràmica</th>
									<th>Cuina encimera inducció</th>
									<th>Cuina rentaplats</th>
									<th>Cuina forn</th>
									<th>Cuina fregadora</th>
									<th>Cuina campana</th>
									<th>Cuina aixeta</th>
									<th>Cuina rentadora</th>
									<th>Cuina caldera</th>
									<th>Cuina sostre pladur</th>
									<th>Cuina sostre alumini</th>
									<th>Cuina alicatat</th>
									<th>Cuina pintura</th>

									<th>Bany electricitat</th>
									<th>Bany aigua</th>
									<th>Bany mobles rentamans</th>
									<th>Bany rentamans</th>
									<th>Bany mirall</th>
									<th>Bany mampara banyera</th>
									<th>Bany mampara dutxa</th>
									<th>Bany aixeta dutxa</th>
									<th>Bany aixeta bany</th>
									<th>Bany accesoris bany</th>
									<th>Bany tovalloler</th>
									<th>Bany wc</th>
									<th>Bany bidet</th>
									<th>Bany banyera</th>
									<th>Bany dutxa</th>
									<th>Bany sostre pladur</th>
									<th>Bany sostre alumini</th>
									<th>Bany alicatat</th>
									<th>Bany pintura</th>

									<th>Saló interruptors i endolls</th>
									<th>Saló tv</th>
									<th>Saló dades internet</th>
									<th>Saló aire condicionat</th>
									<th>Saló calefacció</th>
									<th>Saló sostre fals</th>
									<th>Saló pintura</th>

									<th>Hb_mat interruptors i endolls</th>
									<th>Hb_mat tv</th>
									<th>Hb_mat dades internet</th>
									<th>Hb_mat aire condicionat</th>
									<th>Hb_mat calefacció</th>
									<th>Hb_mat sostre fals</th>
									<th>Hb_mat pintura</th>

									<th>Hb_ind1 interruptors i endolls</th>
									<th>Hb_ind1 tv</th>
									<th>Hb_ind1 dades internet</th>
									<th>Hb_ind1 aire condicionat</th>
									<th>Hb_ind1 calefacció</th>
									<th>Hb_ind1 sostre fals</th>
									<th>Hb_ind1 pintura</th>

									<th>Hb_ind2 interruptors i endolls</th>
									<th>Hb_ind2 tv</th>
									<th>Hb_ind2 dades internet</th>
									<th>Hb_ind2 aire condicionat</th>
									<th>Hb_ind2 calefacció</th>
									<th>Hb_ind2 sostre fals</th>
									<th>Hb_ind2 pintura</th>

									<th>Rebedor aire condicionat</th>
									<th>Rebedor calefacció</th>
									<th>Rebedor sostre fals</th>
									<th>Rebedor pintura</th>

									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{
									budget.map(row => {
										return(
											<tr key={row.id}>
												<th>{row.id}</th>
												<td>{row.nom}</td>
												<td>{row.telefon}</td>
												<td>{row.email}</td>
												<td>{row.descripcio}</td>
												
												<td>{row.cuina_electricitat}</td>
												<td>{row.cuina_aigua}</td>
												<td>{row.cuina_gas}</td>
												<td>{row.cuina_mobles240}</td>
												<td>{row.cuina_encimera_gas}</td>
												<td>{row.cuina_encimera_vitroceramica}</td>
												<td>{row.cuina_encimera_induccio}</td>
												<td>{row.cuina_rentaplats}</td>
												<td>{row.cuina_forn}</td>
												<td>{row.cuina_fregadora}</td>
												<td>{row.cuina_campana}</td>
												<td>{row.cuina_aixeta}</td>
												<td>{row.cuina_rentadora}</td>
												<td>{row.cuina_caldera}</td>
												<td>{row.cuina_sostre_pladur}</td>
												<td>{row.cuina_sostre_alumini}</td>
												<td>{row.cuina_alicatat}</td>
												<td>{row.cuina_pintura}</td>
												
												<td>{row.bany1_electricitat}</td>
												<td>{row.bany1_aigua}</td>
												<td>{row.bany1_moble_rentamans}</td>
												<td>{row.bany1_rentamans}</td>
												<td>{row.bany1_mirall}</td>
												<td>{row.bany1_mampara_banyera}</td>
												<td>{row.bany1_mampara_dutxa}</td>
												<td>{row.bany1_aixeta_dutxa}</td>
												<td>{row.bany1_aixeta_bany}</td>
												<td>{row.bany1_accesoris_bany}</td>
												<td>{row.bany1_tovalloler}</td>
												<td>{row.bany1_wc}</td>
												<td>{row.bany1_bidet}</td>
												<td>{row.bany1_banyera}</td>
												<td>{row.bany1_dutxa}</td>
												<td>{row.bany1_sostre_pladur}</td>
												<td>{row.bany1_sostre_alumini}</td>
												<td>{row.bany1_alicatat}</td>
												<td>{row.bany1_pintura}</td>

												<td>{row.salo_interruptors_endolls}</td>
												<td>{row.salo_tv}</td>
												<td>{row.salo_dades_internet}</td>
												<td>{row.salo_aire_condicionat}</td>
												<td>{row.salo_calefaccio}</td>
												<td>{row.salo_sostre_fals}</td>
												<td>{row.salo_pintura}</td>

												<td>{row.hb_mat1_interruptors_endolls}</td>
												<td>{row.hb_mat1_tv}</td>
												<td>{row.hb_mat1_dades_internet}</td>
												<td>{row.hb_mat1_aire_condicionat}</td>
												<td>{row.hb_mat1_calefaccio}</td>
												<td>{row.hb_mat1_sostre_fals}</td>
												<td>{row.hb_mat1_pintura}</td>

												<td>{row.hb_ind1_interruptors_endolls}</td>
												<td>{row.hb_ind1_tv}</td>
												<td>{row.hb_ind1_dades_internet}</td>
												<td>{row.hb_ind1_aire_condicionat}</td>
												<td>{row.hb_ind1_calefaccio}</td>
												<td>{row.hb_ind1_sostre_fals}</td>
												<td>{row.hb_ind1_pintura}</td>

												<td>{row.hb_ind2_interruptors_endolls}</td>
												<td>{row.hb_ind2_tv}</td>
												<td>{row.hb_ind2_dades_internet}</td>
												<td>{row.hb_ind2_aire_condicionat}</td>
												<td>{row.hb_ind2_calefaccio}</td>
												<td>{row.hb_ind2_sostre_fals}</td>
												<td>{row.hb_ind2_pintura}</td>

												<td>{row.rebedor_interruptors_endolls}</td>
												<td>{row.rebedor_calefaccio}</td>
												<td>{row.rebedor_sostre_fals}</td>
												<td>{row.rebedor_pintura}</td>

												<td><button className="btn btn-danger" onClick={() => deleteBudget(row.id)}>Delete</button></td>
											</tr>
										);
									})
								}
							</tbody>
						</table>
                    </div>
                </div>           
            </section>
        </div>
    );
}

export default BudgetLists;