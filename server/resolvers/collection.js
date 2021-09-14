const { parseWeightCollection } = require('../helpers/methods')
const { sorts: s } = require('../helpers/constants')

const collectionResolvers = {

  Query: {

    collection: async (_, { db }, { dataSources: ds }) => {
      
      const body = { sorts: [s.date_ascending] }
      const { results } = await ds.notion.queryDatabase(db, body)
      const data = parseWeightCollection(results)
      return { db, data }
      
    }

  }

}

module.exports = collectionResolvers