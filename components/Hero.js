import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
  <h1>Ross O'Reilly</h1>
  <article>
    <p>Full stack software developer</p>
    <span>Photo by <a href="https://unsplash.com/@halacious?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Halacious</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  </article>
</section>
  )
}