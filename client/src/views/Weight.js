import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { COLLECTION } from 'src/apollo/requests'
import { collections as c } from 'src/helpers/constants'
import styled, { css } from 'styled-components'

const WeightSquare = styled.div`

  width: 50px;
  height: 50px;
  border-radius: 5px;

  ${props => props.delta === '0.0' && css`
      background: #E8EEF1;
    ` || props.delta.includes('-') && css`
      background: #0ABAB5;
    ` || css`
      background: #FF6584;
    `
  }

`

const Weight = () => {

  const { t } = useTranslation()
  const { loading, error, data } = useQuery(COLLECTION, { variables: { db: c.weight } })
  let points

  if (!loading && data) {
    const { collection: { data: d } } = data
    points = JSON.parse(d)
  }
  if (!loading && error) console.error('Error in query COLLECTION >>> ', error)

  return (
    <>
      <h2>{ t('views.weight') }</h2>
      { loading ? <p>loading...</p> : error ? <p>error</p> :
        <>
          { points.map(el =>
            <WeightSquare key={ el.id } delta={ el.delta } />
          )}
        </>
      }
    </>
  )

}

export default Weight