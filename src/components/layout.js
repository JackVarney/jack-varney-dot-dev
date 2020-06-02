import React from 'react'
import './layout.css'
import styled from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
