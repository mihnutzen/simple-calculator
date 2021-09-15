import React from 'react';

import { NumOpt, ActionsList, OperationsList } from '../types/calculator';

import { getCurrentValue, getNegated, getDisplayValue, getCalculation } from '../helpers/calculator';

import Numbers from '../components/numbers/Numbers';
import Operations from '../components/operations/Operations';
import Actions from '../components/actions/Actions';
import Display from '../components/display/Display';

import './Calculator.scss';

const Calculator = () => {
  const [operation, setOperation] = React.useState<OperationsList>();
  const [currentValue, setCurrentValue] = React.useState<string>('0');
  const [prevValue, setPrevValue] = React.useState<string>('0');

  const handleClear = () => {
    setCurrentValue('0');
    setPrevValue('0');
    setOperation(undefined);
  }

  const handleNegate = () => {
    const negated = getNegated(currentValue);

    setCurrentValue(negated);
  }

  const handleOperation = (op: OperationsList) => {
    let result = currentValue;

    if (operation) {
      result = getCalculation(currentValue, prevValue, operation);
    }

    if (op !== OperationsList.Equal) {
      setOperation(op);
      setPrevValue(result);
      setCurrentValue('0');
    } else {
      setOperation(undefined);
      setPrevValue('0');
      setCurrentValue(result);
    }
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
    const newValue = getCurrentValue(currentValue, number);

    setCurrentValue(newValue);
  }

  return (
    <div className="Calculator">
      <Display value={getDisplayValue(prevValue, currentValue)} />
      <Actions onAction={handleAction} />
      <Operations onOperation={handleOperation} selectedOperation={operation} />
      <Numbers onNumber={handleNumber} />
    </div>
  );
}

export default Calculator;