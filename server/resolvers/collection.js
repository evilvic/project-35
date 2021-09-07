const { parseWeightCollection } = require('../helpers/methods')

const collectionResolvers = {

  Query: {

    collection: async (_, { db }, { dataSources: ds }) => {

      const { results } = await ds.notion.queryDatabase(db)
      const data = parseWeightCollection(results)
      return { db, data }
      
    }

  }

}

module.exports = collectionResolvers