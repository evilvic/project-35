import styled, { css } from 'styled-components'

export const SquaresContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0 0 3px;
`

const loadingAnimation = (t, n, s, e) => {
  const { void: v } = t
  return `
    @keyframes loading-${ n } {
      0%   { background: rgba(${ v }, ${ s }); }
      50%  { background: rgba(${ v }, ${ e }); }
      100% { background: rgba(${ v }, ${ s }); }
    }
  `
}

export const Square = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin: 0 3px 3px 0;}
  ${ ({ theme: t }) => css`
    ${ loadingAnimation(t, 1, 0.1, 0.2) }
    ${ loadingAnimation(t, 2, 0.2, 0.1) }
    ${ loadingAnimation(t, 3, 0.2, 0.3) }
    ${ loadingAnimation(t, 4, 0.3, 0.2) }
  `}
`

export const GraphContainer = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`