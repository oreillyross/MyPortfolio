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


export default function Hero() {
  return (
    <section className={styles.hero}>
  <StyledName>Ross O'Reilly</StyledName>
  <article>
    <StyledStrap>Full stack software developer</StyledStrap>
  </article>
</section>
  )
}