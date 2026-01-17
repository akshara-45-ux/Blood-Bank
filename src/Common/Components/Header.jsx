import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <div className=' d-flex gap-3 mx-auto ms-2' >
        <img src="https://clipground.com/images/blood-donation-png-17.png"alt=""  width="55px"
  height="55px"
  className="p-1 bg-dark rounded-circle"/>
        <Navbar.Brand as={NavLink} to="/">
          BloodNet
        </Navbar.Brand>
        </div>
<DropdownButton
      id="search-dropdown"
      title="Login"
      variant="outline-light"
      align="end"
    >
      <Dropdown.Item as={NavLink} to={"/admin-login"} className="text-dark">Admin</Dropdown.Item>
      <Dropdown.Item as={NavLink} to={"/user-login"} className="text-dark">User</Dropdown.Item>
     
    </DropdownButton>
         
     
      </Container>
    </Navbar>
  )
}

export default Header