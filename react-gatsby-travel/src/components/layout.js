import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
  

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
