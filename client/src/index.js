import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from 'src/router'
import { GlobalStyles } from 'src/styles/globals'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'src/styles/constants'
import UIProvider, { UIContext }  from 'src/contexts/ui'
import { ApolloProvider } from '@apollo/client'
import client from 'src/configs/apollo'
import { useTranslation } from 'react-i18next'
import 'src/locales/i18n'

const App = () => {

  const ui = useContext(UIContext)
  const { i18n } = useTranslation()

  const theme = ui.state.dark ? dark : light
  i18n.changeLanguage(ui.state.lang);

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )

}

const AppWithContexts = () => (
  <UIProvider>
    <App/>
  </UIProvider>
)

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client= { client }>
      <AppWithContexts />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)