import styled from 'styled-components';
import { Form } from 'antd';

const CustomItem = styled(Form.Item)`
  .ant-select-selector {
    height: 40px !important;
    border-radius: 8px !important;
  }
  width: 100%;
  height: 40px;
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    border-radius: 8px;
  }

  .addPart:first-child {
    margin-top: 40px;
  }

  .ant-select-selection-placeholder {
    line-height: 40px !important;
  }

  .ant-select-selection-item {
    line-height: 40px !important;
  }
  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 600;
    background: rgba(33, 37, 41, 0.3);
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
  }

  .ant-select-selection-search-input {
    height: 38px !important;
  }
`;

const CustomLabel = styled.div`
  position: absolute;
  z-index: 999;
  top: -10px;
  left: 22px;
  font-size: 12px;
  background-color: #ffffff;
  color: #000000;
`;

const Label = styled.div`
  position: absolute;
  z-index: 999;
  top: 10px;
  left: 22px;
  font-size: 14px;
  background-color: #ffffff;
  color: #8a929a;
`;

export { CustomItem, CustomLabel, Label };
