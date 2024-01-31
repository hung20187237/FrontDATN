import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonCustom = styled(Button)`
  border-radius: 12px !important;
  display: flex !important;
  gap: 0 8px;
  align-items: center;
  font-weight: 600;
  line-height: 19px;
  justify-content: center;
  height: 40px !important;
  background: ${props => props.theme.primaryColor} !important;
  border-color: ${props => props.theme.primaryColor} !important;
  color: ${props => props.color || 'white'};

  :hover {
    opacity: 0.8;
  }
`;

export const ButtonCustomWhite = styled(Button)`
  border-radius: 12px !important;
  display: flex !important;
  gap: 0 8px;
  align-items: center;
  font-weight: 600;
  line-height: 19px;
  justify-content: center;
  height: 40px !important;
  background: #ffffff !important;
  border-color: ${props => props.theme.primaryColor} !important;
  color: ${props => props.theme.primaryColor};
  :hover {
    opacity: 0.8;
  }
  &:hover {
    color: ${props => props.theme.primaryColor} !important;
  }
`;

export const ButtonCustomGray = styled(Button)`
  border-radius: 12px !important;
  display: flex !important;
  gap: 0 8px;
  align-items: center;
  font-weight: 600;
  line-height: 19px;
  justify-content: center;
  height: 40px !important;
  background: ${props => props.theme.colors.gray} !important;
  border-color: ${props => props.theme.colors.gray} !important;
  color: ${props => props.color || 'white'};

  :hover {
    opacity: 0.8;
  }
`;

export const ButtonCircleCustom = styled(Button)`
  border-radius: 50% !important;
  border: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
  height: ${props => (props.size ? '24px' : '36px')} !important;
  width: ${props => props.size || '36px'} !important;
  min-width: ${props => props.size || '36px'} !important;
  .icon svg {
    height: 24px;
    width: 24px;
  }
  &:hover {
    background: #f1f3f5 !important;
  }
  &.zoomIn svg {
    animation-name: zoomIn;
    animation-duration: 0.5s;
  }
  [ant-click-animating-without-extra-node='true']::after {
    display: none;
  }
`;
export const ButtonCircleDisableCustom = styled(Button)`
  border-radius: 50% !important;
  border: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
  height: ${props => (props.size ? '24px' : '36px')} !important;
  width: ${props => props.size || '36px'} !important;
  min-width: ${props => props.size || '36px'} !important;
  cursor: not-allowed;
  .icon svg {
    height: 24px;
    width: 24px;
  }
  &:hover {
    background: transparent !important;
  }
  &.zoomIn svg {
    animation-name: zoomIn;
    animation-duration: 0.5s;
  }
  [ant-click-animating-without-extra-node='true']::after {
    display: none;
  }
`;

export const ButtonFilterCustom = styled(ButtonCustom)`
  width: 40px !important;
`;
