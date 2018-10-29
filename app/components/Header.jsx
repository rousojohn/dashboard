import React from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import {NavLink, Link, Route} from 'react-router-dom'

const _whiteBG = {
  'color' : 'white'
};

const Header = () => {
  return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to='/'>Code.Hub Dashboard</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavLink to='/courses'>Courses</NavLink>
        </Nav>
        <Nav pullRight>
            <NavLink to='/add-course'>Add new course</NavLink>
        </Nav>
      </Navbar>
  )
}

export default Header
