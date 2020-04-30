import React  from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CalculationResult = ({ label, value, children }) => (
  <Card className="result">
    <Card.Body>
      <Row className="justify-content-between align-items-center">
        <Col>{label}</Col><Col className="result-num text-right">${value}</Col>
      </Row>
    </Card.Body>
    <Card.Footer>
      <p className="mb-0">
        {children}
      </p>
    </Card.Footer>
  </Card>
);

export default CalculationResult;
