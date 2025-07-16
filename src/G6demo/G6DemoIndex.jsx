import React, {useEffect, useRef} from "react";
import { register, ExtensionCategory, Graph } from '@antv/g6';
// import CustomLayoutIndex from "../CustomLayout/CustomLayoutIndex";
import CustomYongdao from "../CustomLayout/CustomYongdao";

//注册布局
register(ExtensionCategory.LAYOUT, 'custom-layout', CustomYongdao);

let data = {
  "nodes": [
    {
      "id": "0",
      "combo": "A",
    },
    {
      "id": "1",
      "combo": "A",
    },
    {
      "id": "2",
      "combo": "B",
    },
    {
      "id": "3",
      "combo": "B",
    },
    {
      "id": "4",
      "combo": "C",
    },
    {
      "id": "5",
      "combo": "C",
    },
    {
      "id": "6",
      "combo": "D",
    },
  ],
  "edges": [
    {
      "id": "edge-102",
      "source": "0",
      "target": "1"
    },
    {
      "id": "edge-161",
      "source": "1",
      "target": "2"
    },
    {
      "id": "edge-237",
      "source": "2",
      "target": "3"
    },
    {
      "id": "edge-253",
      "source": "2",
      "target": "4"
    },
    {
      "id": "edge-133",
      "source": "2",
      "target": "5"
    },
    {
      "id": "edge-320",
      "source": "3",
      "target": "6"
    },

  ],
  "combos": [
    {
      "id": "A",
      "desc": '场景金融系统',
      "style": {
        "type": "rect",
        size: 400,
        fill: '#5B8FF9', // 蓝色填充
        stroke: '#1A1A1A', // 深色描边
        lineWidth: 2,
        fillOpacity: 0.2,
      }
    },
    {
      "id": "B",
      "desc": '远程业务管理系统',
      "style": {
        "type": "rect"
      }
    },
    {
      "id": "C",
      "desc": '远程公共系统',
      "style": {
        "type": "rect"
      }
    },
    {
      "id": "D",
      "desc": '远程核算系统',
      "style": {
        "type": "rect"
      }
    }
  ]
}

let data2 = {
  "nodes": [
    {
      "id": "0",
      "combo": "A",
      "x": 0,
      "y": 0
    },
    {
      "id": "1",
      "combo": "A",
      "x": 0,
      "y": 100
    },
    {
      "id": "virtual-B-0",
      "combo": "B",
      "virtual": true,
      "x": 300,
      "y": 0
    },
    {
      "id": "2",
      "combo": "B",
      "_alignY": 1,
      "x": 300,
      "y": 100
    },
    {
      "id": "3",
      "combo": "B",
      "x": 300,
      "y": 200
    },
    {
      "id": "4",
      "combo": "C",
      "_alignY": 0,
      "x": 600,
      "y": 0
    },
    {
      "id": "5",
      "combo": "C",
      "_alignY": 0,
      "x": 600,
      "y": 100
    },
    {
      "id": "virtual-D-0",
      "combo": "D",
      "virtual": true,
      "x": 900,
      "y": 0
    },
    {
      "id": "6",
      "combo": "D",
      "_alignY": 1,
      "x": 900,
      "y": 100
    }
  ],
  "edges": [
    {
      "id": "edge-102",
      "source": "0",
      "target": "1"
    },
    {
      "id": "edge-161",
      "source": "1",
      "target": "2"
    },
    {
      "id": "edge-237",
      "source": "2",
      "target": "3"
    },
    {
      "id": "edge-253",
      "source": "2",
      "target": "4"
    },
    {
      "id": "edge-133",
      "source": "2",
      "target": "5"
    },
    {
      "id": "edge-320",
      "source": "3",
      "target": "6"
    }
  ],
  "combos": [
    {
      "id": "A",
      "desc": "场景金融系统",
      "style": {
        "type": "rect",
        fill: '#5B8FF9', // 蓝色填充
        stroke: '#1A1A1A', // 深色描边
        lineWidth: 2,
        fillOpacity: 0.2,
        x: 100,y:200
      }
    },
    {
      "id": "B",
      "desc": "远程业务管理系统",
      "style": {
        "type": "rect"
      }
    },
    {
      "id": "C",
      "desc": "远程公共系统",
      "style": {
        "type": "rect"
      }
    },
    {
      "id": "D",
      "desc": "远程核算系统",
      "style": {
        "type": "rect"
      }
    }
  ]
}

