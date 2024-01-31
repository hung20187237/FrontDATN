import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";

export const ItemMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 32px;
  margin: auto;
  box-shadow: rgb(122, 122, 122);
  border-radius: 5px;
  background: rgb(255, 241, 241);
`;

export const PostTitle = styled.div`
  font-size: 16x;
  font-weight: 700;
  margin: 0 10px;
  cursor: pointer;
`;

export const ReportContainer = styled.div`
  min-height: 200px;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-size: 16px;
    color: #898c95;
    margin-bottom: 0;
  }
`;

export const TextAreaCustom = styled(TextArea)`
  font-size: 16px;
  border-radius: 10px;
  .ant-input:hover {
    border-color: #fa284e;
    border-right-width: 1px!important;
  }
  .ant-input:placeholder-shown {
    text-overflow: ellipsis;
  }
`;