import React from 'react';
import { Row, Col } from 'react-bootstrap';

function LandingPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        backgroundImage: 'url("https://t3.ftcdn.net/jpg/05/04/36/84/360_F_504368477_XGrt6brpAmFWPfjWGnPJD9bLU6Gi35yG.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        color: '#333',
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="mb-4" style={{ color: '#800000' }}>
            Every Drop Counts, Every Life Matters
          </h1>

          <p className="fs-5 mb-3" style={{ lineHeight: '1.8', letterSpacing: '0.5px' }}>
            This platform helps connect donors, hospitals, and patients efficiently,
            ensuring life-saving blood is available whenever it’s needed.
          </p>
          
          

        </Col>
      </Row>
    </div>



  );
}

export default LandingPage;
