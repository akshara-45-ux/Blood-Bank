import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Chip, Stack, Typography, Alert } from "@mui/material";
import {
  getAllBloodAPI,
  deleteBloodAPI,
  updateBloodAPI,
} from "../../Services/allApi";

const RequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  const fetchRequests = async () => {
    try {
      const result = await getAllBloodAPI();
      if (result.status >= 200 && result.status < 300) {
        setRequests(result.data);
      }
    } catch (err) {
      setError("Failed to fetch blood requests");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAccept = async (id, currentData) => {
    try {
      const updatedData = { ...currentData, status: "Accepted" };
      const result = await updateBloodAPI(id, updatedData);
      if (result.status >= 200 && result.status < 300) {
        fetchRequests();
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  
  const handleReset = async (id, currentData) => {
    try {
      const updatedData = { ...currentData, status: "" }; 
      const result = await updateBloodAPI(id, updatedData);
      if (result.status >= 200 && result.status < 300) {
        fetchRequests();
      }
    } catch (err) {
      console.error("Reset failed", err);
    }
  };

  const handleReject = async (id) => {
    try {
      const result = await deleteBloodAPI(id);
      if (result.status >= 200 && result.status < 300) {
        fetchRequests()
      }
    } catch (err) {
      console.error("Deletion failed", err);
    }
  };

  return (
    <Container className="mt-5">
      <Typography
        variant="h4"
        className="mb-4 text-center"
        sx={{ fontWeight: "bold", color: "#b71c1c" }}
      >
        Blood Request Management
      </Typography>

      {error && (
        <Alert severity="error" className="mb-3">
          {error}
        </Alert>
      )}

      <Row>
        {requests.length > 0 ? (
          requests.map((request) => (
            <Col key={request.id || request._id} lg={4} md={6} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      {request.name}
                    </Typography>
                    <Chip
                      label={request.bloodGroup}
                      color="error"
                      size="small"
                    />
                  </div>

                  <Typography variant="body2" color="textSecondary">
                    <strong>Location:</strong> {request.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="mb-3"
                  >
                    <strong>Date:</strong> {request.date}
                  </Typography>

                  <hr />

                  <Stack direction="row" spacing={2} justifyContent="center">
                    {request.status === "Accepted" ? (
                      
                      <Chip
                        label="Accepted"
                        color="success"
                        variant="filled"
                        className="w-100"
                        onClick={() => handleReset(request.id, request)}
                        sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#2e7d32' } }}
                      />
                    ) : (
                      <>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() =>
                            handleReject(request.id || request._id)
                          }
                        >
                          Reject
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() =>
                            handleAccept(request.id || request._id, request)
                          }
                        >
                          Accept
                        </Button>
                      </>
                    )}
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Typography className="text-center w-100 mt-5">
            No requests found.
          </Typography>
        )}
      </Row>
    </Container>
  );
};

export default RequestPage;