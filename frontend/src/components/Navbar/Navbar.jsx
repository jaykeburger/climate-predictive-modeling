import React from 'react'
import sass from './Navbar.sass'
import Link from 'react-router'

function NavbarItem(props) {
	return (
		<div className='NavbarItem'>
			<a onClick={()=>{document.location = props.link}}>{props.text}</a>
		</div>
	)
}

function Navbar() {
  return (
	  <div className='Navbar'>
		<NavbarItem link={"/co2-emissions"} text="CO2 Emissions"/>
		<NavbarItem link={"/"} text="other text"/>
		<NavbarItem text="text"/>
		<NavbarItem text="other text"/>

	 </div>
  )
}

export default Navbar