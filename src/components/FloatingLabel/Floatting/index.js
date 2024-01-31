import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, FloatLabel, Label } from './style';

const Floating = ({ children, label, value }) => {
  const [focus, setFocus] = useState(false);
  return (
    <FloatLabel
      onBlur={() => {
        setFocus(false);
      }}
      onFocus={() => {
        setFocus(true);
      }}
    >
      {children}
      {focus || (value && value.length !== 0) ? <FloatingLabel>{label}</FloatingLabel> : <Label>{label}</Label>}
    </FloatLabel>
  );
};

Floating.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Floating;
