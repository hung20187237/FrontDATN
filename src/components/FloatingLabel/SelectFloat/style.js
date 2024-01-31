import styled from 'styled-components';
import { Select, Space } from 'antd';

export const SelectFloatStyle = styled(Select)`
  width: 100%;
  height: 40px;
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    border-radius: 8px;
  }
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .OptionCus .listButton {
    display: none;
  }
  .ant-select-selection-placeholder {
    line-height: 40px !important;
    display: flex;
    align-items: center;
  }
  .ant-select-selection-item {
    line-height: 40px !important;
    display: flex;
    align-items: center;
  }
  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 600;
    background: rgba(33, 37, 41, 0.3);
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
  }
  .ant-select-item-option.ant-select-item-option-selected {
    color: #2eace2 !important;
    background-color: #e3f5fd !important;
  }

  .ant-select-selection-search-input {
    height: 38px !important;
  }
`;

export const SpaceCus = styled(Space)`
  .ant-space-item {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .ant-btn-circle {
    padding: 0 !important;
  }
`;
export const CardOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  //&:hover {
  //  box-shadow: 0 2px 10px rgb(0 0 0 / 25%);
  //}
  &:hover .listButton {
    display: flex;
    justify-content: flex-end;
    height: 100%;
  }
  .ant-select-selection-item .listButton {
    color: aqua;
  }
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: normal;
  white-space: nowrap;
`;
export const ListButton = styled.div`
  display: none;
`;
