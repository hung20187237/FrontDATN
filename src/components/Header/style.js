import { Layout, Popover } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;

const HeaderEtn = styled(Header)`
  height: 64px !important;
  background-color: white !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px !important;
  border-bottom: 1px solid #ced4da;
`;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LeftHeader = styled.div`
  display: flex;
  align-content: center;
`;

const IconMenu = styled.img`
  display: flex;
  align-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  display: flex;
  align-content: center;
  height: 22px;
  margin-left: 15px;
  cursor: pointer;
  align-self: center;
`;

const LayoutSearch = styled.div`
  display: flex;
  align-content: center;
  margin-left: 73px;
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

const IconUser = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 30px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const PopoverCustom = styled(Popover)`
  .ant-popover-inner-content {
    padding: 0;
  }
`;

export { HeaderEtn, ContainerHeader, LeftHeader, IconMenu, Logo, LayoutSearch, RightHeader, IconUser, PopoverCustom };
