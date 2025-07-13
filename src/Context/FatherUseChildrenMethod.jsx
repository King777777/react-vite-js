import React, { Component, useEffect, useRef } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    // const {callback} = this.props;
    // callback(this.handleClick);
  }

  componentDidMount() {}

  handleClick = () => {
    alert('调用第三组件提交')
  }

  render() {
    return <button onClick={this.handleClick}>孙子组件</button>
  }
}

const FunctionChild = props => {
  const meRef = useRef(null)
  const callback = func => {
    meRef.current = func
  }

  const handleClick = () => {
    alert('点击父组件提交')
    meRef.current && meRef.current()
  }

  useEffect(() => {
    // props.callback(handleClick);
  })

  return (
    <>
      <button onClick={handleClick}>子组件</button>
      <Child callback={callback} />
    </>
  )
}

class Father extends Component {
  childrenMethod = null

  handleClick = () => {
    this.childrenMethod && this.childrenMethod()
  }

  callback = func => {
    this.childrenMethod = func
  }

  render() {
    return (
      <>
        {/*<button onClick={this.handleClick}>父组件</button>*/}
        <FunctionChild />
        {/*<Child callback={this.callback} />*/}
      </>
    )
  }
}

const FuncFather = props => {
  console.log('render classFather use children method')
  const childrenMethod = useRef(null)

  const handleClick = () => {
    alert('父组件click')
    childrenMethod.current && childrenMethod.current()
  }

  const callback = func => {
    childrenMethod.current = func
  }

  return (
    <>
      <button onClick={handleClick}>父组件</button>
      <FunctionChild callback={callback} />
      {/*<Child callback={this.callback} />*/}
    </>
  )
}
export default FuncFather
