import React from 'react';

import './Display.scss';

const Display = ({ value = '0' }) => (
  <div className="Display">{value}</div>
);

export default Display;