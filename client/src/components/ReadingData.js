import styled, { css } from 'styled-components'
import { SquaresContainer, Square } from 'src/styles/components'
import useElementSize from 'src/hooks/useElementSize'
import { computeMissingSquares, rdm } from 'src/helpers/methods'

const WeightSquare = styled(Square)`
  ${ ({ theme, rdm, goal }) => rdm && css`
    animation: loading-${rdm} 1s infinite;
  ` || goal == 0 && css`
    background: ${ theme.red };
  ` || !goal && css`
    background: rgba(${ theme.void }, 0.1);
  ` || goal == 1 && css`
    background: ${ theme.purple };
  `|| css`
    background: ${ theme.blue };
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
      {!loading && data && missingSquares >= 0 && points.map(({ id, goal }) =>
        <WeightSquare key={ id } goal={ goal } />
      )}
      {!loading && data && missingSquares >= 0 && [...Array(missingSquares).keys()].map((_, idx) =>
        <WeightSquare key={ idx } />
      )}
    </SquaresContainer>
  )

}

export default WeightData