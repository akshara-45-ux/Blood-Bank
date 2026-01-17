import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome, FaTint, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', marginTop: '60px' }}>
      <Container>
        <Row className="py-4">

          {/* COLUMN 1 */}
          <Col md={4} className="mb-3">
            <h5 style={{ marginBottom: '15px' }}> BloodNet  Bank</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#cccccc' }}>
              BloodNet Blood Bank is committed to connecting donors, hospitals,
              and patients to ensure timely access to safe and life-saving blood
              for everyone in need.
            </p>
          </Col>

          {/* COLUMN 2 */}
          <Col md={4} className="mb-3">
            <h5 style={{ marginBottom: '15px' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#cccccc' }}>
              <li className="mb-2">
                <FaHome style={{ marginRight: '8px' }} />
                Home
              </li>
              <li className="mb-2">
                <FaTint style={{ marginRight: '8px' }} />
                Donate Blood
              </li>
            </ul>
          </Col>

          {/* COLUMN 3 */}
          <Col md={4} className="mb-3">
            <h5 style={{ marginBottom: '15px' }}>Contact Us</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#cccccc' }}>
              <FaHome style={{ marginRight: '8px' }} />
              Kerala, India <br />
              <FaPhoneAlt style={{ marginRight: '8px' }} />
              +91 98765 43210 <br />
              <FaEnvelope style={{ marginRight: '8px' }} />
              bloodnet@bloodbank.com
            </p>
          </Col>

        </Row>

        {/* COPYRIGHT */}
        <Row>
          <Col
            className="text-center py-3"
            style={{ borderTop: '1px solid #444' }}
          >
            <small style={{ color: '#aaaaaa' }}>
              © {new Date().getFullYear()} Blood Net. All Rights Reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
