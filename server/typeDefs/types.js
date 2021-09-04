const { gql } = require('apollo-server')

const types = gql`

  type Unknow {
    title: String
  }

`

module.exports = types