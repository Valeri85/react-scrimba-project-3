import React from 'react';
import heroImage from '../../images/hero.png';

function Header() {
	return (
		<header className="header">
			<img className="header__img" src={heroImage} width={396} height={232} alt="Collection of photos" />
			<h1 className="header__title">Online Experiences</h1>
			<p className="header__text">
				Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
			</p>
		</header>
	);
}

export default Header;
