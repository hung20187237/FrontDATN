import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TooltipCuss } from './styles';

const TooltipCustom = ({ name, toolTip }) => {
  const myElementRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  useEffect(() => {
    const updateTextWidth = () => {
      if (myElementRef.current) {
        const element = myElementRef.current;
        const width = element.scrollWidth;
        const currentTextLength = element.clientWidth;
        setTextWidth(width);
        setDivWidth(currentTextLength);
      }
    };

    updateTextWidth(); // Cập nhật độ dài ban đầu

    window.addEventListener('resize', updateTextWidth); // Theo dõi sự thay đổi kích thước màn hình

    return () => {
      window.removeEventListener('resize', updateTextWidth); // Hủy theo dõi khi component bị hủy
    };
  }, []);

  return (
    <>
      <TooltipCuss placement="topRight" title={textWidth > divWidth && name}>
        <div ref={myElementRef} style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {name}
        </div>
      </TooltipCuss>
    </>
  );
};
TooltipCustom.propTypes = {
  name: PropTypes.string,
  toolTip: PropTypes.string,
};

export default TooltipCustom;
