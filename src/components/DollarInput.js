import React  from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { getFormattedNum, stripCommas } from "./utils";

const DollarInput = ({ value, setValue, label }) => {
  const getValidatedNum = num => {
    num = stripCommas(num);
    return isNaN(num) ? value : num;
  };

  return (
    <>
      <label className="input-label">{label}</label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="amount-input rm-left-b"
          value={getFormattedNum(value)}
          onChange={e => setValue(getValidatedNum(e.target.value))} />
      </InputGroup>
    </>
  );
};

export default DollarInput;
