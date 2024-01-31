import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FlWrapper, DatepickerCustom, Label, RedStar } from './style';
const FloatingDatePicker = props => {
  const {
    label,
    disabled,
    isRequired,
    bgcolor,
    defaultValueInput,
    fixlabel,
    onFocus,
    onBlur,
    value,
    autoFocus,
    allowClear,
    checkpropsPL,
    id,
  } = props;
  const FlRef = useRef(null);
  const inputRef = useRef(null);

  const [isFl, setFl] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const dataProps = { ...props };
  delete dataProps.label;
  delete dataProps.className;
  delete dataProps.defaultValueInput;
  delete dataProps.isRequired;
  delete dataProps.isPass;
  useEffect(() => {
    const inputDom = FlRef.current && (FlRef.current.querySelector('input') || FlRef.current.querySelector('textarea'));
    const valueEmptySelect = FlRef.current && FlRef.current.querySelector('.ant-select-selection-placeholder');

    inputDom.addEventListener(
      'focus',
      () => {
        setFl(true);
      },
      false,
    );

    inputDom.onclick = () => {
      setFl(true);
    };

    inputDom.onblur = () => {
      const valueSelect = FlRef.current && FlRef.current.querySelector('.ant-select-selection-item');
      const valueInput = inputDom.getAttribute('value') || FlRef.current.querySelector('textarea');
      setFl(!!valueSelect || !!valueInput);
    };

    if (valueEmptySelect) {
      setFl(false);
    }
    if (autoFocus) FlRef.current.focus();
    return () => {
      inputDom.removeEventListener(
        'focus',
        () => {
          setFl(true);
        },
        false,
      );
    };
  }, []);

  useEffect(() => {
    const inputDom = FlRef.current && (FlRef.current.querySelector('input') || FlRef.current.querySelector('textarea'));
    const valueSelection = FlRef.current && FlRef.current.querySelector('.ant-select-selection-item');
    const valueInput = inputDom.getAttribute('value');

    setTimeout(() => {
      if (inputDom.getAttribute('value')) {
        setFl(true);
      }
    });

    if (valueSelection || valueInput || document.activeElement === inputDom) {
      setFl(true);
    }
  });

  const dataElement = { ...props };
  delete dataElement.label;
  delete dataElement.isRequired;
  delete dataElement.bgcolor;
  return (
    <FlWrapper
      disabled={disabled}
      placeholder={!checkpropsPL ? dataProps.placeholder : undefined}
      isFocus={isFocus}
      ref={FlRef}
    >
      <DatepickerCustom
        ref={inputRef}
        onFocus={() => {
          setIsFocus(true);
          if (onFocus) onFocus();
        }}
        onBlur={() => {
          setIsFocus(false);
          if (onBlur) onBlur();
        }}
        className="formControl"
        placeholder=" "
        defaultValue={defaultValueInput}
        {...dataProps}
        EyeInvisibleOutlined
        allowClear={allowClear}
        iconRender={visible => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
      />
      {!!label && (
        <Label
          isPass
          onClick={() => inputRef.current.focus()}
          bgcolor={disabled && !isFocus && !isFl && !fixlabel && !value ? 'transparent' : bgcolor}
          isFl={dataProps.placeholder || isFl || !!fixlabel || !!value}
          className="fl-label"
          style={{ color: disabled && '#A8B1BD' }}
          id={id}
        >
          {label}
          {isRequired && <RedStar> *</RedStar>}
        </Label>
      )}
    </FlWrapper>
  );
};

FloatingDatePicker.propTypes = {
  label: PropTypes.string,
  bgcolor: PropTypes.string,
  isRequired: PropTypes.bool,
  fixlabel: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  defaultValueInput: PropTypes.string,
  isPass: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  textArea: PropTypes.bool,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  checkpropsPL: PropTypes.bool,
  allowClear: PropTypes.bool,
  id: PropTypes.string,
};

FloatingDatePicker.defaultProps = {
  label: undefined,
  bgcolor: 'white',
  isRequired: false,
  fixlabel: false,
  children: null,
};

export default FloatingDatePicker;
