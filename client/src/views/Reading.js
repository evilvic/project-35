import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { COLLECTION } from 'src/apollo/requests'
import { collections as cs } from 'src/helpers/constants'
import WeightBar from 'src/components/WeightBar'
import WeightData from 'src/components/WeightData'
import WeightGrap from 'src/components/WeightGraph'

const Weight = () => {

  const [ tab, setTab ] = useState('data')
  const { loading, error, data } = useQuery(COLLECTION, { variables: { db: cs.reading } })

  const handleTab = tab => setTab(tab)

  return (
    <>
      <WeightBar
        tab= { tab }
        handleTab= { handleTab }
      />
      {tab === 'data' && <WeightData
        loading={ loading }
        error={ error }
        data={ data }
      />}
      {tab === 'graph' && <WeightGrap
        loading={ loading }
        error={ error }
        data={ data }
      />}
    </>
  )

}

export default Weight