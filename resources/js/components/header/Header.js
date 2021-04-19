import React from 'react';
import ReactDOM from 'react-dom';
//import {ReactComponent as Logo} from '../../images/logo.png';
//import '../../../css/header.css';

class Header extends React.Component {
	render() {
		return(
			<header className="header">
				<div className="headerNav">
					<nav className="container">
						<div className='headerItems'>
							<div className="headerLogo">
								<a href="/"><img src="images/logo.png"></img></a>
							</div>
							<ul>
								<li><a href="/quisom">Qui Som</a></li>
								<li><a href="/galeria">Galeria</a></li>
								<li><a href="/pressupost">Pressupost</a></li>
								<li><a href="/contacte">Contacte</a></li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		)
	}
}

/*
function Header () {
    return (
		<nav>
			<div className="header-middle">
				<div className="row justify-content-center">
					<div className="container">
						<div className="logo">
							<Logo/>
						</div>
						<div>
							<NavLink to='/QuiSom'><QuiSom /></NavLink>
							<NavLink to='/Galeria'><Galeria /></NavLink>
							<button className='contactaBtn'>CONTACTA</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
    );
*/

export default Header;
/*
if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}*/