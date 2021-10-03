import { useQuery } from '@apollo/client'
import { COLLECTION } from 'src/apollo/requests'
import { collections as cs } from 'src/helpers/constants'
import WeightData from 'src/components/WeightData'
import WeightGrap from 'src/components/WeightGraph'

const Weight = () => {

  const { loading, error, data } = useQuery(COLLECTION, { variables: { db: cs.weight } })

  return (
    <>
      {/* <WeightData
        loading={ loading }
        error={ error }
        data={ data }
      /> */}
      <WeightGrap
        loading={ loading }
        error={ error }
        data={ data }
      />
    </>
  )

}

export default Weight