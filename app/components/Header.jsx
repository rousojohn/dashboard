import React from 'react'
//import { Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../app.css'

const Header = () => {
  return (
    <nav className="navbar navbar-default horizontal-navbar">
    <div className='container'>
      <div className="navbar-header">
		    <Link to='/' className='navbar-brand'>Code.Hub Dashboard</Link>
      </div>
      <div className='links-navbar-div'>
        <div className='btn-nav'>
          <ul className='nav navbar-nav'>
            <li role='presentation'>
              <Link to='/courses'>Courses</Link>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
			      <li role='presentation'>
				      <Link to='/add-course'>Add Course</Link>
			      </li>
          </ul>
        </div>
       </div>
     </div>
  </nav>
  )
}

export default Header
