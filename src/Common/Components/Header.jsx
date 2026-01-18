import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const admin = JSON.parse(sessionStorage.getItem("admin"));

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <div className='d-flex gap-3 mx-auto ms-2'>
          <img 
            src="https://clipground.com/images/blood-donation-png-17.png" 
            alt="" 
            width="55px" 
            height="55px" 
            className="p-1 bg-dark rounded-circle"
          />
          <Navbar.Brand as={NavLink} to="/">BloodNet</Navbar.Brand>
        </div>

        {user || admin ? (
          <div className="d-flex gap-2">
            <span className="text-light my-auto">{user ? user.username : admin?.username}</span>
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <DropdownButton 
            id="login-dropdown" 
            title="Login" 
            variant="outline-light" 
            align="end"
          >
            <Dropdown.Item as={NavLink} to="/admin-login">Admin</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/user-login">User</Dropdown.Item>
          </DropdownButton>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;



