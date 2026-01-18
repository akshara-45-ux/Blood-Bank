import React, { useState } from "react";
import { Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addStockAPI } from "../../Services/allApi";

function AdminDashboard() {
  const [group, setGroup] = useState("");
  const [units, setUnits] = useState("");

  const handleAdd = async () => {
    if (!group || !units) return;

    await addStockAPI({
      group: group.toUpperCase(),
      units: Number(units),
    });

    setGroup("");
    setUnits("");
    alert("Blood stock added");
  };

  return (
    <div className="d-flex min-vh-100">
      <div className="bg-danger text-white p-4" style={{ width: "240px" }}>
        <h3 className="mb-4">Dashboard</h3>
        <Nav className="flex-column gap-2">
          <Nav.Link as={Link} to="/admin-dashboard" className="text-white">
            Add Blood
          </Nav.Link>
          <Nav.Link as={Link} to="/bloodstock-page" className="text-white">
            Blood Stock
          </Nav.Link>
          <Nav.Link as={Link} to="/request-page" className="text-white">
            Requests
          </Nav.Link>
        </Nav>
      </div>

      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Card style={{ width: 400 }}>
          <Card.Body>
            <Card.Title>Add Blood Stock</Card.Title>

            <input
              className="form-control mb-3"
              placeholder="Blood Group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Units"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />

            <Button variant="danger" className="w-100" onClick={handleAdd}>
              Add
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
