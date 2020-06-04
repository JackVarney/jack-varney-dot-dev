import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DancingCanvas from '../components/DancingCanvas'

const monospace = `'Lucida Console', Monaco, monospace`

const HeaderSection = styled.section`
  height: 100%;
  width: 100%;
`

const Header = styled.header`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: hsl(0, 100%, 0%);
`

const Content = styled.div`
  padding: 64px 32px;

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

  height: 100%;
  width: 100%;

  @media (min-height: 768px) {
    height: calc(100% - 256px);
    width: calc(100% - 256px);
    padding: 128px;
  }
`

const IndexPage = () => {
  const JS = () => (
    <>
      <StyledAbbriviation title="JavaScript">JS</StyledAbbriviation> fanatic
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

      <HeaderSection>
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
      </HeaderSection>
    </Layout>
  )
}

export default IndexPage
