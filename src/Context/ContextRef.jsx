import React, {useRef, createContext, useContext, useEffect, useImperativeHandle} from 'react';

const RefContext = createContext(null);

// 子组件
const ChildComponent = (props) => {
  const handleSubmit = () => {
    // 子组件的提交逻辑
    alert('子组件提交');
  };
  // const callback = useContext(RefContext);

  useEffect(() => {
    const callback = props.callback;
    callback(handleSubmit);
    // callback(handleSubmit);
  }, [])

  // 使用 useImperativeHandle 对外暴露提交方法
  // useImperativeHandle(useContext(RefContext), () => ({
  //   submit: handleSubmit,
  // }));

  return (
    <div>
      {/* 子组件的内容 */}
      <button onClick={handleSubmit}>子组件提交</button>
    </div>
  );
};

// 父组件
const ParentComponent = ({ children }) => {
  // 创建一个引用
  const childRef = useRef(null);

  const handleParentSubmit = () => {
    // 调用子组件的提交方法
    childRef.current && childRef.current();
  };

  const callback = func => {
    childRef.current = func;
  }

  return (
    <div>
      {/*<RefContext.Provider value={callback}>*/}
        {React.cloneElement(children, {callback})}
      {/*</RefContext.Provider>*/}
      {/* 提交按钮，点击时调用父组件的提交方法 */}
      <button onClick={handleParentSubmit}>父组件提交</button>
    </div>
  );
};

export default () => (
  <ParentComponent>
    <ChildComponent />
  </ParentComponent>
);
