import { useQuery } from '@apollo/client'
import { COLLECTION } from 'src/apollo/requests'
import { collections as cs } from 'src/helpers/constants'
import WeightData from 'src/components/WeightData'

const Weight = () => {

  const { loading, error, data } = useQuery(COLLECTION, { variables: { db: cs.weight } })

  return (
    <WeightData
      loading={ loading }
      error={ error }
      data={ data }
    />
  )

}

export default Weight