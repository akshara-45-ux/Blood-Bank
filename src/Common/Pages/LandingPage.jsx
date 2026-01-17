import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function LandingPage() {
  const paragraphStyle = {
    lineHeight: '1.9',
    fontSize: '16px',
    color: '#444',
    marginTop: '15px',
    textAlign: 'justify',
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 20px',
          backgroundImage:
            'url("https://t3.ftcdn.net/jpg/05/04/36/84/360_F_504368477_XGrt6brpAmFWPfjWGnPJD9bLU6Gi35yG.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 style={{ color: '#800000', marginBottom: '30px' }}>
                Every Drop Counts, Every Life Matters
              </h1>
              <p
                style={{
                  lineHeight: '1.9',
                  fontSize: '18px',
                  color: '#333',
                }}
              >
                This platform serves as a bridge between blood donors, hospitals,
                and patients, ensuring that life-saving blood reaches those in
                need without delay.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* IMPORTANCE OF BLOOD SECTION */}
      <div style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <Container>

          {/* ROW 1 */}
          <Row className="align-items-center mb-5">
            <Col md={6} className="text-center">
              <img
                src="https://t3.ftcdn.net/jpg/03/09/20/22/360_F_309202280_CgsWoCAdLBe9INBvdwBKUkpaLEP4XNLa.jpg"
                alt="Blood Donation"
                style={{
                  width: '360px',
                  height: '360px',
                  objectFit: 'cover',
                  marginBottom: '30px',
                }}
              />
            </Col>
            <Col md={6}>
              <h4 style={{ color: '#800000', textAlign: 'center' }}>
                Importance of Blood Donation
              </h4>
              <p style={paragraphStyle}>
                Blood donation is one of the most powerful and selfless acts a
                person can perform. Every donated unit of blood has the potential
                to save multiple lives, supporting patients undergoing surgeries,
                individuals affected by accidents, and those suffering from
                life-threatening illnesses. A stable blood supply ensures that
                hospitals and medical centers can respond effectively to both
                routine and emergency medical situations.
              </p>
            </Col>
          </Row>

          {/* ROW 2 */}
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <h4 style={{ color: '#800000', textAlign: 'center' }}>
                Lifesaving Support in Emergencies
              </h4>
              <p style={paragraphStyle}>
                In emergency situations, time is critical and access to blood can
                determine survival. Natural disasters, accidents, and sudden
                medical complications require immediate blood transfusions. By
                maintaining a strong network of donors and an organized blood
                distribution system, healthcare providers can act quickly and
                confidently when lives are at stake.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg"
                alt="Emergency Blood"
                style={{
                  width: '360px',
                  height: '360px',
                  objectFit: 'cover',
                  marginBottom: '30px',
                }}
              />
            </Col>
          </Row>

          {/* ROW 3 */}
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <img
                src="https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg"
                alt="Save Lives"
                style={{
                  width: '360px',
                  height: '360px',
                  objectFit: 'cover',
                  marginBottom: '30px',
                }}
              />
            </Col>
            <Col md={6}>
              <h4 style={{ color: '#800000', textAlign: 'center' }}>
                One Donation Can Create a Big Impact
              </h4>
              <p style={paragraphStyle}>
                A single act of blood donation carries immense value. Beyond the
                medical impact, it represents compassion, solidarity, and social
                responsibility. Your contribution can bring hope to patients and
                their families, offering them a second chance at life and
                strengthening the healthcare system as a whole.
              </p>
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default LandingPage;
