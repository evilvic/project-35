import styled, { css } from 'styled-components'
import { SquaresContainer, Square } from 'src/styles/components'
import useElementSize from 'src/hooks/useElementSize'
import { computeMissingSquares, rdm } from 'src/helpers/methods'

const WeightSquare = styled(Square)`
  ${ ({ theme, rdm, delta }) => rdm && css`
    animation: loading-${rdm} 1s infinite;
  ` || !delta && css`
    background: rgba(${ theme.void }, 0.1);
  ` || delta === '0.0' && css`
    background: ${ theme.purple };
  ` || delta.includes('-') && css`
    background: ${ theme.blue };
  ` || css`
    background: ${ theme.red };
  `}
`

const WeightData = ({ loading, error, data }) => {

  let points

  if (!loading && data) {
    const { collection: { data: d } } = data
    points = JSON.parse(d)
  }
  if (!loading && error) console.error('Error in query COLLECTION >>> ', error)

  const { element, width, height } = useElementSize(data)
  const missingSquares = computeMissingSquares(data, points, width, height)

  return (
    <SquaresContainer ref={ element }>
      {loading && [...Array(missingSquares).keys()].map((_, idx) =>
        <WeightSquare key={ idx } rdm={ rdm() } />
      )}
      {!loading && data && points.map(({ id, delta }) =>
        <WeightSquare key={ id } delta={ delta } />
      )}
      {!loading && data && [...Array(missingSquares).keys()].map((_, idx) =>
        <WeightSquare key={ idx } />
      )}
    </SquaresContainer>
  )

}

export default WeightData