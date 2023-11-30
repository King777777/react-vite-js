import React, {Component, useEffect, useRef} from "react";

class Child extends Component{

  componentDidMount() {
    const {callback} = this.props;
    callback(this.handleClick);
  }

  handleClick = () => {
    alert("调用子组件提交");
  }

  render(){
    return (
      <button onClick={this.handleClick}>子组件</button>
    )
  }
}

const FunctionChild = props => {

  const handleClick = () => {
    alert("调用函数式子组件提交");
  }

  useEffect(() => {
    // props.callback(handleClick);
    props.childrenMethod.current = handleClick;
  })

  return (
    <button onClick={handleClick}>子组件</button>
  )
}

class Father extends Component{

  childrenMethod = null;

  handleClick = () => {
    this.childrenMethod && this.childrenMethod();
  }

  callback = (func) => {
    this.childrenMethod = func;
  }

  render(){
    return (
      <>
        <button onClick={this.handleClick}>父组件</button>
        <FunctionChild callback={this.callback}/>
        {/*<Child callback={this.callback} />*/}
      </>
    )
  }
}

const FuncFather = props => {

  const childrenMethod = useRef(null);

  const handleClick = () => {
    alert("父组件click");
    childrenMethod.current && childrenMethod.current();
  }

  const callback = (func) => {
    childrenMethod.current = func;
  }

    return (
      <>
        <button onClick={handleClick}>父组件</button>
        <FunctionChild callback={callback} childrenMethod={childrenMethod}/>
        {/*<Child callback={this.callback} />*/}
      </>
    )

}
export default FuncFather;