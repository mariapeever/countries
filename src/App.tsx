import React, { useState, useEffect } from "react"

import { useAppDispatch } from "./hooks"

import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'
import {
  Base,
  MainNav } from "./components"

import {
  BrowserRouter as Router
} from "react-router-dom"

import store from "./store"
import BootstrapProvider from "@bootstrap-styled/provider/lib/BootstrapProvider"

import { en } from "./i18n/locales/en"

import { 
  Theme,
  themeSwitched,
  selectTheme } from "./reducers/themeSlice"

import {
  Form
} from "@bootstrap-styled/v4"

import {
  Top,
  Brand,
  ModeIcon,
  ModeButton,
  Wrapper,
  Logo,
  LightTheme,
  DarkTheme
} from "./styled"

const App: React.FC = (): JSX.Element => {

 const [theme, setTheme]: [
    Theme,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(LightTheme)

  const switchTheme = () => {
    console.log(theme, theme.name)
    setTheme(theme.name == "Light" ?  DarkTheme : LightTheme)
  }

  return (
    <Provider store={store}>
      <BootstrapProvider 
        reset={true} 
        injectGlobal={true}
        theme={theme.styles}
        >
        <Router>
          <MainNav>
            <ModeButton 
              color="link"
              onClick={switchTheme}
            >
              <ModeIcon />
               {theme.name == "Light" ?  "Dark" : "Light"} Mode 
            </ModeButton>
          </MainNav>
          <Base />
        </Router>
      </BootstrapProvider>
    </Provider>
  )
}


export default App
