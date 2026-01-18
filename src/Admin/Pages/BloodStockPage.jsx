import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Badge,
  Modal,
  Form,
} from "react-bootstrap";
import {
  getAllBloodAPI,
  deleteBloodAPI,
  updateBloodAPI,
} from "../../Services/allApi";

function BloodStockPage() {
  const [bloodStock, setBloodStock] = useState([]);
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    group: "",
    units: "",
  });

  /* ================= READ ================= */
  const fetchStock = async () => {
    const result = await getAllBloodAPI();
    if (result.status === 200) {
      setBloodStock(result.data);
    }
  };

  useEffect(() => {
    fetchStock();
  }, []);

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await deleteBloodAPI(id);
    fetchStock();
  };

  /* ================= OPEN UPDATE MODAL ================= */
  const handleUpdateClick = (item) => {
    setEditData({
      id: item.id,
      group: item.group,
      units: item.units,
    });
    setShow(true);
  };

  /* ================= UPDATE (REPLACE DATA) ================= */
  const handleUpdate = async () => {
    if (!editData.group || !editData.units) return;

    await updateBloodAPI(editData.id, {
      group: editData.group.toUpperCase(),
      units: Number(editData.units),
    });

    setShow(false);
    fetchStock();
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      {/* Heading */}
      <div className="mb-5 text-center">
        <h2 className="fw-bold text-danger">Blood Stock</h2>
        <p className="text-muted">
          Update blood group and quantity
        </p>
      </div>

      <Row className="g-4">
        {bloodStock.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="shadow h-100">
              <Card.Body className="d-flex flex-column">
                {/* Header */}
                <div className="d-flex justify-content-between mb-3">
                  <h6>Blood Group</h6>
                  <Badge bg="danger">{item.group}</Badge>
                </div>

                {/* Units */}
                <div className="text-center my-4">
                  <h6 className="text-muted">Units Available</h6>
                  <h1 className="fw-bold text-danger">
                    {item.units}
                  </h1>
                </div>

                {/* Buttons */}
                <div className="mt-auto d-flex justify-content-center gap-2">
                  <Button
                    size="sm"
                    variant="outline-warning"
                    onClick={() => handleUpdateClick(item)}
                  >
                    Update
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* UPDATE MODAL */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Blood Stock</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Blood Group</Form.Label>
            <Form.Control
              type="text"
              value={editData.group}
              onChange={(e) =>
                setEditData({ ...editData, group: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Units</Form.Label>
            <Form.Control
              type="number"
              value={editData.units}
              onChange={(e) =>
                setEditData({ ...editData, units: e.target.value })
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BloodStockPage;
