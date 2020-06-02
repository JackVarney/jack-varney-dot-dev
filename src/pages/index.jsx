import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Header = styled.header`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.9);
`
const Title = styled.h1`
  margin: 0;

  text-align: center;
  font-size: 4rem;
`
const SubTitle = styled.span`
  display: block;
  font-size: 3rem;
`

const SubSubTitle = styled.span`
  display: block;

  margin-top: 8px;

  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-style: italic;
`

const create360GradientAnimation = () => {
  let css = `
  @keyframes DancingGradientColors {
  `
  for (let i = 0; i < 360; i += 2) {
    css += `
    ${i / 3.6}% {
      background: 1rem 100rem / 1em 1em
        repeating-radial-gradient(
          1.5rem 1rem,
          hsl(${i}, 90%, 20%) 0%,
          hsl(${i}, 90%, 25%) 50%
        );
    }
    `
  }
  css += `
    100% {
      background: 1rem 100rem / 1em 1em
        repeating-radial-gradient(
          1.5rem 1rem,
          hsl(360, 100%, 20%) 0%,
          hsl(360, 100%, 25%) 50%
        );
    }
  }
  `

  return css
}

const DancingBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  font-size: 100px;
  background-color: black;
  ${create360GradientAnimation()}

  @keyframes DancingGradient {
    0% {
      font-size: 10000px;
    }
    20% {
      font-size: 8000px;
    }
    30% {
      font-size: 9000px;
    }
    60% {
      font-size: 7000px;
    }
    100% {
      font-size: 10000px;
    }
  }

  animation: DancingGradient 20s linear infinite,
    DancingGradientColors 20s linear infinite;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Jack Varney | JavaScript Developer" />
      <Header>
        <DancingBackground />
        <Title>
          Jack Varney<SubTitle>JavaScript Developer</SubTitle>
        </Title>
        <SubSubTitle>(CSS gradient deviant)</SubSubTitle>
      </Header>
    </Layout>
  )
}

export default IndexPage
