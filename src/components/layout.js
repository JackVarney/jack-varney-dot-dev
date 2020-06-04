import React from 'react'
import styled from 'styled-components'
import './index.css'

const monospace = `'Lucida Console', Monaco, monospace`

const Main = styled.main`
  height: 100%;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  height: '24px';
  padding: 8px 0;

  font-size: 1rem;
  font-weight: 900;
  font-family: ${monospace};
  text-transform: uppercase;

  background-color: black;
  color: white;
`

const Layout = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()}, me</Footer>
    </>
  )
}

export default Layout
