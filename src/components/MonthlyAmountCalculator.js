import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DollarInput from "./DollarInput";
import MonthInput from "./MonthInput";
import { getDefaultDate, getFormattedDate, getFormattedNum } from "./utils";
import CalculationResult from "./CalculationResult";


const MonthlyAmountCalculator = () => {
  const [monthlySaving, setMonthlySaving] = useState(960);
  const [saveUntil, setSaveUntil] = useState(getDefaultDate());
  const [savingPlan, setSavingPlan] = useState(null);

  const calculateSavingPlan = () => {
    const currentDate = new Date();
    const yearsDiff = saveUntil.getFullYear() - currentDate.getFullYear();
    const monthDiff = yearsDiff * 12 + (saveUntil.getMonth() - currentDate.getMonth());
    const accumulated = monthlySaving * monthDiff

    setSavingPlan([getFormattedNum(accumulated), getFormattedNum(monthlySaving), getFormattedDate(saveUntil)]);
  };

  return (
    <>
      <DollarInput label="Monthly amount" value={monthlySaving} setValue={setMonthlySaving} />
      <MonthInput label="Save until" date={saveUntil} setDate={setSaveUntil} onlyFuture={true} />
      {savingPlan &&
        <CalculationResult label="Total amount" value={savingPlan[0]}>
          You are saving <b>${savingPlan[1]} monthly</b> to save <b>${savingPlan[0]}</b> by <b>{savingPlan[2]}</b>.
        </CalculationResult>
      }
      <Button block className="mt-4" onClick={calculateSavingPlan}>Finish</Button>
    </>
  );
};

export default MonthlyAmountCalculator;
