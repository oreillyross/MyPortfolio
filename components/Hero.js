import {Link} from "next"
export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-name">Hi, My name is Ross </h1>
      <h3 className="hero-strap">
        self taught software engineer building awesome apps using{" "}
        <Link href="/jj" >React</Link>, Typescript, GraphQL,
        {/* TODO Add a whole lot more tech that you use */}
      </h3>
      <div className="hero-img">
        <img width="400px" height="400px" src="img/undraw_freelancer.svg" />
      </div>
      <div>Something else goes here</div>
    </section>
  );
}
