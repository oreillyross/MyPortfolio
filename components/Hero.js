import styles from './Hero.module.css'
import styled from 'styled-components'

const StyledName = styled.h1`
  color: black;
  font-size: 5em;
`
const StyledStrap = styled.h3`
  color: #40A8C4;
  font-size: 3em;
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