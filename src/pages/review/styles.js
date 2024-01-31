import styled from "styled-components";
import { Form, Col } from "antd";
export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  .ant-form-item-label label {
    width: 100px;
    margin-right: 80px;
  }

  .ant-form label {
    font-size: 14px;
    top: 0.75em !important;
  }

  .jeyaod {
    top: 0.75em !important;
  }

  .jAkdsh {
    top: 0.75em !important;
  }

  .ant-radio-wrapper {
    width: 150px;
    margin-right: 20px !important;
  }

  .ant-form-item-explain-error:not(:first-child) {
    display: none !important;
  }
`;
