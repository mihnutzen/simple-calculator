import * as helpers from './calculator';

import { OperationsList } from '../types/calculator';

describe('getIsSelectedOperation', () => {
  it('should return true when operation matches selection', () => {
    const result = helpers.getIsSelectedOperation(OperationsList.Addition, OperationsList.Addition);

    expect(result).toBeTruthy();
  });

  it('should return false when operation is equal', () => {
    const result = helpers.getIsSelectedOperation(OperationsList.Equal, OperationsList.Equal);

    expect(result).toBeFalsy();
  });

  it('should return false when operation and selection dont match', () => {
    const result = helpers.getIsSelectedOperation(OperationsList.Multiply, OperationsList.Addition);

    expect(result).toBeFalsy();
  });
});

describe('getCurrentValue', () => {
  it('should return updated value with new number added at the end', () => {
    const result = helpers.getCurrentValue('1', 2);

    expect(result).toEqual('12');
  });

  it('should return updated value when current number is 0', () => {
    const result = helpers.getCurrentValue('0', 2);

    expect(result).toEqual('2');
  });

  it('should return updated value when current number is 0 is new number is .', () => {
    const result = helpers.getCurrentValue('0', '.');

    expect(result).toEqual('0.');
  });
});

describe('getDisplayValue', () => {
  it('should return current value', () => {
    const result = helpers.getDisplayValue('0', '1');

    expect(result).toEqual('1');
  });

  it('should return current prev', () => {
    const result = helpers.getDisplayValue('1', '0');

    expect(result).toEqual('1');
  });
});

describe('getNegated', () => {
  it('should return negated value', () => {
    const result = helpers.getNegated('1');

    expect(result).toEqual('-1');
  });

  it('should return 0 when there is nothing to negate', () => {
    const result = helpers.getNegated('0');
    const result2 = helpers.getNegated('0.');

    expect(result).toEqual('0');
    expect(result2).toEqual('0');
  });
});

describe('getAddition', () => {
  it('should return sum of 2 numbers', () => {
    const result = helpers.getAddition(1, 2);

    expect(result).toEqual(3);
  });
});

describe('getDivision', () => {
  it('should return division of 2 numbers', () => {
    const result = helpers.getDivision(2, 4);

    expect(result).toEqual(2);
  });
});

describe('getMultiplication', () => {
  it('should return multiplication of 2 numbers', () => {
    const result = helpers.getMultiplication(2, 3);

    expect(result).toEqual(6);
  });
});

describe('getSubtraction', () => {
  it('should return subtraction of 2 numbers', () => {
    const result = helpers.getSubtraction(2, 3);

    expect(result).toEqual(1);
  });
});

describe('getCalculation', () => {
  beforeEach(() => {
    jest.spyOn(helpers, 'getAddition');
    jest.spyOn(helpers, 'getDivision');
    jest.spyOn(helpers, 'getMultiplication');
    jest.spyOn(helpers, 'getSubtraction');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it(`should call correct helper when operation is ${OperationsList.Addition}`, () => {
    helpers.getCalculation('1', '2', OperationsList.Addition);

    expect(helpers.getAddition).toHaveBeenCalledWith(1, 2);
  });

  it(`should call correct helper when operation is ${OperationsList.Divide}`, () => {
    helpers.getCalculation('1', '2', OperationsList.Divide);

    expect(helpers.getDivision).toHaveBeenCalledWith(1, 2);
  });

  it(`should call correct helper when operation is ${OperationsList.Multiply}`, () => {
    helpers.getCalculation('1', '2', OperationsList.Multiply);

    expect(helpers.getMultiplication).toHaveBeenCalledWith(1, 2);
  });

  it(`should call correct helper when operation is ${OperationsList.Subtract}`, () => {
    helpers.getCalculation('1', '2', OperationsList.Subtract);

    expect(helpers.getSubtraction).toHaveBeenCalledWith(1, 2);
  });
});
