import styled from 'styled-components';
import { DatePicker } from 'antd';

export const FlWrapper = styled.div`
  position: relative;
  background: transparent;
  border-radius: 8px;
  &:hover {
    .fl-label {
      /* color: var(--color-primary); */
    }
  }
  input {
    //z-index: 3;
    z-index: 2;
    background-color: ${props => (props.disabled ? '#f5f5f5' : '#fff !important')};
  }
  .ant-select {
    z-index: 3;
    background-color: ${props => (props.disabled ? '#f5f5f5' : '#fff !important')};
  }
  .ant-select-selector {
    background-color: transparent !important;
  }

  .ant-input-number {
    z-index: 3;
    background-color: transparent !important;
  }
  .ant-select-selection-search-input {
    height: 100% !important;
  }
  .ant-select-selection-search {
    margin-left: 10px;
    //width: 100%;
    right: 25px !important;
    left: 0 !important;
  }
  .ant-input-clear-icon-has-suffix {
    display: flex;
  }
  .ant-input-clear-icon {
    display: flex;
  }

  .ant-input-affix-wrapper {
    border: ${props => (!props.checkpropsPL ? undefined : props.placeholder ? '1px solid #868e96' : '1px solid #c5ced9')};
  }

  .ant-picker {
    padding: 0;
    input {
      height: 100%;
      padding: 9.5px 11px;
      width: 100%;
    }
    .ant-picker-suffix {
      position: absolute;
      right: 10px;
    }
    .ant-picker-clear {
      right: 10px;
      z-index: 4;
    }
  }

  .fieldWrapper {
    display: block;
    position: relative;
    border-radius: 8px;

    .formControl {
      height: 40px;
      display: flex;
      width: 100%;
      line-height: 1.25;
      color: #222d4b;
      background-image: none;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      border-radius: 8px;
      z-index: 2;
      font-size: 14px;
      box-shadow: none !important;

      &:focus {
        color: #222d4b;
        border-color: #1574f6;
        outline: 0;
        background-color: #fff !important;
      }

      &:placeholder-shown:not(:focus) + * {
        font-size: 14px;
        line-height: 19px;
        color: #868e96 !important;
        top: 0.75em;
        z-index: 3;
      }

      &:focus + label {
        color: #1574f6;
        z-index: 3;
      }

      &:hover + label {
        color: #1574f6;
        z-index: 3;
      }
    }

    label {
      position: absolute;
      cursor: text;
      font-size: 12px;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      top: -0.4em;
      left: 0.75rem;
      z-index: 3;
      line-height: 10px;
      padding: 0 1px;
      color: #222d4b;
      background-color: #ffffff;
      .redStar {
        color: red;
        margin-left: 5px;
      }
      &::after {
        content: ' ';
        display: block;
        position: absolute;
        height: 4px;
        top: 50%;
        left: -0.1em;
        right: -0.2em;
        z-index: -1;
      }
    }
  }
`;

export const Label = styled.span`
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  position: absolute;
  cursor: text;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  top: ${props => (props.isFl ? '-6px' : '38%')};
  font-size: ${props => (props.isFl ? '12px' : '14px')};
  color: ${props => (props.isFl ? '#000000' : '#8a929a')};
  // z-index: ${props => (props.isFl ? 3 : 1)};
  font-weight: normal;
  left: 10.8px;
  line-height: 12px;
  padding: 0 2px;
  background-color: ${props => (props.isFl ? '#EEFBFF' : 'none')};
  z-index: 3 !important;
  height: 7px;
  &:focus {
    color: #1574f6;
  }
  .redStar {
    color: red;
    margin-left: 5px;
  }
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    background-color: transparent;
    height: 5px;
    top: 40%;
    left: -0.1em;
    right: -0.2em;
    z-index: -1;
  }
`;

export const RedStar = styled.span`
  color: red;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
`;

export const DatepickerCustom = styled(DatePicker)`
  height: 40px;
  border-radius: 8px;
  width: 100%;
  .ant-picker-clear {
    right: 20%;
  }

  .ant-picker-suffix {
    position: absolute;
    right: 10px;
    z-index: 3;
  }

  .ant-picker-input {
    height: 22px !important;
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
  }
`;
