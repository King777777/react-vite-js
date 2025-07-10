// 父组件
import React, { useState } from 'react';

const ParentComponent = (props) => {
  const [person, setPerson] = useState({ age: '18' });
  const [f, flash] = useState(0);

  // 将对象引用传递给子组件
  return (
    <div>
      {props.children}
      <p>Asuibian ge: {person.age}</p>
      <button onClick={() => flash(f + 1)}>刷新</button>
      <ChildComponent person={person} />
    </div>
  );
};

// 子组件

const ChildComponent = (props) => {
  // 在子组件中修改传递的对象引用
  const handleButtonClick = () => {
    props.person.age = '20';
    console.log('Child modified person:', props.person);
  };

  return (
    <button onClick={handleButtonClick}>
      Modify Person
    </button>
  );
};

export default ParentComponent;
