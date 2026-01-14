import React from 'react'
import Card from 'react-bootstrap/Card';

function LandingPage() {
  return (
    <>
   <div className="mt-5 mb-5 d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '700px', width: '100%' }}>
        <h3 className="text-danger text-center mb-3">
          About Our Page
        </h3>

        <p className="text-muted">
          This is our Blood Bank Management System page. It is designed to show
          blood availability and donor information in a simple and clear way.
        </p>

        <p className="text-muted">
          This page is developed using React and React-Bootstrap for the user interface,
          with JSON Server used to manage the data.
        </p>

        <p className="text-muted">
          The main goal of this page is to help manage blood bank records easily
          and provide quick access to important information.
        </p>
      </Card>
    </div>


  
    </>
  )
}

export default LandingPage