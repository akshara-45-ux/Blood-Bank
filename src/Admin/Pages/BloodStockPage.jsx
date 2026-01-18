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
  getAllStockAPI,
  updateStockAPI,
  deleteStockAPI,
} from "../../Services/allApi";

function BloodStockPage() {
  const [stock, setStock] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({
    id: "",
    group: "",
    units: "",
  });

  /* ================= READ ================= */
  const fetchStock = async () => {
    const res = await getAllStockAPI();
    if (res.status === 200) {
      // ✅ filter invalid records
      const validData = res.data.filter(item => item.id);
      setStock(validData);
    }
  };

  useEffect(() => {
    fetchStock();
  }, []);

  /* ================= UPDATE ================= */
  const handleUpdate = async () => {
    if (!edit.id || !edit.group || !edit.units) {
      console.error("Invalid update data");
      return;
    }

    await updateStockAPI(edit.id, {
      group: edit.group.toUpperCase(),
      units: Number(edit.units),
    });

    setShow(false);
    fetchStock();
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!id) {
      console.error("Invalid ID, cannot delete");
      return;
    }
    await deleteStockAPI(id);
    fetchStock();
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      <Row className="g-4">
        {stock.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="shadow h-100">
              <Card.Body className="d-flex flex-column">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6>Blood Group</h6>
                  <Badge bg="danger">{item.group}</Badge>
                </div>

                {/* Units */}
                <div className="text-center my-4">
                  <h6 className="text-muted">Units Available</h6>
                  <h2 className="fw-bold">{item.units}</h2>
                </div>

                {/* Actions */}
                <div className="mt-auto d-flex justify-content-center gap-2">
                  <Button
                    size="sm"
                    variant="warning"
                    onClick={() => {
                      setEdit(item);
                      setShow(true);
                    }}
                  >
                    Update
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
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
              value={edit.group}
              onChange={(e) =>
                setEdit({ ...edit, group: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Units</Form.Label>
            <Form.Control
              type="number"
              value={edit.units}
              onChange={(e) =>
                setEdit({ ...edit, units: e.target.value })
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
