import { BaseLayout } from '@antv/g6';

//自定义布局

class CustomLayoutIndex extends BaseLayout {
  id = 'diagonal-layout';

  async execute(data){
    const { nodes = [] } = data;
    const grouped = nodes.reduce((acc, node) => {
      const { combo } = node;
      if (!acc[combo]) {
        acc[combo] = [];
      }
      acc[combo].push(node);
      return acc;
    }, {});
    const groupKeys = Object.keys(grouped);
    const result = [];

    groupKeys.forEach((comboId, groupIndex) => {
      const group = grouped[comboId];
      const x = groupIndex * 150;
      group.forEach((node, nodeIndex) => {
        result.push({
          id: node.id,
          style: {
            x,
            y: nodeIndex * 100 + groupIndex * 100,
          }
        });
      });
    });
    console.log("result", result)
    return {
      // nodes: nodes.map((node, index) => ({
      //   id: node.id,
      //   style: {
      //     x: 50 * index + 25,
      //     y: 50 * index + 25,
      //   },
      // })),
      nodes: result
    };
  }
}
export default CustomLayoutIndex;
