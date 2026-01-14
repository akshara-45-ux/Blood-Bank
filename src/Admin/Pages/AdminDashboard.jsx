import React from "react";
import { Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>

      {/* Left Sidebar */}
      <div className="bg-danger text-white p-4" style={{ width: "240px" }}>
        
        {/* Keep heading size same as before */}
        <h3 className="text-center mb-4">Dashboard</h3>

        <Nav className="flex-column gap-2">
          <Nav.Link as={Link} to="/donors" className="text-white">
            Donors
          </Nav.Link>

          <Nav.Link as={Link} to="/bloodstock-page" className="text-white">
            Blood Stock
          </Nav.Link>

          <Nav.Link as={Link} to="/request-page" className="text-white">
            Requests
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-light p-4">
        <Card style={{ width: "400px" }} className="shadow">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              Add Blood
            </Card.Title>

            {/* Form */}
            <div className="mb-3">
              <label className="form-label">Blood Group</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. A+"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Units</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter units"
              />
            </div>

            <Button variant="danger" className="w-100">
              Add
            </Button>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default AdminDashboard;
