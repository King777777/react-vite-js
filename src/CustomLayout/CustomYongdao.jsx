import { BaseLayout } from '@antv/g6';

class AlignedSwimlaneLayout extends BaseLayout{
  async execute(data) {
    const res = []
    data.nodes.forEach((node) => {
      res.push({
        id: node.id,
        style: { x: node.x, y: node.y },
      })
    });
    return { nodes: res }
  }
}

export default AlignedSwimlaneLayout;
