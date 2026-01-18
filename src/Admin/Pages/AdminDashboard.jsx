import React, { useState } from "react";
import { Nav, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  addBloodAPI,
  getAllBloodAPI,
  updateBloodAPI,
} from "../../Services/allApi";

function AdminDashboard() {
  const [group, setGroup] = useState("");
  const [units, setUnits] = useState("");
  const [status, setStatus] = useState(null);

  // CREATE / ADD logic
  const handleAddBlood = async () => {
    if (!group || !units) {
      setStatus("error");
      return;
    }

    try {
      const result = await getAllBloodAPI();

      if (result.status === 200) {
        const existingBlood = result.data.find(
          (item) =>
            item.group.toUpperCase() === group.toUpperCase()
        );

        if (existingBlood) {
          // UPDATE (add to old stock)
          const updatedUnits =
            Number(existingBlood.units) + Number(units);

          await updateBloodAPI(existingBlood.id, {
            group: existingBlood.group,
            units: updatedUnits,
          });
        } else {
          // CREATE new blood group
          await addBloodAPI({
            group: group.toUpperCase(),
            units: Number(units),
          });
        }

        setStatus("success");
        setGroup("");
        setUnits("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="bg-danger text-white p-4" style={{ width: "240px" }}>
        <h3 className="text-center mb-4">Dashboard</h3>

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

      {/* Main Content */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-light p-4">
        <Card style={{ width: "400px" }} className="shadow">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              Add Blood Stock
            </Card.Title>

            {status === "success" && (
              <Alert variant="success">
                Blood stock updated successfully
              </Alert>
            )}
            {status === "error" && (
              <Alert variant="danger">
                Please enter valid data
              </Alert>
            )}

            <div className="mb-3">
              <label className="form-label">Blood Group</label>
              <input
                className="form-control"
                placeholder="O+"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Units to Add</label>
              <input
                type="number"
                className="form-control"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
              />
            </div>

            <Button
              variant="danger"
              className="w-100"
              onClick={handleAddBlood}
            >
              Add
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
