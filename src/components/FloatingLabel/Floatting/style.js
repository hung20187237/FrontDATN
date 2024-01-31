import styled from 'styled-components';

export const FloatLabel = styled.div`
  position: relative;
  margin-bottom: 0px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 9px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  z-index: 0;
  color: #8a929a;
`;

export const FloatingLabel = styled(Label)`
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  padding: 0 3px 0 3px;
  width: auto;
  height: auto;
  height: 10px;
  background-color: #ffffff;
  top: -9px;
  color: #000000;
  font-size: 12px !important;
  font-weight: normal;
`;
