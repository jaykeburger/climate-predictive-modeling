import React from 'react'
import sass from './Navbar.sass'

function NavbarItem(props) {
	return (
		<div className='NavbarItem'>
			{props.text}
		</div>
	)
}

function Navbar() {
  return (
	  <div className='Navbar'>
		<NavbarItem text="earth"/>
		<NavbarItem text="other text"/>
		<NavbarItem text="text"/>
		<NavbarItem text="other text"/>

	 </div>
  )
}

export default Navbar