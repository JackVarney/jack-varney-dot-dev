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
  align-items: center;
  justify-content: center;

  color: hsl(0, 100%, 0%);
`

const Content = styled.div`
  text-align: center;
  text-transform: lowercase;
  background-color: white;
`

const Title = styled.h1`
  margin: 0 2rem;

  font-family: ${monospace};
  font-size: 2rem;

  @media (min-width: 426px) {
    font-size: 3rem;
  }
`
const SubTitle = styled.span`
  display: block;

  font-family: ${monospace};
  font-size: 1rem;
  line-height: 24px;

  @media (min-width: 768px) {
    line-height: 0px;
    margin: 1rem 0 0 0;
  }
`

const StyledAbbriviation = styled.abbr`
  color: hsl(180, 100%, 5%);
`

const CanvasWrapper = styled.div`
  position: absolute;
  height: ${props => props.height || '12px'};
  width: ${props => props.width || '12px'};
  top: ${props => props.top};
  ${props => (props.left ? `left: ${props.left}` : '')};
  ${props => (props.right ? `right: ${props.right}` : '')};
`

const Square = props => (
  <CanvasWrapper {...props}>
    <DancingCanvas base={props.base} />
  </CanvasWrapper>
)

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
          <Square top="10%" left="40%" base={10} />

          <Square top="30%" left="20%" base={40} />
          <Square top="30%" left="calc(20% + 12px)" base={160} />

          <Square top="30%" left="70%" base={160} />
          <Square top="80%" left="70%" base={50} />

          <Square top="35%" left="40%" base={280} />
          <Square top="60%" left="40%" base={220} />

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
