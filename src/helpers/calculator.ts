import { evaluate } from 'mathjs'

import { OperationsList, NumOpt, OperationsSigns2 } from '../types/calculator';

export const getIsSelectedOperation = (op: OperationsList, selection: OperationsList | undefined) => {
  return op === selection && selection !== OperationsList.Equal;
}

export const getCurrentValue = (current: string, number: NumOpt) => {
  if (current !== '0') {
    return current + number;
  }

  if (current === '0' && number !== '.') {
    return number + '';
  }

  return current + number;
}

export const getNegated = (val: string) => {
  if (val[0] === '0' && val.length < 3) {
    return val[0];
  }

  return val[0] === '-' ? val.substring(1) : '-' + val;
}

export const getIsPriority = (op: OperationsList) => [OperationsList.Multiply, OperationsList.Divide].includes(op);

export const isOperationAtEnd = (calculation: any[]) => {
  return isOperation(calculation[calculation.length - 1]);
}

export const isOperation = (op: OperationsList) => {
  return Object.values(OperationsList).includes(op);
}

export const getSign = (op: OperationsList) => {
  return OperationsSigns2[op];
}

export const getResult = (calculation: any[]) => {
  const parsedCalculation = calculation.reduce((acc, step) => {
    if (isOperation(step)) {
      return acc + ' ' + getSign(step);
    }

    return acc + ' ' + step;
  }, '');

  return evaluate(parsedCalculation);
}