import React, {useState} from 'react';
import MessageButton from "./MessageButton";

const UseCbAndMemo = (props) => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const onclick = () => {
    setShow(!show);
    setCount(count => count + 1);
  };
  return (
    <>
      {<MessageButton />}
      {/*{show && <MessageButton />}*/}
      <br/>
      <button onClick={onclick}>销毁</button>
    </>
  )
};

export default UseCbAndMemo;