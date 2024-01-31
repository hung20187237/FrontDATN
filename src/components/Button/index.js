import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import {
  ButtonCircleCustom,
  ButtonCircleDisableCustom,
  ButtonCustom,
  ButtonCustomGray,
  ButtonCustomWhite,
  ButtonFilterCustom
} from './styles';
import SvgIcon from '../../images/SvgIcon';

const Button = props => {
  const dataProps = { ...props };
  const {
    iconName,
    children,
    btnType = '',
    // className,
    // clsName,
    size,
    // minWidthDefault,
    disabled,
    onClick,
    allowDisabled,
    // styleIcon,
    color,
    isLoading,
  } = props;
  // delete dataProps.btnType;
  delete dataProps.className;
  // delete dataProps.clsName;
  // delete dataProps.iconName;
  delete dataProps.size;
  // delete dataProps.minWidthDefault;
  delete dataProps.disabled;
  delete dataProps.onClick;
  delete dataProps.allowDisabled;
  if (btnType === 'btn-circle')
    return (
      <ButtonCircleCustom color={color} size={size} onClick={!disabled && onClick} disabled={allowDisabled} {...dataProps}>
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonCircleCustom>
    );
  if (btnType === 'btn-disable')
    return (
      <ButtonCircleDisableCustom
        color={color}
        size={size}
        onClick={!allowDisabled && onClick}
        allowDisabled={allowDisabled}
        {...dataProps}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonCircleDisableCustom>
    );

  if (btnType === 'filter')
    return (
      <ButtonFilterCustom
        color={color}
        size={size}
        onClick={!disabled && onClick}
        disabled={allowDisabled}
        {...dataProps}
        loading={isLoading}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonFilterCustom>
    );
  if (btnType === 'bg-white')
    return (
      <ButtonCustomWhite
        color={color}
        size={size}
        onClick={!disabled && onClick}
        disabled={allowDisabled}
        {...dataProps}
        loading={isLoading}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonCustomWhite>
    );
  if (btnType === 'gray')
    return (
      <ButtonCustomGray
        type="primary"
        color={color}
        size={size}
        onClick={!disabled && onClick}
        disabled={allowDisabled}
        loading={isLoading}
        {...dataProps}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonCustomGray>
    );
  return (
    <ButtonCustom
      type="primary"
      color={color}
      size={size}
      onClick={!disabled && onClick}
      disabled={allowDisabled}
      {...dataProps}
      loading={isLoading}
    >
      {!isEmpty(iconName) && <SvgIcon name={iconName} />}
      {!isEmpty(children) && <span>{children}</span>}
    </ButtonCustom>
  );
};
Button.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.element,
  btnType: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  allowDisabled: PropTypes.bool,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
