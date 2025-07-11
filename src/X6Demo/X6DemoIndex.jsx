import { Graph, Cell, CellView, Node } from "@antv/x6";

const data = [
  {
    id: "1",
    shape: "lane",
    width: 200,
    height: 500,
    position: {
      x: 60,
      y: 60,
    },
    label: "场景金融系统",
  },
  {
    id: "2",
    shape: "lane",
    width: 200,
    height: 500,
    position: {
      x: 260,
      y: 60,
    },
    label: "远程业务管理系统",
  },
  {
    id: "3",
    shape: "lane",
    width: 200,
    height: 500,
    position: {
      x: 460,
      y: 60,
    },
    label: "远程公共系统",
  },
  {
    id: "4",
    shape: "lane",
    width: 200,
    height: 500,
    position: {
      x: 660,
      y: 60,
    },
    label: "远程核算系统",
  },
  {
    id: "5",
    shape: "lane-rect",
    width: 100,
    height: 60,
    position: {
      x: 110,
      y: 120,
    },
    label: "节点0",
    parent: "1",
  },
  {
    id: "6",
    shape: "lane-rect",
    width: 100,
    height: 60,
    position: {
      x: 110,
      y: 270,
    },
    label: "节点1",
    parent: "1",
  },
  {
    id: "7",
    shape: "lane-rect",
    width: 100,
    height: 60,
    position: {
      x: 310,
      y: 120,
    },
    label: "节点2",
    parent: "2",
  },
  {
    id: "8",
    shape: "lane-rect",
    width: 100,
    height: 60,
    position: {
      x: 310,
      y: 270,
    },
    label: "节点3",
    parent: "2",
  },
  {
    id: "14",
    shape: "lane-edge",
    source: "5",
    target: "6",
  },
  {
    id: "15",
    shape: "lane-edge",
    source: "6",
    target: "7",
  },
  {
    id: "16",
    shape: "lane-edge",
    source: "7",
    target: "8",
  },
];
Graph.registerNode(
  "lane",
  {
    inherit: "rect",
    markup: [
      {
        tagName: "rect",
        selector: "body",
      },
      {
        tagName: "rect",
        selector: "name-rect",
      },
      {
        tagName: "text",
        selector: "name-text",
      },
    ],
    attrs: {
      body: {
        fill: "#FFF",
        stroke: "red",
        strokeWidth: 1,
      },
      "name-rect": {
        width: 200,
        height: 30,
        fill: "#5F95FF",
        stroke: "#fff",
        strokeWidth: 1,
        x: -1,
      },
      "name-text": {
        ref: "name-rect",
        refY: 0.5,
        refX: 0.5,
        textAnchor: "middle",
        fontWeight: "bold",
        fill: "#fff",
        fontSize: 12,
      },
    },
  },
  true
);

Graph.registerNode(
  "lane-rect",
  {
    inherit: "rect",
    width: 100,
    height: 60,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: "#5F95FF",
        fill: "#EFF4FF",
      },
      text: {
        fontSize: 12,
        fill: "#262626",
      },
    },
  },
  true
);

Graph.registerNode(
  "lane-polygon",
  {
    inherit: "polygon",
    width: 80,
    height: 80,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: "#5F95FF",
        fill: "#EFF4FF",
        refPoints: "0,10 10,0 20,10 10,20",
      },
      text: {
        fontSize: 12,
        fill: "#262626",
      },
    },
  },
  true
);

Graph.registerEdge(
  "lane-edge",
  {
    inherit: "edge",
    attrs: {
      line: {
        stroke: "#A2B1C3",
        strokeWidth: 2,
      },
    },
    label: {
      attrs: {
        label: {
          fill: "#A2B1C3",
          fontSize: 12,
        },
      },
    },
  },
  true
);

const graph = new Graph({
  container: document.getElementById("container")!,
  connecting: {
  router: {
    name: "manhattan",
  },
},
translating: {
  restrict(cellView: CellView) {
    const cell = cellView.cell as Node;
    const parentId = cell.prop("parent");
    if (parentId) {
      const parentNode = graph.getCellById(parentId) as Node;
      if (parentNode) {
        return parentNode.getBBox().moveAndExpand({
          x: 0,
          y: 30,
          width: 0,
          height: -30,
        });
      }
    }
    return cell.getBBox();
  },
},
});

setTimeout(() => {
  const cells: Cell[] = [];
  data.forEach((item: any) => {
    if (item.shape === "lane-edge") {
      cells.push(graph.createEdge(item));
    } else {
      cells.push(graph.createNode(item));
    }
  });
  graph.resetCells(cells);
  graph.zoomToFit({ padding: 10, maxScale: 1 });
}, 1000);
