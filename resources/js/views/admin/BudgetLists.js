import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import axios from 'axios';
import { data } from 'jquery';
//import './header.css';

function BudgetLists() {

	const [budget, setBudget] = useState([]);

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/')
		.then(response => {
			setBudget(response.data);
		})
	})

    return (
        <div>
            <Header/>
            <div className="headerMargin"></div>
            <section>
                <div className="sectionMargin">
                    <div className="container">
						<table>
							<thead>
								<tr>
									<th>#</th>
									<th>Nom</th>
									<th>Telèfon</th>
									<th>Email</th>
									<th>Descripcio</th>
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