import { useTranslation } from 'react-i18next'
import { gql, useQuery } from '@apollo/client'

const COLLECTION = gql`
  query GetCollection($db: String!) {
    collection(db: $db) {
      db
      data
    }
  }
`

const Weight = () => {

  const { t } = useTranslation()

  const { loading, error, data } = useQuery(COLLECTION, {
    variables: {
      db: '966ad8cc8faf4695b3743f22efbc6d99'
    }
  })

  console.log(loading, error, data)

  return (
    <h2>{ t('views.weight') }</h2>
  )

}

export default Weight