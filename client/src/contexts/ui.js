import { createContext, Component } from 'react'

export const UIContext = createContext()

class UIProvider extends Component {

  state = {
    dark: true,
    lang: 'en'
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      ...prevState,
      dark: !prevState.dark
    }))
  }

  render() {

    const { state, toggleTheme } = this

    return (
      <UIContext.Provider value={{ state, toggleTheme }}>
        { this.props.children }
      </UIContext.Provider>
    )

  }

}

export default UIProvider