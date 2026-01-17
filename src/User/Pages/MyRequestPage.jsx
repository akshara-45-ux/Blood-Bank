import React, { useEffect, useState } from "react";
import { Table, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMyBloodRequestsAPI } from "../../Services/allApi";

function MyRequestPage() {
   const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Logged-in user (JSON Server style)
  const userId = JSON.parse(localStorage.getItem("user"))?.id;

  const fetchMyRequests = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      const result = await getMyBloodRequestsAPI(userId);
      setRequests(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyRequests();
  }, []);

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title className="mb-3 text-center">
          My Blood Request History
        </Card.Title>

        <Link to="/user-dashboard" className="mb-3 d-inline-block">
          ← Back
        </Link>

        {loading ? (
          <div className="text-center my-4">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : requests.length === 0 ? (
          <p className="text-center text-muted">
            No blood requests found
          </p>
        ) : (
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Blood Group</th>
                <th>Request Date</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((item) => (
                <tr key={item.id}>
                  <td>{item.bloodGroup}</td>
                  <td>
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
}
export default MyRequestPage