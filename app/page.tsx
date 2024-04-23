export default function Home() {
  return (
    <>
      <main>
        <aside className="m-4">
          <h2 className="text-3xl ">Hi, </h2>
        </aside>
        <div className="flex justify-center items-center flex-col">
          <img
            src="./img/freelancer.svg"
            width={300}
            height={250}
            alt="Programmer sitting at his laptop"
          />
          <div className="mt-4 text-2xl">
            <h4>Software Engineer</h4>
          </div>
        </div>
        <div className="p-4">
          I am a freelance software engineer with experience coding in React,
          TypeScript/Javascript, Python and more recently Golang.
          <pre className="mt-2 p-2">I am a recovering Java developer</pre>
        </div>
        <div>
          See my Journey<> </>
          <button>Here...</button>
        </div>
      </main>
    </>
  );
}
