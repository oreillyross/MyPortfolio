

<<<<<<< HEAD
export default function Hero() {
  return (
    <section className='hero'>
  <h1 className='hero-name'>Hi, My name is Ross </h1>
  <h3 className='hero-strap'>self taught frontend engineer building awesome apps using React, Typescript, and GraphQL</h3>
  <div className='hero-img' ><img width='400px' height='400px' src='img/undraw.svg'/></div>
=======

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
>>>>>>> parent of ada0384... add svg
</section>
  )
}