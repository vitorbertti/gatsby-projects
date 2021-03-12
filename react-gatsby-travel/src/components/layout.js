import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import { GlobalStyle } from './styles/GlobalStyles'

const Layout = ({ children }) => {
  

  return (
    <>
      <GlobalStyle>
        <Header />
        <main>{children}</main>
      </GlobalStyle>
    </>
  )
}

export default Layout
