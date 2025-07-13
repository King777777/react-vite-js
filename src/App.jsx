import React from 'react'
import { BrowserRouter as Router, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { Menu } from 'antd'
import routeConfig from './routeConfig'
import styles from './app.module.css'

const { SubMenu } = Menu

// 🔧 递归生成 react-router-dom 路由对象
const transformRoutes = routes =>
  routes.map(route => ({
    ...route,
    children: route.children ? transformRoutes(route.children) : undefined,
  }))

// 🔧 递归生成 Antd Menu 组件
const generateMenuItems = (routes, parentPath = '') =>
  routes
    .filter(route => route.title) // 只对有 title 的渲染菜单项
    .map(route => {
      const fullPath = `${parentPath}${route.path}`.replace(/\/+/g, '/') // 组合父子路径

      if (route.children && route.children.length > 0) {
        return (
          <SubMenu key={fullPath} title={route.title}>
            {generateMenuItems(route.children, `${fullPath}/`)}
          </SubMenu>
        )
      } else {
        return <Menu.Item key={fullPath}>{route.title}</Menu.Item>
      }
    })

function MenuSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const selectedKey = location.pathname

  const handleClick = e => {
    navigate(e.key)
  }

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      defaultOpenKeys={['/hooks']}
      onClick={handleClick}
    >
      {generateMenuItems(routeConfig)}
    </Menu>
  )
}

function AppLayout() {
  const element = useRoutes(routeConfig)

  return (
    <div className={styles.container}>
      <div className={styles.sider}>
        <MenuSidebar />
      </div>
      <div className={styles.right}>{element}</div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
