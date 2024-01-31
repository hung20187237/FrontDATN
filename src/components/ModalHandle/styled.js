import styled from 'styled-components';
import { Modal, Button } from 'antd';

export const ModalWrapper = styled(Modal)`
  .ant-modal-root .ant-modal-header {
    background-color: ${props => props.theme.colors.modal.background};
  }
  [class*='ant-modal-header'] {
    justify-content: flex-start !important;
  }
  .ant-modal-content {
    border-radius: 12px;
    width: 100%;
    height: 100%;
  }
  &.ant-modal{
    max-width: 100%;
    max-height: 100vh;
  }
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-footer {
    padding-bottom: 20px;
    border-top: none;
    //margin-top: -18px;
  }

  .ant-modal-close-x {
    cursor: pointer;
    width: 45px;
    height: 45px;
    line-height: 45px;
    //color: ${props => props.theme.colors.white};
    color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:focus {
    outline: none;
  }

`;

export const DivFooter = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  font-size: 1.07142em;
  line-height: 20px;
  align-items: center;
`;

export const ModalTitle = styled.div`
  height: 45px;
  // background: ${props => props.theme.primaryColor};
  // border: 1px solid ${props => props.theme.primaryColor};
  background: ${props => props.theme.colors.table.whiteBlue};
  border: 1px solid ${props => props.theme.colors.table.whiteBlue};
  border-radius: 11px 11px 0 0;
  display: flex;
  position: relative;
  padding: 14px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.14285em;
  line-height: 20px;
  //color: ${props => props.theme.colors.white};
  color: ${props => props.theme.primaryColor};
  justify-content: center;
  align-items: center;
`;

const ButtonFooter = styled(Button)`
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 12px;
  color: ${props => props.theme.primaryColor};
  justify-content: center;
  line-height: 19px;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 16px;
  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.primaryColor};
  }
  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }
  &.ant-btn-primary,
  &.ant-btn {
    border-color: ${props => props.theme.primaryColor};
  }
`;

export const StyleButtonClose = styled(ButtonFooter)`
  height: 40px;
`;

export const disableButton = styled(ButtonFooter)`
  height: 40px;
  border-color: #626262;
`

export const ButtonSave = styled(ButtonFooter)`
  border-color: ${props => (props.disable ? props.theme.colors.disableColor : props.theme.primaryColor)} !important;
  background-color: ${props => (props.disable ? props.theme.colors.disableColor : props.theme.primaryColor)} !important;
  color: ${props => props.theme.colors.white};

  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.colors.white};
  }
`;
