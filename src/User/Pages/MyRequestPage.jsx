import React from 'react'
import { Table, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MyRequestPage() {
  return (
    <>
   
 

    <Card>
      <Card.Body>
        <Card.Title className="mb-3 text-center">My Blood Requests</Card.Title>
 <Link to="/user-dashboard"
  variant="secondary" className="mb-3 mt-6">
 ← Back
    </Link>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Blood Group</th>
              <th>Request Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>A+</td>
              <td>10 Jan 2026</td>
              
            </tr>
            <tr>
              <td>B+</td>
              <td>05 Jan 2026</td>
             
            </tr>
            <tr>
              <td>O-</td>
              <td>28 Dec 2025</td>
              
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default MyRequestPage