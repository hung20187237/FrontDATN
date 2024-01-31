import styled from 'styled-components';
import ReactImageGrid from "@cordelia273/react-image-grid";
import {Button} from "antd";


export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexColum = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemInteger = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
export const LabelInteger = styled.div`
  width: 100%;
  max-width: 90px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 16px;
`;

export const BoxContainer = styled.div`
  min-height: 250px;
  flex: 1 1;
  align-self: stretch;
  overflow: hidden;
  padding: 8px 14px 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  position: relative;
`;

export const BoxSwiper = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
  padding: 8px 0;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
`;
export const PostContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 8px 16px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
`;
export const TitlePostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6px;
  h2 {
    font-size: 28px;
    span {
      color: #8a8a8a;
    }
  }
`;

export const TitleModal = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #000;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BodyModal = styled.div`
  min-height: 200px;
  overflow-y: auto;
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const RatingContainer = styled.div`
  h3 {
    font-size: 18px;
    color: #898c95;
  }
`;

export const ReviewInputContainer = styled.div`
  h3 {
    font-size: 18px;
    color: #898c95;
  }
`;

export const BoxImageContent = styled.div`
  width: 30%;
  height: 100%;
  text-align: center;
  position: relative;
  img {
    max-height: 100%;
  }
`;
export const TextPostContainer = styled.div`
  flex-grow: 1;
  padding: 10px 8px;
  gap: 12px;
  h2 {
    font-size: 24px;
  }
  span {
    display: block;
    line-height: 1.7;
    margin-bottom: 2px;
    svg {
      font-size: 15px;
      color: #f44336;
    }
  }
`;

export const ContentPostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  padding: 10px 16px;
  position: relative;
  background: linear-gradient(90deg,#ffb8b8,#ffddd8);
  border-radius: 20px;
`;

export const ListPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  gap: 8px;
`;

export const PostItem = styled.div`
  display: flex;
  padding-bottom: 4px;
  gap: 20px;
`;
export const PostItemLeft = styled.div`
  display: flex;
`;


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
  
  &:hover {
    background: rgb(250, 71, 0);
    filter: drop-shadow(0px 0px 3px #000);
  }
`;

export const BoxScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  gap: 4px;
  p {
    display: block;
    font-size: 28px;
    text-align: center;
    min-width: 50px;
    padding: 4px 8px;
    color: #fff;
    background: #e03;
    border-radius: 10px;
  }
`;

export const BoxPlace = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  height: -webkit-calc(100% - 33px);
  height: calc(100% - 50px);
  position: relative;
`;
export const BoxImage = styled.div`
  cursor: pointer;
  flex-grow: 1;
  margin: 4px 0;
  background-color: #eee;
  img {
    background-position: 50%;
    background-size: cover;
    height: 100%;
    max-height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;

export const BoxTextPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: auto;
  right: 16px;
  bottom: 16px;
  left: 16px;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
  gap: 12px;
  img {
    height: 24px;
    width: 24px;
  }
`;


export const BoxIcon = styled.img`
    height: 40px;
    width: 40px;
`;

export const ReactImageGridCustom = styled(ReactImageGrid)`
  grid-template-columns: 2fr 2fr 1fr !important;
  grid-template-rows: repeat(2, 1fr) !important;
  & .sc-gsDJrp:nth-child(1) {
    width: 100%;
    grid-row: 1 / span 2 !important;
  }
  & .sc-gsDJrp:nth-child(2) {
    width: 100%;
    grid-row: 1 / span 2;
  }
  
`;

export const ItemSwiper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex!important;
    text-align: center;
    padding: 6px;
    flex-flow: column;
  svg {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #e03;
  }
`;