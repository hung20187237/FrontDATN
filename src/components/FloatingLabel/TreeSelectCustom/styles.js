import styled from 'styled-components';
import { TreeSelect } from 'antd';

export const TreeSelectStyle = styled(TreeSelect)`
  width: 100%;
  min-height: 40px;

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    min-height: 40px;
    max-height: 93px;
    border-radius: 8px;
    overflow: hidden;

    :hover {
      overflow-y: auto;
      scrollbar-width: thin;
    }
  }

  &.ant-select-multiple .ant-select-selector {
    padding: 4px 24px 3px 4px;
  }

  .ant-select-selection-placeholder {
    line-height: 40px !important;
  }

  .ant-select-selection-item {
    line-height: 36px !important;
  }

  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 600;
    background: rgba(33, 37, 41, 0.3);
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
  }


  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
    height: 40px;

  .ant-select-clear {
    right: 45px !important;
    margin-top: -12px !important;
    font-size: 16px !important;
    color: #626262 !important;
  }

  .ant-select-arrow {
    top: 50%;
    right: 11px;
    font-size: 16px !important;
  }
`;
