import React, { useEffect, useState } from "react";
import { Card, Button, Nav, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAllStockAPI } from "../../Services/allApi";

function UserDashboard() {
  const [bloodStock, setBloodStock] = useState([]);
  const navigate = useNavigate();

  // Fetch admin-added blood stock
  useEffect(() => {
    const fetchBloodStock = async () => {
      try {
        const response = await getAllStockAPI(); // fetch from added-blood
        if (response.status === 200) {
          setBloodStock(response.data); // set stock to state
        }
      } catch (error) {
        console.error("Error fetching blood stock:", error);
      }
    };

    fetchBloodStock();
  }, []);

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("user"); // remove logged-in user
    navigate("/user-login");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="bg-danger text-white p-4" style={{ width: "240px" }}>
        <h4 className="mb-4 text-center">User Dashboard</h4>
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
            onClick={handleLogout}
            variant="danger"
            className="text-white w-100"
          >
            Logout
          </Button>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
        <h3 className="mb-4">Available Blood Stock</h3>

        <Row className="g-4">
          {bloodStock.length > 0 ? (
            bloodStock.map((item) => (
              <Col md={6} key={item.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>Blood Group: {item.group}</Card.Title>
                    <Card.Text>Units Available: {item.units}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No blood stock available currently.</p>
          )}
        </Row>

        <div className="d-flex gap-3 mb-4 mt-5 justify-content-center">
          <Link to="/requestblood-page">
            <Button variant="danger">Request Blood</Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

