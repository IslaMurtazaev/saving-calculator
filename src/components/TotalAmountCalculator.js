import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DollarInput from "./DollarInput";
import MonthInput from "./MonthInput";
import { getDefaultDate, getFormattedDate } from "./utils";
import CalculationResult from "./CalculationResult";

const TotalAmountCalculator = () => {
  const [goal, setGoal] = useState(25000);
  const [reachBy, setReachBy] = useState(getDefaultDate());
  const [savingPlan, setSavingPlan] = useState(null);

  const calculateSavingPlan = () => {
    const currentDate = new Date();
    const yearsDiff = reachBy.getFullYear() - currentDate.getFullYear();
    const monthDiff = yearsDiff * 12 + (reachBy.getMonth() - currentDate.getMonth());
    const monthlyDeposit = Math.floor(goal / monthDiff * 100) / 100;

    setSavingPlan([monthlyDeposit, monthDiff, goal, getFormattedDate(reachBy)]);
  };

  return (
    <>
      <DollarInput label="Total amount" value={goal} setValue={setGoal} />
      <MonthInput label="Reach goal by" date={reachBy} setDate={setReachBy} />
      {savingPlan &&
        <CalculationResult label="Monthly Amount" value={savingPlan[0]}>
          You are planning <b>{savingPlan[1]} monthly</b> deposits to reach your <b>${savingPlan[2]}</b> goal
          by <b>{savingPlan[3]}</b>.
        </CalculationResult>
      }
      <Button block className="mt-4" onClick={calculateSavingPlan}>Finish</Button>
    </>
  );
};

export default TotalAmountCalculator;
