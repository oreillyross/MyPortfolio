import Link from "next/link";

function Some() {
  return (
    <div>
      This page is all about how I generally work. And is aimed for hiring
      managers to determine how I might best fit into the team.
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
