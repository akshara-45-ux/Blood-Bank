import React from 'react';
import { Card, Button, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserDashboard() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-danger text-white p-4" style={{ width: '240px' }}>
        {/* Sidebar Heading */}
        {/* <h4 className="mb-4 text-center">Dashboard</h4> */}

        {/* Navigation Buttons using Link */}
        <Nav className="flex-column gap-2">
          <Button
            as={Link}
            to="/user-dashboard"
            variant="danger"
            className="text-white w-100"
          >
            Dashboard
          </Button>

          <Button
            as={Link}
            to="/myrequest-page"
            variant="danger"
            className="text-white w-100"
          >
            My Requests
          </Button>

          <Button
            as={Link}
            to="/user-login"
            variant="danger"
            className="text-white w-100"
          >
            Logout
          </Button>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
       

        <Row className="g-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Available Blood</Card.Title>
                <Card.Text>Blood Group:</Card.Text>
                <Card.Text>Units:</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Available Blood</Card.Title>
                <Card.Text>Blood Group:</Card.Text>
                <Card.Text>Units:</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="d-flex gap-3 mb-4 mt-5 justify-content-center">
          <Button variant="danger">Request Blood</Button>
          <Button variant="success">Donate Blood</Button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;