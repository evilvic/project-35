const parseWeightCollection = (results) => {

  data = []

  results.forEach(({ properties }) => {
    const point = {}
    for (key in properties) {
      if (key === 'id') point['id'] = properties[key].title[0].text.content
      if (key === 'weight') point['weight'] = properties[key].number.toFixed(1)
      if (key === 'date') point['date'] = properties[key].date.start
    }
    data.push(point)
  })

  data.map((el, idx, arr) => {
    if (idx === 0) el['delta'] = '0.0'
    if (idx !== 0) el['delta'] = (el.weight - arr[idx - 1].weight).toFixed(1)
    return el
  })

  return JSON.stringify(data)

}

module.exports = {
  parseWeightCollection
}