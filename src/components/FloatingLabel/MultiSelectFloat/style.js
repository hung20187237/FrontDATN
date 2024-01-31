import styled from 'styled-components';
import {Select, Space} from 'antd';

export const SelectFloatStyle = styled(Select)`
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

  &.ant-select-multiple .ant-select-selection-item {
    background: none !important;
    border: none !important;
  }

  &.ant-select-multiple .ant-select-selector {
    padding: 4px 24px 3px 4px;
    background: #ffffff;
  }

  .ant-select-selection-placeholder {
    line-height: 40px !important;
  }
  .ant-select-selection-overflow-item {
    max-width: 100%;
  }

  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 600;
    background: rgba(33, 37, 41, 0.3);
  }

  &.ant-select-multiple .ant-select-selection-item-content .OptionCus .listButton {
    display: none;
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
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
`;
export const ListButton = styled.div`
  display: none;
`;
