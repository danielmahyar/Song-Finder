import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo-container">
				<img className="header__logo-img" src={logo} alt="" />
				<span className="header__logo-text">Vocast Production</span>
			</div>
			<div className="header__text-middle">
				<span>Song Finder</span>
			</div>
			<div className="header__dummy-div"></div>
		</header>
	)
}