function generateSwimlaneLayout(data, config = {}) {
  const laneGapX = config.laneGapX || 300;  // 每列横向间距
  const nodeGapY = config.nodeGapY || 100;  // 每个节点纵向间距
  const combos = data.combos.map(c => c.id);

  // combo => nodes[]
  const comboMap = {};
  combos.forEach(combo => comboMap[combo] = []);
  data.nodes.forEach(node => comboMap[node.combo]?.push({ ...node }));

  // id => node
  const nodeMap = {};
  data.nodes.forEach(n => nodeMap[n.id] = n);

  // combo 排序按 combos 顺序（左到右）
  const comboOrder = combos;

  const comboIndexMap = Object.fromEntries(comboOrder.map((id, i) => [id, i]));

  // 计算初始 y 对齐：对于每个 combo 中的 node，如果有外部指向它的边，尝试设置初始 y 排序
  const comboToNodeLayouts = {}; // combo => ordered node array
  const placed = new Set();

  comboOrder.forEach(combo => {
    const nodes = comboMap[combo];
    const orderedNodes = [];

    nodes.forEach(node => {
      // 找到第一个来自其他 combo 的入边
      const fromEdge = data.edges.find(e =>
        e.target === node.id &&
        nodeMap[e.source] &&
        nodeMap[e.source].combo !== combo
      );

      if (fromEdge) {
        const sourceNode = nodeMap[fromEdge.source];
        const sourceCombo = sourceNode.combo;
        const sourceIndex = comboIndexMap[sourceCombo];
        const sourceLaneNodes = comboToNodeLayouts[sourceCombo] || comboMap[sourceCombo];
        const sourceNodeIndex = sourceLaneNodes.findIndex(n => n.id === sourceNode.id);
        if (sourceNodeIndex >= 0) {
          node._alignY = sourceNodeIndex;
        }
      }
    });

    // 优先按 _alignY 排，再填充其他未对齐的
    const aligned = nodes.filter(n => typeof n._alignY === 'number').sort((a, b) => a._alignY - b._alignY);
    const unaligned = nodes.filter(n => typeof n._alignY !== 'number');
    comboToNodeLayouts[combo] = [...aligned, ...unaligned];
  });

  // 计算最大行数
  const maxLaneLength = Math.max(...Object.values(comboToNodeLayouts).map(list => list.length));

  const allNodes = [];

  comboOrder.forEach((comboId, comboIndex) => {
    const nodeList = comboToNodeLayouts[comboId];
    const filledList = [];

    let occupied = new Set();

    nodeList.forEach((node, i) => {
      let pos = typeof node._alignY === 'number' ? node._alignY : i;
      while (occupied.has(pos)) pos++;
      occupied.add(pos);
      filledList[pos] = node;
    });

    for (let i = 0; i < maxLaneLength; i++) {
      if (!filledList[i]) {
        // 插入虚拟节点
        filledList[i] = {
          id: `virtual-${comboId}-${i}`,
          combo: comboId,
          virtual: true
        };
      }
    }

    // 赋值坐标
    filledList.forEach((node, rowIndex) => {
      node.x = comboIndex * laneGapX;
      node.y = rowIndex * nodeGapY;
      allNodes.push(node);
    });
  });

  return {
    nodes: allNodes,
    edges: data.edges,
    combos: data.combos
  };
}

// data = generateSwimlaneLayout(data);
console.log(data2);


const G6DemoIndex = props => {

  const divRef = useRef(null);


  useEffect(() => {





    const graph = new Graph({
      container: divRef.current,
      autoFit: 'center',
      width: 1000,             // 画布宽度（像素）
      height: 600,
      data: data2,
      plugins: [
        {
          type: 'tooltip',
          getContent: (e, items) => {
            let result = `
        <div>name: xxx</div>
        <div>url: xxx</div>
        <div>system: xxx</div>
        <div>departemnt: xxx</div>
        `;
            return result;
          },
        },
      ],
      node: {
        type: 'rect',
        style: {
          size: [30, 30],
          radius: 8,
          labelText: (d) => d.id,
          labelBackground: true,
          // ports: [{ placement: 'top' }, { placement: 'bottom' }],
        },
        palette: {
          field: (d) => d.combo,
        },
      },
      edge: {
        type: 'line',
        style: {
          endArrow: true,
        },
      },
      combo: {
        type: 'rect',
        style: {
          radius: 8,
          labelText: (d) => d.desc,
          stroke: 'orange',
          style:{fill: 'red'}
        },
      },
      layout: {
        type: 'custom-layout',
        sortByCombo: true,
      },
      behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],
    });
    graph.render();
  }, [])

  return <div ref={divRef}></div>
}
export default G6DemoIndex;




