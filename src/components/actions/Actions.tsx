import React from 'react';

import { ActionsList, ActionsSigns } from '../../types/calculator';

import './Actions.scss';

const CLEAR = {
  key: ActionsList.Clear,
  sign: ActionsSigns.Clear,
  helper: 'Clear (Esc)'
};

const NEGATE = {
  key: ActionsList.Negate,
  sign: ActionsSigns.Negate,
  helper: 'Negate the displayed value'
};

const PERCENT = {
  key: ActionsList.Percent,
  sign: ActionsSigns.Percent,
  helper: 'Percent (or press %)'
}

const ACTIONS = [CLEAR, NEGATE, PERCENT];

interface ActionsProps {
  onAction: (act: ActionsList) => void;
}

const Actions = ({ onAction }: ActionsProps) => (
  <div className="Actions">
      {ACTIONS.map(({ key, sign, helper }) => (
        <button onClick={() => onAction(key)} key={key} title={helper}>{sign}</button>
      ))}
  </div>
);

export default Actions;