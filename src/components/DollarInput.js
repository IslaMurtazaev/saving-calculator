import React  from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const DollarInput = ({ value, setValue }) => (
  <div>
    <label className="input-label">Total amount</label>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>$</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl className="amount-input rm-left-b" value={value} onChange={e => setValue(e.target.value)} />
    </InputGroup>
  </div>
);

export default DollarInput;
