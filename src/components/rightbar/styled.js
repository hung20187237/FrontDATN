import styled from "styled-components";
import {Button} from "antd";

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
`;

export const ButtonCustom = styled.div`
  padding: 8px 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgb(231, 97, 63);
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background: rgb(250, 71, 0);
    filter: drop-shadow(0px 0px 3px #000);
  }
`;