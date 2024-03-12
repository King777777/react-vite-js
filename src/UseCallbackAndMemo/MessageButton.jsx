import React, {useRef, useEffect, useState} from 'react';
import useCountDown from "./useCountDown";

const MessageButton = React.memo((props) => {
  // const [count, setCount] = useState(0);
  // let timer = useRef(null);
  // let message = count ? `${count}秒后可以再次点击` : '点击获取';
  // const disabled = !!count;
  // useEffect(() => {
  //   return () => {
  //     timer.current && clearInterval(timer.current);
  //   };
  // }, [])
  //
  // const onclick = () => {
  //   setCount(5);
  //   timer.current = setInterval(() => {
  //     setCount(count => {
  //       if(count === 0){
  //         clearInterval(timer.current);
  //       } else {
  //         return count - 1;
  //       }
  //     })
  //   }, 1000)
  // }

  const [onclick, count] = useCountDown(5);
  let message = count ? `${count}秒后可以再次点击` : '点击获取';
  const disabled = !!count;
  console.log("render messagebutton");
  return (
    <>
      <button disabled={disabled} onClick={onclick}>{message}</button>
    </>
  )
});

export default MessageButton;