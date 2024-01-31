import styled from 'styled-components';
import {Input} from "antd";

export const SearchBar = styled.div`
  display: flex;
  width: 800px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 16px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  height: 100%;
  
`;


export const SearchContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const BoxSearch = styled.div`
  height: 40px;
  width: 100%;
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #C5CED9;
`;

export const BoxFilter = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--Main-color, #089DDD);
`;
export const InputCustom = styled(Input)`

`;


export const BoxIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;


