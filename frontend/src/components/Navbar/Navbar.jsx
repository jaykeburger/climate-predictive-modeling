import React from 'react'
import sass from './Navbar.sass'

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
		<NavbarItem link={"/path2"} text="earth"/>
		  <NavbarItem link={"/"} text="other text"/>
		<NavbarItem text="text"/>
		<NavbarItem text="other text"/>

	 </div>
  )
}

export default Navbar