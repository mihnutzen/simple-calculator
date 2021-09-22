export enum OperationsList {
  Divide = 'divide',
  Multiply = 'multiply',
  Subtract = 'subtract',
  Addition = 'addition',
  Equal = 'equal'
}

export enum OperationsSigns {
  Divide = '/',
  Multiply = '*',
  Subtract = '-',
  Addition = '+',
  Equal = '='
}

export enum OperationsSigns2 {
  divide = '/',
  multiply = '*',
  subtract = '-',
  addition = '+',
  equal = '='
}

export enum ActionsList {
  Clear = 'clear',
  Negate = 'negate',
  Percent = 'percent'
}

export enum ActionsSigns {
  Clear = 'AC',
  Negate = '±',
  Percent = '%'
}

export type NumOpt = number | '.'