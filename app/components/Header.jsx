import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#home'>Code.Hub Dashboard</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href='#'>Courses</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href='#'>Add new course</NavItem>
      </Nav>
    </Navbar>
  )
}

export default Header
