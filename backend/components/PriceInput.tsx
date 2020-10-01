import React, { useRef } from 'react'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

interface Props {
  type: string;
  value: string;
  onChange: void;
  inputComponen: any;
}
const formatMoney = Intl.NumberFormat('FIN', {
  style: 'currency',
  currency: 'EUR'
}).format;
const createPatchFrom = (value) => {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const PriceInput = ({ type, value, onChange, inputComponent }: Props) => {
  console.log(inputComponent);

  return (
    <div>
      <h3>{type.title} - {value ? formatMoney(value / 100) : 0}</h3>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={event => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  )
}

export default PriceInput
