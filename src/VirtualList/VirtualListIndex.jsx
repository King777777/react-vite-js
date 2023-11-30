import { useState, useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const VirtualList = ({ data, itemHeight, renderItem }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10); // 初始可见区域的结束索引
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const offset = Math.floor(container.scrollTop / itemHeight);
      setStartIndex(offset);
      setEndIndex(offset + Math.ceil(container.clientHeight / itemHeight));
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [itemHeight]);

  return (
    <div
      ref={containerRef}
      style={{ overflowY: 'auto', height: '300px', border: '1px solid #ccc' }}
    >
      <div style={{ height: data.length * itemHeight + 'px', position: 'relative' }}>
        {data.slice(startIndex, endIndex).map((item, index) => (
          <div key={startIndex + index} style={{ position: 'absolute', top: (startIndex + index) * itemHeight + 'px' }}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

// 使用示例
const VirtualListIndex = () => {
  const data = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);

  return (
    <VirtualList
      data={data}
      itemHeight={30}
      renderItem={(item) => <div style={{ height: '30px' }}>{item}</div>}
    />
  );
};

export default VirtualListIndex;
