import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { addBloodAPI } from "../../Services/allApi";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const RequestBloodPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    location: "",
    date: "",
  });

  const [alertFlag, setAlertFlag] = useState(null);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addBloodAPI(formData);
      if (result.status >= 200 && result.status < 300) {
        setAlertFlag(true);
        setFormData({ name: "", age: "", bloodGroup: "", location: "", date: "" });
      } else {
        setAlertFlag(false);
      }
    } catch (error) {
      console.log(error);
      setAlertFlag(false);
    }

    setTimeout(() => {
      setAlertFlag(null);
    }, 3000);
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
              <Stack sx={{ width: "100%", mb: 2 }} spacing={2}>
                {alertFlag === true && (
                  <Alert severity="success">Request submitted successfully!</Alert>
                )}
                {alertFlag === false && (
                  <Alert severity="error">Something went wrong. Please try again.</Alert>
                )}
              </Stack>

              <Form onSubmit={handleSubmit}>
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
                          <option key={group} value={group}>
                            {group}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formLocation">
                  <Form.Label>Hospital / Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="E.g. City Hospital"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

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