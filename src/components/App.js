import React, { useState } from 'react';
import TotalAmountCalculator from "./TotalAmountCalculator";
import MonthlyAmountCalculator from "./MonthlyAmountCalculator";
import {Card, Col, Container, Row} from "react-bootstrap";

const App = () => {
  const [byTotalAmount, switchMode] = useState(true);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col lg="4" className="calculator-col nopadding">
          <header className="navbar">
            <img className="clickable" src={require("../assets/images/back.png")} alt="go back" />
            <span>Let's plan your saving goal</span>
          </header>
          <Card className="calculator">
            <Card.Body>
              <Card.Title className="calculator-title">Savings calculator</Card.Title>
              <div className="switch-block mb-3">
                <label className="switch mr-2">
                  <input onChange={() => switchMode(!byTotalAmount)} checked={byTotalAmount} type="checkbox"/>
                  <span className="slider round" />
                </label>
                <span>Calculate by {byTotalAmount ? "total amount" : "monthly saving"}</span>
              </div>
              {byTotalAmount ? <TotalAmountCalculator /> : <MonthlyAmountCalculator />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
