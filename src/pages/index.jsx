import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const monospace = `'Lucida Console', Monaco, monospace`

const Header = styled.header`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.9);
`

const Content = styled.div`
  padding: 16px 32px;

  text-transform: lowercase;
  background-color: black;

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
  color: hsl(200, 100%, 50%);
`

const create360GradientAnimation = () => {
  const getBackgroundGradient = num => `
    ${num / 3.6}% {
      background: 1rem 100rem / 1em 1em
        repeating-radial-gradient(
          1.5rem 1rem,
          hsl(${num + 180}, 50%, 50%) 0%,
          hsl(${num + 180}, 50%, 55%) 50%
        );
    }
  `

  let css = `
@keyframes DancingGradientColors {
  `
  for (let i = 0; i < 360; i += 1) {
    css += getBackgroundGradient(i)
  }
  css += `    
}
  `

  return css
}

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

  background-color: hsl(200, 100%, 0%);
`

const DancingBackground = styled.div`
  height: 100%;
  width: 100%;

  font-size: 10000px;
  background-color: black;
  ${create360GradientAnimation()}

  @keyframes DancingGradient {
    0% {
      font-size: 10000px;
    }
    50% {
      font-size: 7500px;
    }
    100% {
      font-size: 10000px;
    }
  }

  @media (min-width: 426px) {
    animation: DancingGradient 200s linear infinite,
      DancingGradientColors 60s linear infinite;
  }
`

const IndexPage = () => {
  const JS = () => (
    <>
      <StyledAbbriviation title="JavsScript">JS</StyledAbbriviation> lover
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

  const HTML = () => (
    <>
      <StyledAbbriviation title="Hypertext Markup Language">
        HTML
      </StyledAbbriviation>{' '}
      enthusiast
    </>
  )

  return (
    <Layout>
      <SEO title="Jack Varney | JavaScript Developer" />
      <Header>
        <DancingWrapper>
          <DancingBackground />
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
