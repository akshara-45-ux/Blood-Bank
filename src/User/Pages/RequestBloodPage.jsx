import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const RequestBloodPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    location: '',
    date: ''
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request Submitted:", formData);
    alert("Blood request submitted successfully!");
    // You can add your API call logic here
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-danger text-white text-center">
              <h3>Request For Blood</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                
                {/* Full Name */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Patient/Requester Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter full name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Row>
                  {/* Age */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formAge">
                      <Form.Label>Age</Form.Label>
                      <Form.Control 
                        type="number" 
                        placeholder="Age" 
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required 
                      />
                    </Form.Group>
                  </Col>

                  {/* Blood Group Dropdown */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBloodGroup">
                      <Form.Label>Blood Group Required</Form.Label>
                      <Form.Select 
                        name="bloodGroup" 
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select...</option>
                        {bloodGroups.map((group) => (
                          <option key={group} value={group}>{group}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Location */}
                <Form.Group className="mb-3" controlId="formLocation">
                  <Form.Label>Hospital / Location</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="E.g. City Hospital, New York" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                {/* Date Needed */}
                <Form.Group className="mb-4" controlId="formDate">
                  <Form.Label>Date Needed By</Form.Label>
                  <Form.Control 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="danger" type="submit" size="lg">
                    Submit Request
                  </Button>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestBloodPage;