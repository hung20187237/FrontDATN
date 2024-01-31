import styled from 'styled-components';
import { Input } from 'antd';
export const InputFieldWrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  gap: 0 16px;

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-right-width: 0 !important;
  }
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    box-shadow: none !important;
  }
`;

export const SearchCustom = styled.div`
  width: 700px !important;
  border: none !important;
`;

export const InputCustom = styled(Input)`
  background-color: transparent;
  font-size: 14px;

  &.ant-input-affix-wrapper {
    border: 1px solid #c5ced9 !important;
    height: 40px;
    border-radius: 12px !important;
    width: 700px !important;
  }

  &.ant-select-selection-search-input {
    border: 1px solid #c5ced9;
  }

  svg path {
    fill: #626262;
  }

  .ant-input-clear-icon {
    display: flex;
    font-size: 20px;
  }

  input::placeholder {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.placeholder};
  }
`;

export const InputSearchCustom = styled(Input.Search)`
  background-color: transparent;
  font-size: 14px;
  background-color: #fff;

  &.ant-input-group-wrapper {
    border: 1px solid #c5ced9 !important;
    //height: 40px;
    border-radius: 12px !important;
    width: ${props => props.widthcus || '700px'} !important;
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border: none;
  }

  .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    border-radius: inherit;
    border: none;
  }

  .ant-input-group {
    border-radius: 12px;
  }

  .ant-input-group > .ant-input-group-addon:last-child {
    border: none;
    background: #ffffff;
    border-radius: 12px;
  }

  svg path {
    fill: #626262;
  }

  .ant-input-clear-icon {
    display: flex;
    font-size: 20px;
  }

  .ant-input-search-button {
    height: 30px;
    border: none;
    background-color: #fff;
  }

  input::placeholder {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.placeholder};
  }

  input {
    cursor: text;
  }

`;
