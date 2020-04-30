import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import DollarInput from "./DollarInput";
import MonthInput from "./MonthInput";
import { getFormattedDate } from "./utils";

const getDefaultDate = () => {
  const currentDate = new Date();
  currentDate.setDate(1);
  currentDate.setFullYear(currentDate.getFullYear() + 2);
  return currentDate;
};

const TotalAmountCalculator = () => {
  const [goal, setGoal] = useState(25000);
  const [reachBy, setReachBy] = useState(getDefaultDate());
  const [savingPlan, setSavingPlan] = useState(null);

  const calculateSavingPlan = () => {
    const currentDate = new Date();
    const yearsDiff = reachBy.getFullYear() - currentDate.getFullYear();
    const monthDiff = yearsDiff * 12 + (reachBy.getMonth() - currentDate.getMonth());
    const monthlyDeposit = Math.floor(goal / monthDiff * 100) / 100;

    setSavingPlan([monthDiff, monthlyDeposit, goal, getFormattedDate(reachBy)]);
  };

  return (
    <div>
      <div>
        <DollarInput value={goal} setValue={setGoal} />
        <MonthInput date={reachBy} setDate={setReachBy} />
      </div>
      {savingPlan &&
        <Card className="result">
          <Card.Body>
            <Row className="justify-content-between align-items-center">
              <Col>Monthly Amount</Col><Col className="result-num text-right">${savingPlan[1]}</Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <p className="mb-0">
              You are planning <b>{savingPlan[0]} monthly</b> deposits to reach your <b>${savingPlan[2]}</b> goal
              by <b>{savingPlan[3]}</b>.
            </p>
          </Card.Footer>
        </Card>
      }
      <Button block className="mt-4" onClick={calculateSavingPlan}>Finish</Button>
    </div>
  );
};

export default TotalAmountCalculator;
