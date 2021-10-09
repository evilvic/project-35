const { parsers: p } = require('../helpers/methods')
const { sorts: s, databases: d } = require('../helpers/constants')

const collectionResolvers = {

  Query: {

    collection: async (_, { db: id }, { dataSources: ds }) => {

      const db = d[id]
      const body = { sorts: [s.date_ascending] }
      const { results } = await ds.notion.queryDatabase(db, body)
      const data = p[id](results)
      return { db, data }
      
    }

  }

}

module.exports = collectionResolvers