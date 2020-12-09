import styles from './Hero.module.css'
import styled from 'styled-components'
import { size } from "../constants/sizes";



const StyledName = styled.div`
  font-size: 1em;
  @media (min-width: 400px) {
    font-size: 2em;
  }
 `
const StyledStrap = styled.h3`
  color: #40A8C4;
  font-size: 1em;
  @media (min-width: 400px) {
    font-size: 2em;
  }
`
const StyledImage = styled.div`
  img {
    position: absolute;
    top: 100px;
    left: 300px;
  }
  background-color: white;
`

export default function Hero() {
  return (
    <section className={styles.hero}>
  <StyledName>Hi, I am Ross </StyledName>
  <article>
    <StyledStrap>self taught frontend engineer building the latest apps in React</StyledStrap>
  </article>
  <StyledImage><img width='400px' height='400px' src='img/undraw.svg'/></StyledImage>
</section>
  )
}