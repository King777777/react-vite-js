import { BaseLayout } from '@antv/g6';

class AlignedSwimlaneLayout extends BaseLayout{
  async execute(data) {
    const comboMap = {}
    data.nodes.forEach((node) => {
      const { combo } = node
      if (!comboMap[combo]) comboMap[combo] = []
      comboMap[combo].push(node)
    })

    const comboIds = Object.keys(comboMap)
    const xGap = 200
    const yGap = 100
    const startY = 100

    let lastY = startY
    const result = []

    comboIds.forEach((comboId, comboIndex) => {
      const nodes = comboMap[comboId]
      const x = comboIndex * xGap + 100

      // 本组第一个节点，与上一组最后一个节点对齐
      nodes.forEach((node, index) => {
        const y = index === 0 ? lastY : lastY + index * yGap
        result.push({
          id: node.id,
          style: { x, y },
        })
      })

      // 更新下一个泳道的参考 Y：当前泳道最后一个节点的 Y
      lastY = lastY + (nodes.length - 1) * yGap
    })

    return { nodes: result }
  }
}

export default AlignedSwimlaneLayout;
