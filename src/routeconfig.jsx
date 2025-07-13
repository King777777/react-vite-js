// routeConfig.js
import MouseTracker from './RecordXDistance/RecordXDistanceIndex'
import ExpandableRowIndex from './ExpandableRow/ExpandableRowIndex'
import VirtualListIndex from './VirtualList/VirtualListIndex'
import ContextIndex from './Context/ContextIndex'
import ContextRef from './Context/ContextRef'
import Father from './Context/FatherUseChildrenMethod'
import { Table } from 'antd'
import Test from './Context/Test'
import UseCbAndMemo from './UseCallbackAndMemo/UseCBAndMemo'
import BpmnTest from './BpmnDemo/bpmnDemo'
import G6DemoIndex from './G6demo/G6DemoIndex'
// import X6DemoIndex from "./X6Demo/X6DemoIndex";

const routeConfig = [
  {
    path: '/hooks',
    title: 'hooks',
    children: [
      {
        path: 'mouse-tracker',
        title: 'mouse-tracker',
        element: <MouseTracker />,
      },
      {
        path: 'expand-row',
        title: 'expand-row',
        element: <ExpandableRowIndex />,
      },
      {
        path: '',
        element: <MouseTracker />, // 默认子路由重定向
      },
    ],
  },
  {
    path: '/flow',
    title: 'flow',
    children: [
      {
        path: 'g6',
        title: 'G6flow',
        element: <G6DemoIndex />,
      },
    ],
  },
  {
    path: '/',
    element: <MouseTracker />, // 根路径默认跳转
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
]

export default routeConfig
