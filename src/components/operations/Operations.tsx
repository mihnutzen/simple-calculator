import React from 'react';
import classNames from 'classnames';

import { getIsSelectedOperation } from '../../helpers/calculator';
import { OperationsList, OperationsSigns } from '../../types/calculator';

import './Operations.scss';

const DIVIDE = {
  key: OperationsList.Divide,
  sign: OperationsSigns.Divide,
  helper: 'Divide (or press /)'
};

const MULTIPLY = {
  key: OperationsList.Multiply,
  sign: OperationsSigns.Multiply,
  helper: 'Multiply (or press *)'
};

const SUBTRACT = {
  key: OperationsList.Subtract,
  sign: OperationsSigns.Subtract,
  helper: 'Subtract (or press -)'
};

const ADDITION = {
  key: OperationsList.Addition,
  sign: OperationsSigns.Addition,
  helper: 'Add (or press +)'
};

const EQUAL = {
  key: OperationsList.Equal,
  sign: OperationsSigns.Equal,
  helper: 'Equal (or press Return)'
};

const OPERATIONS = [DIVIDE, MULTIPLY, SUBTRACT, ADDITION, EQUAL];

interface OperationsProps {
  onOperation: (op: OperationsList) => void;
  selectedOperation?: OperationsList;
}

const Operations = ({ onOperation, selectedOperation }: OperationsProps) => (
  <div className="Operations">
      {OPERATIONS.map(({ key, sign, helper }) => (
        <button
          className={classNames({ selected: getIsSelectedOperation(key, selectedOperation) })}
          onClick={() => onOperation(key)} key={key}
          title={helper}
        >
          {sign}
        </button>
      ))}
  </div>
);

export default Operations;