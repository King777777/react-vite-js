import React, { useRef, useImperativeHandle } from 'react';

// 子组件
const ChildComponent = React.forwardRef((props, ref) => {
  const handleSubmit = () => {
    // 子组件的提交逻辑
    alert('子组件提交');
  };

  // 使用 useImperativeHandle 对外暴露提交方法
  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
  }));

  return (
    <div>
      {/* 子组件的内容 */}
      <button onClick={handleSubmit}>子组件提交</button>
    </div>
  );
});

// 父组件
const ParentComponent = ({ children }) => {
  // 创建一个引用
  const childRef = useRef();

  // 使用React.Children.map来遍历子组件并传递新的ref
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { ref: childRef })
  );

  const handleParentSubmit = () => {
    // 调用子组件的提交方法
    childRef.current && childRef.current.submit();
  };

  return (
    <div>
      {/* 渲染子组件，并传递新的ref */}
      {childrenWithProps}

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
