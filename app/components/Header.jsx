import React from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import {NavLink, Link, Route} from 'react-router-dom'
import '../app.css'

const Header = () => {
  return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to='/'>Code.Hub Dashboard</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <>
            <li role='presentation'>
              <Link to='/courses' >Courses</Link>
            </li>
          </>
        </Nav>
        <Nav pullRight>
        <>
            <li role='presentation'>
              <Link to='/add-course' >Add Course</Link>
            </li>
          </>
        </Nav>
      </Navbar>
  )
}

export default Header
