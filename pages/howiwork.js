import Link from "next/link";

function Some() {
  return (
    <div>
      <h1>This page is all about how I generally work.</h1>
      <p>
        I use Git a lot and generally follow the{" "}
        <Link href="https://guides.github.com/introduction/flow/">
          GitHub Flow principles
        </Link>
      </p>
    </div>
  );
}

export default Some;
