import styled from "styled-components";

export const ButtonReview = styled.div`
  padding: 8px 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgb(231, 97, 63);
  border-radius: 16px;
  transition: all .15s ease;
  cursor: pointer;
  
  :hover{
    background: rgb(255, 255, 255);
    filter: drop-shadow(0px 0px 3px #000);
  }
`;