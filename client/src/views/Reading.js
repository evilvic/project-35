import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { COLLECTION } from 'src/apollo/requests'
import { collections as cs } from 'src/helpers/constants'
import WeightBar from 'src/components/WeightBar'
import ReadingData from 'src/components/ReadingData'
import ReadingGraph from 'src/components/ReadingGraph'

const Weight = () => {

  const [ tab, setTab ] = useState('data')
  const { loading, error, data } = useQuery(COLLECTION, { variables: { db: 'reading' } })

  const handleTab = tab => setTab(tab)

  return (
    <>
      <WeightBar
        tab= { tab }
        handleTab= { handleTab }
      />
      {tab === 'data' && <ReadingData
        loading={ loading }
        error={ error }
        data={ data }
      />}
      {tab === 'graph' && <ReadingGraph
        loading={ loading }
        error={ error }
        data={ data }
      />}
    </>
  )

}

export default Weight