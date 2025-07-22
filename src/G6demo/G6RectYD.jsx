import React, { useEffect, useRef } from 'react';
import { Graph } from '@antv/g6';
const SwimlaneDiagramV5 = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const width = 1000;
    const height = 600;

    const graph = new Graph({
        container: containerRef.current,
        width,
        height,
        autoFit: 'center',
        behaviors: ['drag-canvas','zoom-canvas'],
        plugins: [
          {
            type: 'tooltip',
            getContent: (e, items) => {
              const item = items[0]
              if(item.id.startsWith('lane')) return null;
              let result = `
                  <div>id: ${item.data.id}</div>
                  <div>name: ${item.data.name}</div>
                  <div>url: ${item.data.url}</div>
                  <div>module: ${item.data.module}</div>
                  <div>system: ${item.data.system}</div>
                  <div>departemnt: ${item.data.department}</div>
                  `;
                return result;
            },
          },
        ],
        edge: {
          type: 'line',
          style: {
            endArrow: true,
          },
        },
        data: {
          nodes: [
            {
              id: 'lane1',
              type: 'rect',
              style: {
                size: [100, 300],
                x: 100,
                y: 200,
                fill: '#e6f7ff',
                zIndex: -1,
                labelText: '场景金融系统',
                labelPadding: [6, 12],
                labelFill: '#463c36',
                labelFontWeight: 'bold',
                labelPlacement: 'top',
              },
              combo: 'A',
            },
            {
              id: 'lane2',
              type: 'rect',
              style: {
                size: [100, 300],
                x: 250,
                y: 200,
                fill: '#e6f7ff',
                zIndex: -1,
                labelText: '远程业务系统',
                labelPadding: [6, 12],
                labelFill: '#463c36',
                labelFontWeight: 'bold',
                labelPlacement: 'top',
              },
              combo: 'A',
            },
            {
              id: 'lane3',
              type: 'rect',
              style: {
                size: [100, 300],
                x: 400,
                y: 200,
                fill: '#e6f7ff',
                zIndex: -1,
                labelText: '远程公共系统',
                labelPadding: [6, 12],
                labelFill: '#463c36',
                labelFontWeight: 'bold',
                labelPlacement: 'top',

              },
            },
            {
              id: 'lane4',
              type: 'rect',
              style: {
                size: [100, 300],
                x: 550,
                y: 200,
                fill: '#e6f7ff',
                zIndex: -1,
                labelText: '个人风控中台系统',
                labelPadding: [6, 12],
                labelFill: '#463c36',
                labelFontWeight: 'bold',
                labelPlacement: 'top',
              },
            },
            {
              id: 'myNode1',
              type: 'rect',
              data: {
                id: 'YCYY_ACL_API_001',
                name: '预授信申请',
                url: '/new/acl/acp/normal/preCreditApply',
                module: 'API',
                system: '场景金融系统',
                department: '远程应用研发部',
              },

              style: {
                size: [50, 50],
                x: 100,
                y: 100,
                fill: 'aqua',
                labelText: '预授信申请',
                labelFontSize: 10,
                labelPlacement: 'center',

              },
            },
            {
              id: 'myNode2',
              type: 'rect',
              data: {
                id: 'YCCY_ACL_API_001',
                name: '预授信申请',
                url: '/new/acl/acp/normal/preCreditApply',
                module: 'API',
                system: '场景金融系统',
                department: '远程应用研发部',
              },
              style: {
                size: [50, 50],
                x: 100,
                y: 175,
                fill: 'aqua',
                labelText: '预授信申请',
                labelFontSize: 10,
                labelPlacement: 'center',
              },
            },
            // y轴间距75, x轴间距 150
            {
              id: 'myNode3',
              type: 'rect',
              data: {
                id: 'YCCY_ACL_API_001',
                name: '预授信申请',
                url: '/new/acl/acp/normal/preCreditApply',
                module: 'API',
                system: '场景金融系统',
                department: '远程应用研发部',
              },
              style: {
                size: [50, 50],
                x: 250,
                y: 175,
                fill: '#d6f5d6',
                labelText: '预授信申请',
                labelFontSize: 10,
                labelPlacement: 'center',
              },
            },
            {
              id: 'myNode4',
              type: 'rect',
              data: {
                id: 'YCCY_ACL_API_001',
                name: '预授信申请',
                url: '/new/acl/acp/normal/preCreditApply',
                module: 'API',
                system: '场景金融系统',
                department: '互金应用研发部',
              },
              style: {
                size: [50, 50],
                x: 250,
                y: 250,
                fill: '#d6f5d6',
                labelText: '预授信申请',
                labelPlacement: 'center',
                labelFontSize: 10,
                labelWordWrap: true,
                labelMaxWidth: '100%',
                labelMaxLines: 3,
                labelTextOverflow: 'ellipsis',
                labelFill: '#434343',
                labelTextAlign: 'center',
              },
            },
            {
              id: 'myNode5',
              type: 'rect',
              data: {
                id: 'YCCY_ACL_API_001',
                name: '预授信申请',
                url: '/new/acl/acp/normal/preCreditApply',
                module: 'API',
                system: '场景金融系统',
                department: '互金应用研发部',
              },
              style: {
                size: [50, 50],
                x: 400,
                y: 175,
                fill: '#cfe8cc',
                labelText: '个人客户注册',
                labelPlacement: 'center',
                labelFontSize: 10,
                labelWordWrap: true,
                labelMaxWidth: '100%',
                labelMaxLines: 3,
                labelTextOverflow: 'ellipsis',
                labelFill: '#434343',
                labelTextAlign: 'center',
              },
            },
            {
              id: 'myNode6',
              data: {
                id: 'YCCY_ACL_API_001',
                name: '通过电话查询用户信息',
                url: '/new/acl/acp/normal/preCreditApply',
                module: 'API',
                system: '远程业务管理系统',
                department: '互金应用研发部',
              },
              type: 'rect',
              style: {
                size: [50, 50],
                x: 400,
                y: 250,
                fill: '#cfe8cc',
                labelText: '通过电话查询用户信息',
                labelFontSize: 10,
                labelWordWrap: true,
                labelMaxWidth: '100%',
                labelMaxLines: 3,
                labelTextOverflow: 'ellipsis',
                labelFill: '#434343',
                labelPlacement: 'center',
                labelTextAlign: 'center',
              }
            },
            {
              id: 'myNode7',
              type: 'rect',
              data: {
                id: 'YCCY_ACL_API_001',
                name: '地址准入',
                url: '/new/acl/acp/normal/preCreditApply',
                module: 'API',
                system: '个人风控中台系统',
                department: '大数据风控服务研发部',
              },
              style: {
                size: [50, 50],
                x: 550,
                y: 250,
                fill: '#71c567',
                labelText: '地址准入',
                labelFontSize: 10,
                labelPlacement: 'center',
              },
            },
          ],
          "edges": [
            {
              "id": "edge-102",
              "source": "myNode1",
              "target": "myNode2"
            },
            {
              "id": "edge-161",
              "source": "myNode2",
              "target": "myNode3"
            },
            {
              "id": "edge-237",
              "source": "myNode3",
              "target": "myNode4"
            },
            {
              "id": "edge-253",
              "source": "myNode3",
              "target": "myNode5"
            },
            {
              "id": "edge-133",
              "source": "myNode3",
              "target": "myNode6"
            },
            {
              "id": "edge-320",
              "source": "myNode4",
              "target": "myNode7"
            },
          ],
          "combos": [
            {
              "id": "A",
              "desc": 'TestA',
              "style": {
                "type": "rect",
                // fill: '#5B8FF9', // 蓝色填充
                stroke: '#1A1A1A', // 深色描边
                lineWidth: 2,
                fillOpacity: 0.2,
              }
            },
          ]
        },
        // palette: {
        //   field: d => d.id,
        // },
      combo: {
        type: 'rect',
        style: {
          radius: 8,
          labelText: (d) => d.desc,
          stroke: 'orange',
          style:{fill: 'red'}
        },
      },
      });
    graph.render();

  }, []);

  return <div ref={containerRef} style={{ border: '1px solid #ccc' }} />;
};

export default SwimlaneDiagramV5;
