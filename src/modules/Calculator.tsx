import React from 'react';

import { NumOpt, ActionsList, OperationsList } from '../types/calculator';

import { getCurrentValue, getNegated, isOperationAtEnd, getResult } from '../helpers/calculator';

import Numbers from '../components/numbers/Numbers';
import Operations from '../components/operations/Operations';
import Actions from '../components/actions/Actions';
import Display from '../components/display/Display';

import './Calculator.scss';

const Calculator = () => {
  const [operation, setOperation] = React.useState<OperationsList>();
  const [currentValue, setCurrentValue] = React.useState<string>('0');
  const [calculation, setCalculation] = React.useState<any[]>(['0']);

  const handleClear = () => {
    setCurrentValue('0');
    setCalculation(['0']);
    setOperation(undefined);
  }

  const handleNegate = () => {
    const negated = getNegated(currentValue);

    if (isOperationAtEnd(calculation)) {
      const op = calculation.pop();
      calculation.pop();
      setCalculation([...calculation, negated, op]);
    } else {
      calculation.pop();
      setCalculation([...calculation, negated]);
    }


    setCurrentValue(negated);
  }

  const handleOperation = (op: OperationsList) => {
    if (isOperationAtEnd(calculation)) {
      calculation.pop();
    }

    setCalculation([...calculation, op]);
    setOperation(op);
    setCurrentValue(getResult(calculation));
  }

  const handleAction = (act: ActionsList) => {
    const actionsMap = {
      [ActionsList.Clear]: handleClear,
      [ActionsList.Negate]: handleNegate,
      [ActionsList.Percent]: () => {},
    }

    actionsMap[act]();
  }

  const handleNumber = (number: NumOpt) => {
    let newValue;
    if (isOperationAtEnd(calculation)) {
      newValue = getCurrentValue('0', number);
    } else {
      newValue = getCurrentValue(calculation.pop(), number);
    }

    setCurrentValue(newValue);
    setCalculation([...calculation, newValue]);
  }

  return (
    <div className="Calculator">
      <Display value={currentValue} />
      <Actions onAction={handleAction} />
      <Operations onOperation={handleOperation} selectedOperation={operation} />
      <Numbers onNumber={handleNumber} />
    </div>
  );
}

export default Calculator;