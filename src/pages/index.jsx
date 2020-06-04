import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DancingCanvas from '../components/DancingCanvas'

const monospace = `'Lucida Console', Monaco, monospace`

const Header = styled.header`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: hsl(0, 100%, 0%);
`

const Content = styled.div`
  padding: 16px 32px;

  text-transform: lowercase;

  background-color: white;

  @media (min-width: 426px) {
    padding: 64px 32px;
  }

  @media (min-width: 768px) {
    padding: 64px 96px;
  }
`

const Title = styled.h1`
  margin: 0;

  font-family: ${monospace};
  text-align: center;
  font-size: 2rem;

  @media (min-width: 426px) {
    font-size: 3rem;
  }
`
const SubTitle = styled.span`
  display: block;

  margin: 32px 0 0 0;

  font-family: ${monospace};
  font-size: 1rem;
  line-height: 24px;

  @media (min-width: 768px) {
    line-height: 0px;
  }
`

const StyledAbbriviation = styled.abbr`
  color: hsl(220, 100%, 50%);
`

const DancingWrapper = styled.div`
  transform: rotate(180deg);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  height: calc(100% - 100px);
  width: calc(100% - 100px);
  padding: 50px;

  @media (min-height: 768px) {
    height: calc(100% - 200px);
    width: calc(100% - 200px);
    padding: 100px;
  }
`

const IndexPage = () => {
  const JS = () => (
    <>
      <StyledAbbriviation title="JavsScript">JS</StyledAbbriviation> fanatic
    </>
  )

  const HTML = () => (
    <>
      <StyledAbbriviation title="Hypertext Markup Language">
        HTML
      </StyledAbbriviation>{' '}
      enthusiast
    </>
  )

  const CSS = () => (
    <>
      <StyledAbbriviation title="Cascading Style Sheets">
        CSS
      </StyledAbbriviation>{' '}
      deviant
    </>
  )

  return (
    <Layout>
      <SEO title="Jack Varney | JavaScript Developer" />

      <Header>
        <DancingWrapper>
          <DancingCanvas />
        </DancingWrapper>
        <Content>
          <Title>
            Jack Varney
            <SubTitle>
              <HTML />
              {' / '}

              <JS />
              {' / '}

              <CSS />
            </SubTitle>
          </Title>
        </Content>
      </Header>
    </Layout>
  )
}

export default IndexPage
