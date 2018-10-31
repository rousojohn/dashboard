import React from 'react'
//import { Navbar, Nav, NavItem} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import '../app.css'

const Header = () => {
  return (
    <nav className="navbar navbar-default horizontal-navbar">
    <div className='container'>
      <div className="navbar-header">
		    <NavLink to='/' className='navbar-brand'>Code.Hub Dashboard</NavLink>
      </div>
      <div className='links-navbar-div'>
        <div className='btn-nav'>
          <ul className='nav navbar-nav'>
            <li role='presentation'>
              <NavLink to='/courses'>Courses</NavLink>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
			      <li role='presentation'>
				      <NavLink to='/add-course'>Add Course</NavLink>
			      </li>
          </ul>
        </div>
       </div>
     </div>
  </nav>
  )
}

export default Header
