import {Menu} from 'antd';
import {useIn} from 'react';
import 'antd/dist/antd.css';
import './App.css'
import MouseTracker from "./RecordXDistance/RecordXDistanceIndex";

const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }],
  },
];

function App() {
  return (
    <section className="page">
      <aside className="aside">
        <Menu items={items} />
      </aside>
      <main className="main">
        <MouseTracker />
      </main>
    </section>
  )
}

export default App
