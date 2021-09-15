import { createContext, Component } from 'react'

export const UIContext = createContext()

class UIProvider extends Component {

  state = {
    dark: true,
    lang: 'en',
    // window: {
    //   width: 0,
    //   height: 0
    // }
  }

  // handleResize = () => {
  //   this.setState(p => ({
  //     ...p,
  //     window: {
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     }
  //   }))
  //   console.log(this.state)
  // }

  // componentDidMount() {
  //   window.addEventListener('resize', this.handleResize)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize)
  // }

  render() {

    const { state } = this

    return (
      <UIContext.Provider value={{ state }}>
        { this.props.children }
      </UIContext.Provider>
    )

  }

}

export default UIProvider