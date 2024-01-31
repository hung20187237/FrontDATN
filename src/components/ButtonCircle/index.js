import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

import Button from '../Button';

ButtonCircle.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.element,
  enable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  clsName: PropTypes.string,
  placement: PropTypes.string,
  btnType: PropTypes.string,
  isLoading: PropTypes.bool,
  allowDisabled: PropTypes.bool,
  children: PropTypes.element,
  size: PropTypes.string,
};

ButtonCircle.defaultProps = {
  placement: 'bottomRight',
  btnType: 'btn-circle',
};

export default function ButtonCircle(props) {
  const {
    title,
    iconName,
    enable,
    onClick,
    className,
    clsName,
    placement,
    btnType,
    isLoading,
    children,
    allowDisabled,
    size,
    icon
  } = props;

  return (
    <Tooltip placement={placement} mouseLeaveDelay={0} title={title} overlayStyle={{ maxWidth: 500 }}>
      <Button
        icon={icon}
        btnType={btnType}
        shape="circle"
        iconName={iconName}
        className={className}
        clsName={clsName}
        disabled={!enable}
        isLoading={isLoading}
        children={children}
        allowDisabled={allowDisabled}
        onClick={e => {
          e.stopPropagation();
          // eslint-disable-next-line no-unused-expressions
          !!onClick && onClick();
        }}
        size={size}
      />
    </Tooltip>
  );
}
