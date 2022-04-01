import React from 'react';
import logo from '../../images/icons/logo.svg';

function Nav() {
	return (
		<nav className="nav">
			<img className="nav__logo" src={logo} width={82} height={25} alt="Logo" />
		</nav>
	);
}

export default Nav;
