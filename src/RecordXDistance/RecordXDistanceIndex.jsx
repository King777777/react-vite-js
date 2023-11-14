import { useState, useRef, useEffect } from 'react';

const MouseTracker = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [dis, setDis] = useState(0);

  const containerRef = useRef();

  useEffect(() => {
    const handleMouseDown = (event) => {
      setIsMouseDown(true);
      setStartX(event.clientX);
    };

    const handleMouseUp = (event) => {
      if (isMouseDown) {
        setIsMouseDown(false);
        setDis(0);
        // setEndX(event.clientX);
        // calculateDistance();
      }
    };

    const calculateDistance = () => {
      const distance = Math.abs(endX - startX);
      setDis(distance);
    };

    const handleMouseMove = (event) => {
      if(isMouseDown){
        const distance = Math.abs(event.clientX - startX);
        setDis(distance);
      }
    };

    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseDown, startX, endX]);

  return (
    <div ref={containerRef} style={{ height: '100px', border: '1px solid #ccc' }}>
     <div style={{width: dis, height: "50px", backgroundColor: 'aqua'}}>宽度:{dis}</div>
    </div>
  );
};

export default MouseTracker;
