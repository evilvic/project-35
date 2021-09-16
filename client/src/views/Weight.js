import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { COLLECTION } from 'src/apollo/requests'
import { collections as c } from 'src/helpers/constants'
import styled, { css } from 'styled-components'
import useElementSize from 'src/hooks/useElementSize'
import { computeMissingSquares } from 'src/helpers/methods'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 0 3px;
`

const WeightSquare = styled.div`

  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin: 0 3px 3px 0;

  ${props => !props.delta && css `
      background: rgba(255,255,255,0.1);
    ` || props.delta === '0.0' && css`
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

  const { element, width, height } = useElementSize(data)
  const missingSquares = computeMissingSquares(data, points, width, height)


  return (
    <>
      <Container ref={element}>
        { !loading && data && points.map(el =>
          <WeightSquare key={ el.id } delta={ el.delta } />
        )}
        { !loading && data && [...Array(missingSquares < 0 ? 0 : missingSquares).keys()].map((el, idx) =>
          <WeightSquare key={ idx } />
        )}

      </Container>
    </>
  )

}

export default Weight

// <h2>{ t('views.weight') }</h2>