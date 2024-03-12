import {useState} from 'react';
import {Menu} from 'antd';
import './App.css'
import KeyMapComponent from "./KeyMapComponent";
import WaterMarkIndex from "./WaterMark/WaterMarkIndex";

const {SubMenu} = Menu;

function App() {
  const [key, setKey] = useState("mouseTracker");
  const handleClick = e => {
    console.log("e", e);
    setKey(e.key);
  };
  return (
    <>
      <div style={{float: "left"}}>
        <Menu
          onClick={handleClick}
          style={{width: 256}}
          defaultSelectedKeys={[key]}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>Hooks</span>
            }
          >
            {
              Object.keys(KeyMapComponent).map(key => {
                return <Menu.Item key={key}>{key}</Menu.Item>
              })
            }
          </SubMenu>
        </Menu>
      </div>
      <div style={{overflow: 'hidden', backgroundColor: '#F0F0F0', padding: '8px 12px'}}>
        {KeyMapComponent[key]}
      </div>
      {/*<WaterMarkIndex />*/}
    </>
  )
}

export default App
