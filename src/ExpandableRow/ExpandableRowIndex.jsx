import { useState, useRef, useEffect } from 'react';
import './index.css';

/* 多行文本展开收起，一个非常简单朴素的实现,功能就是当文本超过4行的时候，末尾显示省略号，然后换行显示一个展开按钮，点击展开可以显示所有文本，
此时展开变为收起，点击收起就回到原来收起的样子，当不大于4行时，不显示展开按钮。
实现起来就是两点，1是判断文本的实际高度scrollHeight和展示的高度clientHeight,如果大于则说明文本超出，此时需要展示按钮，2是点击展示/收起按钮
通过element.style.setProperty()方法修改css属性的值

*/
function ExpandableRowIndex(props) {
  const textRef = useRef(null);
  const [show, setShow] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    setShow(textRef.current.scrollHeight <= textRef.current.clientHeight);
  }, []);
  return (
    <>
      <div className="text" ref={textRef}>
        {props.children}
      </div>
      <button
        hidden={show}
        onClick={() => {
          const lineClampValue = clickCount % 2 === 0 ? '9999' : '3';
          textRef.current.style.setProperty('-webkit-line-clamp', lineClampValue);
          setClickCount(clickCount + 1);
        }}
      >
        {clickCount % 2 === 0 ? '展开' : '收起'}
      </button>
    </>
  );
}

export default ExpandableRowIndex;
