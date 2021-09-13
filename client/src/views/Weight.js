import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { COLLECTION } from 'src/apollo/requests'
import { collections as c } from 'src/helpers/constants'

const Weight = () => {

  const { t } = useTranslation()
  const { loading, error, data } = useQuery(COLLECTION, { variables: { db: c.weight } })
  let points

  if (!loading && data) {
    const { collection: { data: d } } = data
    points = JSON.parse(d)
    console.log(points)
  }
  if (!loading && error) console.error('Error in query COLLECTION >>> ', error)

  return (
    <>
      <h2>{ t('views.weight') }</h2>
      { loading ? <p>loading...</p> : error ? <p>error</p> :
        <>
          { points.map(el =>
            <div key={ el.id }>
              <p>{ el.weight }</p>
            </div>
          )}
        </>
      }
    </>
  )

}

export default Weight