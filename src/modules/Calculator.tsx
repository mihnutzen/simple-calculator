import React from 'react';

import { NumOpt, ActionsList, OperationsList, KeysToOp, OperationsSigns } from '../types/calculator';

import {
  getCurrentValue,
  getNegated,
  getDisplayValue,
  getCalculation,
  isSimple,
} from '../helpers/calculator';

import { useKeyPress } from '../hook/hooks';

import Numbers from '../components/numbers/Numbers';
import Operations from '../components/operations/Operations';
import Actions from '../components/actions/Actions';
import Display from '../components/display/Display';

import './Calculator.scss';

const Calculator = () => {
  const [operation, setOperation] = React.useState<OperationsList>();
  const [currentValue, setCurrentValue] = React.useState<string>('0');
  const [prevValue, setPrevValue] = React.useState<string>('0');
  const [cached, setCache] = React.useState<[string, OperationsList]>();

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
      if (isSimple(operation) && !isSimple(op)) {
        setCache([prevValue, operation]);
      } else if (isSimple(op) && cached && cached.length) {
        result = getCalculation(currentValue, prevValue, operation);
        result = getCalculation(result, cached[0], cached[1]);
        setCache(undefined);
      } else {
        result = getCalculation(currentValue, prevValue, operation);
      }
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
  };

  const handleKeysOperation = (key: OperationsSigns) => {
    const op = KeysToOp[key] as OperationsList;

    handleOperation(op);
  }

  const handleAction = (act: ActionsList) => {
    const actionsMap = {
      [ActionsList.Clear]: handleClear,
      [ActionsList.Negate]: handleNegate,
      [ActionsList.Percent]: () => {},
    }

    actionsMap[act]();
  };

  const handleNumber = (number: NumOpt) => {
    const newValue = getCurrentValue(currentValue, number);

    setCurrentValue(newValue);
  };

  useKeyPress(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], handleNumber);
  useKeyPress(['+', '-', '=', 'Enter', '*', '/'], handleKeysOperation);

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