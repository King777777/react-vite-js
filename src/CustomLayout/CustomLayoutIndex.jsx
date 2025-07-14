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
      const x = groupIndex * 100;
      group.forEach((node, nodeIndex, arr) => {

        result.push({
          id: node.id,
          style: {
            x,
            y: nodeIndex * 100 + (groupIndex) *100,
          }
        });
        // if (nodeIndex === 0 && groupIndex !== 0 && arr.length > 1) {
        //   result.push({
        //     id: node.id,
        //     combo: comboId,
        //     style: {
        //       x: groupIndex * 150,
        //       y: 0, // 插入不可见的虚拟节点，使得分组框 combo 顶部对齐位置
        //       opacity: 0
        //     },
        //     size: 1,
        //     type: 'rect',
        //     visible: false,
        //   });
        // } else {
        //   result.push({
        //     id: node.id,
        //     style: {
        //       x,
        //       y: nodeIndex * 100 + (groupIndex) *100,
        //     }
        //   });
        // }

      });
    });
    console.log("result", result)
    return {
      nodes: result
    };
  }
}
export default CustomLayoutIndex;
