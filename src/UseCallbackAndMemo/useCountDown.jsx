import React, {useState, useEffect, useRef, useCallback} from 'react';

const useCountDown = (initCount) => {
  const [count, setCount] = useState(0);
  let timer = useRef(null);

  useEffect(() => {
    return () => {
      console.log("清除定时器")
      timer.current && clearInterval(timer.current);
    }
   }, [])

  const start = useCallback(() => {
    setCount(initCount);
    timer.current = setInterval(() => {
      setCount(count => {
        if(count === 0){
          clearInterval(timer.current);
        } else {
          return count - 1;
        }
      })
    }, 1000)
  }, initCount);


  return [start, count];
};

export default useCountDown;