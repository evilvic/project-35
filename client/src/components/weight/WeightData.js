import styled, { css } from 'styled-components'
import useElementSize from 'src/hooks/useElementSize'
import { computeMissingSquares, rdm } from 'src/helpers/methods'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 0 3px;
`

const animation = (n, s, e) => `
  @keyframes loading-${ n } {
    0%   { background: rgba(255, 255, 255, ${ s }); }
    50%  { background: rgba(255, 255, 255, ${ e }); }
    100% { background: rgba(255, 255, 255, ${ s }); }
  }
`

const Square = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin: 0 3px 3px 0;
  ${ ({ rdm, delta }) => rdm && css`
      animation: loading-${rdm} 1s infinite;
    ` || !delta && css`
      background: rgba(255,255,255,0.1);
    ` || delta === '0.0' && css`
      background: #E8EEF1;
    ` || delta.includes('-') && css`
      background: #0ABAB5;
    ` || css`
      background: #FF6584;
    `
  }
  ${ animation(1, 0.1, 0.2) }
  ${ animation(2, 0.2, 0.1) }
  ${ animation(3, 0.2, 0.3) }
  ${ animation(4, 0.3, 0.2) }
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
    <Container ref={ element }>
      {loading && [...Array(missingSquares).keys()].map((el, idx) =>
        <Square key={ idx } rdm={ rdm() } />
      )}
      {!loading && data && points.map(({ id, delta }) =>
        <Square key={ id } delta={ delta } />
      )}
      {!loading && data && [...Array(missingSquares).keys()].map((_, idx) =>
        <Square key={ idx } />
      )}
    </Container>
  )

}

export default WeightData