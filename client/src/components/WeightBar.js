import { Bar, LeftBar, BarButton } from 'src/styles/components'
import { BsSquare, BsSun, BsMoon } from 'react-icons/bs';
import { VscGraphLine } from 'react-icons/vsc'
import { useContext } from 'react'
import { UIContext } from 'src/contexts/ui'

const WeightBar = ({ handleTab }) => {

  console.log("DOCUMENT: ", document)
  console.log("PARENT: ", parent)
  console.log("WINDOW: ", window)

  const ui = useContext(UIContext)

  return (
    <Bar>
      <LeftBar>
        <BarButton onClick={ () => ui.toggleTheme() }>
          { ui.state.dark ? <BsSun/> : <BsMoon/> }
        </BarButton>
        <BarButton onClick={ () => handleTab('data') }>
          <BsSquare/>
        </BarButton>
        <BarButton onClick={ () => handleTab('graph') }>
          <VscGraphLine/>
        </BarButton>
      </LeftBar>
      <div>
      </div>
    </Bar>
  )
}

export default WeightBar