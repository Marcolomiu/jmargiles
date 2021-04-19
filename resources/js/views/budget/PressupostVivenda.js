export default {
	formulari: `<form ref={(el) => this.myFormRef = el}>
					<div id="accordion">
						<div className="card">
							<div className="card-header" id="headingOne">
								<h5 className="mb-0">
								<button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
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
											<td><input type="radio" name="cuina_group16" value="315" ref="cuina_sostres_alumini_q1"/></td>
											<td><input type="radio" name="cuina_group16" value="405" ref="cuina_sostres_alumini_q2"/></td>
											<td><input type="radio" name="cuina_group16" value="495" ref="cuina_sostres_alumini_q3"/></td>
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
								<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
											<td><input type="radio" name="bany1_group15" value="100" ref="bany1_sostre_pladur_q1"/></td>
											<td><input type="radio" name="bany1_group15" value="180" ref="bany1_sostre_pladur_q2"/></td>
											<td><input type="radio" name="bany1_group15" value="210" ref="bany1_sostre_pladur_q3"/></td>
										</tr>

										<tr>
											<th>Sostres alumini</th>
											<td><input type="radio" name="bany1_group16" value="120" ref="bany1_sostres_alumini_q1"/></td>
											<td><input type="radio" name="bany1_group16" value="200" ref="bany1_sostres_alumini_q2"/></td>
											<td><input type="radio" name="bany1_group16" value="250" ref="bany1_sostres_alumini_q3"/></td>
										</tr>

										<tr>
											<th>Alicatat</th>
											<td><input type="radio" name="bany1_group17" value="450" ref="bany1_alicatat_q1"/></td>
											<td><input type="radio" name="bany1_group17" value="675" ref="bany1_alicatat_q2"/></td>
											<td><input type="radio" name="bany1_group17" value="825" ref="bany1_alicatat_q3"/></td>
										</tr>

										<tr>
											<th>Pintura</th>
											<td><input type="radio" name="bany1_group18" value="300" ref="bany1_pintura_q1"/></td>
											<td><input type="radio" name="bany1_group18" value="340" ref="bany1_pintura_q2"/></td>
											<td><input type="radio" name="bany1_group18" value="390" ref="bany1_pintura_q3"/></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="card">
							<div className="card-header" id="headingThree">
								<h5 className="mb-0">
								<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
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
								<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
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
								<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
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
								<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
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
								<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
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
					<br></br>
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
						<button id="contactFormSubmitBtn" type="submit" className="btn btn-primary" onClick={this.addFormData}>Enviar</button>
				</form>`
}