import { createContext, Component } from 'react'

export const UIContext = createContext()

class UIProvider extends Component {

  state = {
    dark: true,
    lang: 'en'
  }

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