import styled from 'styled-components';
import { Tooltip } from 'antd';


export const TooltipCuss = styled(Tooltip)`
  .ant-tooltip-open {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;