const { gql } = require('apollo-server')

const types = gql`

  type Collection {
    db: String
    data: String
  }

`

module.exports = types