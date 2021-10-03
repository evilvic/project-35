import styled, { css } from 'styled-components'

export const SquaresContainer = styled.div`
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 5px 0 0 3px;
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
  height: calc(100vh - 30px);
  overflow: hidden;
`

export const Bar = styled.div`
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 2px;
`

export const LeftBar = styled.div`
  display: flex;
`

export const BarButton = styled.button `
  width: 25px;
  height: 25px;
  background: transparent;
  cursor: pointer;
  border: 1px solid rgba(${ ({ theme }) => theme.void }, 0.2);
  border-radius: 3px;
  color: rgba(${ ({ theme }) => theme.void }, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
`