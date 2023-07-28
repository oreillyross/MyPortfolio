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
      <div>If I am doing some sort of exploration work in Python I will generally fire up a replit session. 
        Especially if I need to share my code and proof of concept with other coders.
        Replit has a fantastic generative AI feature called Ghostwriter which helps many times in exploring ideas
        and getting inspiration from its suggestions. 
        My repls can all be found here <a href="https://replit.com/@oreillyross">@oreillyross replit</a>
        </div>
    </div>
  );
}

export default Some;
