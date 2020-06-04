import React from 'react'
import styled from 'styled-components'
import './index.css'

const monospace = `'Lucida Console', Monaco, monospace`

const AllContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: inline-block;
`

const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 1rem;
  padding: 0.5rem;

  font-size: 1rem;
  font-weight: 900;
  font-family: ${monospace};
  text-transform: uppercase;

  background-color: white;
  color: black;
`

const Layout = ({ children }) => {
  return (
    <AllContent>
      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()}, me</Footer>
    </AllContent>
  )
}

export default Layout
