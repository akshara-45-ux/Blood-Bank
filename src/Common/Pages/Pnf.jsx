import React from 'react'

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Pnf() {
  return(
  <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row className="w-100 text-center">
        <Col>
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            Sorry, the page you are looking for does not exist.
          </p>

          <Link to="/">
            <Button variant="danger" size="lg">
              Go Back Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
export default Pnf