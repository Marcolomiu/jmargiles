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