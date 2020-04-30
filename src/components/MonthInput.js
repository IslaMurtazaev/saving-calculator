import React  from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { getFormattedDate, isSameMonth } from "./utils";


const MonthInput = ({ date, setDate, label, onlyFuture }) =>  {
  const shiftMonth = shift => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + shift);
    if (onlyFuture && isSameMonth(newDate)) {
      return;
    }
    setDate(newDate)
  };

  return (
    <>
      <label className="input-label">{label}</label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend className="clickable" onClick={() => shiftMonth(-1)}>
          <InputGroup.Text>&lt;</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl className="rm-right-b rm-left-b" value={getFormattedDate(date, ',')} readOnly />
        <InputGroup.Append className="clickable" onClick={() => shiftMonth(1)}>
          <InputGroup.Text>&gt;</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default MonthInput;
