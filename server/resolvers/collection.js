const collectionResolvers = {

  Query: {

    collection: async (_, __, { dataSources: ds }) => {

      const data = []
      const id = '966ad8cc8faf4695b3743f22efbc6d99'

      const { results } = await ds.notion.queryDatabase(id)

      results.forEach(({ properties }) => {
        const point = {}
        for (key in properties) {
          if (key === 'id') point['id'] = properties[key].title[0].text.content
          if (key === 'weight') point['weight'] = properties[key].number.toFixed(1)
          if (key === 'date') point['date'] = properties[key].date.start
        }
        data.push(point)
      })

      console.log(data)

      return 'ready'
      
    }

  }

}

module.exports = collectionResolvers