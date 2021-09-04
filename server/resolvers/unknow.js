const unknowResolvers = {

  Query: {

    getUnknow: async (_, __, { dataSources: ds }) => {
      const data = await ds.notion.queryDatabase()
      console.log(data)
      return { title: 'weight' }
    }

  }

}

module.exports = unknowResolvers