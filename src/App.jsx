import React, { useState } from 'react'
import { Menu } from 'antd'
import KeyMapComponent from './KeyMapComponent'
import styles from './app.module.css'

const { SubMenu } = Menu

function App() {
  const [key, setKey] = useState('mouseTracker')
  const handleClick = e => {
    setKey(e.key)
  }
  return (
    <div className={styles.container}>
      <div className={styles.sider}>
        <Menu
          onClick={handleClick}
          style={{ width: '100%' }}
          defaultSelectedKeys={[key]}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span>Hooks</span>}>
            {Object.keys(KeyMapComponent).map(key => {
              return <Menu.Item key={key}>{key}</Menu.Item>
            })}
          </SubMenu>
        </Menu>
      </div>
      <div className={styles.right}>{KeyMapComponent[key]}</div>
    </div>
  )
}

export default App
