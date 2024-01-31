import styled from "styled-components";

export const SuggestContainer = styled.div`
  display: flex;
  max-width: 1100px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;
export const TittleSuggest = styled.div`
  text-align: center;
  width: 100%;
  margin: 40px 0;
  h2 {
    position: relative;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Satisfy', 'Sacramento', 'Mr De Haviland', 'Alex Brush',serif;
  }
`;

export const ContentSuggest = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

export const ItemSuggest = styled.div`
  width: calc(100% / 4);
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const CardSuggest = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  color: inherit;
  background: #fff;
  margin: 0 12px 24px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  transition: color .15s ease,border-color .15s ease;
`;

export const CardImageSuggest = styled.div`
  width: 100%;
  background-color: #eee;
  background-image: linear-gradient(90deg,#eee,#f5f5f5,#eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: PlaceItemCard_loading-image-animation__kL2bY 1.2s ease-in-out infinite;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 240px;
  @keyframes PlaceItemCard_loading-image-animation__kL2bY {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: -webkit-calc(200px + 100%) 0;
      background-position: calc(200px + 100%) 0;
    }
  }
`;

export const CardImageWrapperSuggest = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const LazyLoadWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    background-position: 50%;
    background-size: cover;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: perspective(1px) translateZ(0);
    transition: all 1.5s cubic-bezier(0,0,.2,1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const CardBodySuggest = styled.div`
  padding: 2px 15px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    padding: 6px 0 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  div {
    color: #000;
    font-size: 14px;
    padding-bottom: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;