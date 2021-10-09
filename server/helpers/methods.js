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

const parseReadingCollection = (results) => {
  
  data = []

  results.forEach(({ properties }) => {
    const point = {}
    for (key in properties) {
      if (key === 'id') point['id'] = properties[key].title[0].text.content
      if (key === 'time') point['time'] = properties[key].number
      if (key === 'pages') point['pages'] = properties[key].number
      if (key === 'date') point['date'] = properties[key].date.start
    }
    data.push(point)
  })

  const values = data.map(({ time }) => time);
  const max = Math.max(...values)

  data.map(el => {
    el['range'] = Math.round((el.time / max) * 100)
    return el
  })

  return JSON.stringify(data)

}

const parsers = {
  weight: results => parseWeightCollection(results),
  reading: results => parseReadingCollection(results)
}

module.exports = {
  parseWeightCollection,
  parsers
}