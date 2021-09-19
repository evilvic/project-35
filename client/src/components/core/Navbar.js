import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation = styled.nav`
  width: 100vw;
  height: 50px;
`

const Navbar = () => {
  return (
    <Navigation>
      <Link to='/'>p-35</Link>
      {' > '}
      <Link to='/weight'>weight</Link>
    </Navigation>
  )
}

export default Navbar