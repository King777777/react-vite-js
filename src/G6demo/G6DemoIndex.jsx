import React, {useEffect, useRef} from "react";
import { register, ExtensionCategory, Graph } from '@antv/g6';
import CustomLayoutIndex from "../CustomLayout/CustomLayoutIndex";

//注册布局
register(ExtensionCategory.LAYOUT, 'custom-layout', CustomLayoutIndex);

const data = {
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
        "type": "rect"
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



const G6DemoIndex = props => {

  const divRef = useRef(null);

  useEffect(() => {
    const graph = new Graph({
      container: divRef.current,
      autoFit: 'center',
      data,
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
            // items.forEach((item) => {
            //   result += `<div>id: ${item.id}</div>`;
            // });
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
        },
      },
      layout: {
        type: 'custom-layout',
        // rankdir: 'LR',
        // align: 'UL',
        // ranksep: 50,
        // nodesep: 10,
        sortByCombo: true,
      },
      behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],
    });
    graph.render();
  }, [])

  return <div ref={divRef}></div>
}
export default G6DemoIndex;

