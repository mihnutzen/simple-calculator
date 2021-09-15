import React from 'react';

import { NumOpt } from '../../types/calculator';

import './Numbers.scss';

interface NumbersProps {
  onNumber: (nr: NumOpt) => void;
}

const Numbers = ({ onNumber }: NumbersProps) => {
  const numbers = Array.from(Array(10).keys());

  return (
    <div className="Numbers">
        {numbers.map((nr) => <button onClick={() => onNumber(nr)} key={nr}>{nr}</button>)}
        <button onClick={() => onNumber('.')}>.</button>
    </div>
  );
}

export default Numbers;