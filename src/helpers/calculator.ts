import { OperationsList, NumOpt } from '../types/calculator';

import * as self from './calculator';


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

export const getDisplayValue = (prev: string, current: string) => {
  if (prev !== '0' && current === '0') {
    return prev;
  }

  return current;
}

export const getNegated = (val: string) => {
  if (val[0] === '0' && val.length < 3) {
    return val[0];
  }

  return val[0] === '-' ? val.substring(1) : '-' + val;
}

export const getAddition = (val1: number, val2: number) => val1 + val2;
export const getDivision = (val1: number, val2: number) => val2 / val1;
export const getMultiplication = (val1: number, val2: number) => val1 * val2;
export const getSubtraction = (val1: number, val2: number) => val2 - val1;

export const getCalculation = (val1: string, val2: string, op: OperationsList | undefined) => {
  const operationsMap = {
    [OperationsList.Addition]: self.getAddition,
    [OperationsList.Divide]: self.getDivision,
    [OperationsList.Multiply]: self.getMultiplication,
    [OperationsList.Subtract]: self.getSubtraction,
    [OperationsList.Equal]: () => {},
  }

  if (op) {
    return operationsMap[op](parseFloat(val1), parseFloat(val2)) + '';
  }

  return val2;
}