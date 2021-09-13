import { gql } from '@apollo/client'

export const COLLECTION = gql`
  query GetCollection($db: String!) {
    collection(db: $db) {
      db
      data
    }
  }
`