import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";

function BloodStockPage() {
  // Dummy data
  const bloodStock = [
    { id: 1, group: "A+", units: 10 },
    { id: 2, group: "B+", units: 8 },
    { id: 3, group: "O+", units: 15 },
    { id: 4, group: "AB-", units: 5 },
  ];

  return (
    <div className="p-4 bg-light min-vh-100">

      {/* Heading */}
      <div className="mb-5 text-center">
        <h2 className="fw-bold text-danger">Blood Stock</h2>
        <p className="text-muted">Current availability of blood units</p>
      </div>

      <Row className="g-4">
        {bloodStock.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="shadow-lg border-0 h-100">
              <Card.Body className="d-flex flex-column">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0 fw-semibold">Blood Group</h5>
                  <Badge bg="danger" pill className="fs-6 px-3 py-2">
                    {item.group}
                  </Badge>
                </div>

                {/* Units */}
                <div className="text-center my-4">
                  <h6 className="text-muted">Units Available</h6>
                  <h1 className="fw-bold text-danger">{item.units}</h1>
                </div>

                {/* Buttons */}
                <div className="mt-auto d-flex justify-content-center gap-3">
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="px-4"
                  >
                    Edit
                  </Button>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="px-4"
                  >
                    Delete
                  </Button>
                </div>


              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BloodStockPage;
