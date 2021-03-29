import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import { GlobalStyle } from './styles/GlobalStyles'
import Footer from './Footer'

const Layout = ({ children }) => {
  

  return (
    <>
      <GlobalStyle>
        <Header />
        <main>{children}</main>
        <Footer />
      </GlobalStyle>
    </>
  )
}

export default Layout
