import React, { useState, useRef, useEffect } from 'react';
import './index.css';
function ExpandableRowIndex(props) {
  const textRef = useRef(null);
  const [show, setShow] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    setShow(textRef.current.scrollHeight <= textRef.current.clientHeight); //判断实际高度和显示高度，决定可以展开
  }, []);
  return (
    <>
      <div className="text" ref={textRef}>
        {props.children}
      </div>
      <button
        hidden={show}
        onClick={() => {
          if (clickCount % 2 === 0) {
            textRef.current.style.setProperty('-webkit-line-clamp', '9999');
          } else {
            textRef.current.style.setProperty('-webkit-line-clamp', '4');
          }
          setClickCount(clickCount + 1);
        }}
      >
        {clickCount % 2 === 0 ? '展开' : '收起'}
      </button>
    </>
  );
}

export default ExpandableRowIndex;
