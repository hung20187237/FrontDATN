import styled from "styled-components";
import ReactImageGrid from "@cordelia273/react-image-grid";
import {Button, Modal} from "antd";

export const PostItemRight = styled.div`
  position: relative;
  flex-grow: 1;
  width: calc(100% - 64px - 20px);
`;
export const PostItemRightContent = styled.div`
  padding: 5px 15px;
  border-radius: 12px;
  background-color: #f5f5f7;
`;

export const PostItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const PostItemBody = styled.div`
  padding: 4px 2px;
  display: flex;
  flex-direction: column;
`;

export const PostItemText = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.show ? 'unset' : '4')}; /* Số dòng tối đa hiển thị trước khi ẩn */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const SeeMore = styled.div`
  color: #f44336;
  cursor: pointer;

  :hover {
    color: #f8a5a0;
  }
`;


export const PostUserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: .4px;
    margin-right: 5px;
    color: #000;
  }
`;

export const PostUserVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    width: 32px;
    height: 32px;
    font-size: 12px;
    line-height: 32px;
    overflow: hidden;
    text-align: center;
    color: #fff;
    background: #e03;
    border-radius: 50%;
  }
`;

export const ReactImageGridCustom = styled(ReactImageGrid)`
  display: flex !important;
  width: 100%;
  & .sc-gsDJrp {
    height: 250px;
    width: 25%;
  }
  
`;

export const ItemVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`;
export const TextItemVote = styled.div`
  font-weight: 500;
  margin-right: 10px;
`;
export const TextItem = styled.div`
  width: 32px;
  height: 32px;
  font-size: 12px;
  line-height: 32px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background: #e03;
  border-radius: 50%;
  margin-right: 10px;
`;
export const ModalCustom = styled(Modal)`
  & .ant-modal-content {
    width: ${props => props.width || '471px'};
    max-height: 75vh;
    background: #FFF;
    border-radius: 12px;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.20);
    .ant-modal-body {
      max-height: calc(75vh - 112px);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  & .ant-modal-header {
    border-radius: 12px 12px 0 0;
  }
`;

export const IconWarning = styled.img`
  width: 95px;
  height: 95px;
  flex-shrink: 0;
`;

export const TitleWarning = styled.div`
  color: var(--red1, #ED3E26);
  text-align: center;
  font-family: Open Sans,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ContentWarning = styled.div`
  color: var(--Main-text-color, #222D4B);
  text-align: center;
  font-family: Open Sans,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const DivFooter = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  font-size: 1.07142em;
  line-height: 20px;
  align-items: center;
`;

export const ButtonSubmit = styled(Button)`
  background-color: #ea6b5a;
  color: #ffffff;
  border-radius: 12px;
  width: 132px;
  height: 40px;
  font-weight: 600;
`;
