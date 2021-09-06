const { gql } = require('apollo-server')

const types = gql`

  type Collection {
    title: String
  }

`

module.exports = types