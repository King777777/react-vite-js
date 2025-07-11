class SwimlaneLayout extends BaseLayout {
  async execute(data) {
    const combos = {}
    data.nodes.forEach((node) => {
      if (!combos[node.comboId]) combos[node.comboId] = []
      combos[node.comboId].push(node)
    })

    const result = []
    let laneIndex = 0
    for (const [comboId, nodes] of Object.entries(combos)) {
      nodes.forEach((node, i) => {
        result.push({
          id: node.id,
          style: {
            x: laneIndex * 300 + 100,
            y: i * 100 + 100,
          },
        })
      })
      laneIndex++
    }

    return { nodes: result }
  }
}
