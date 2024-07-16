import Link from "next/link";

export default function Home() {
  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main className="h-screen bg-[#2b2d42] text-white flex flex-col items-center justify-center p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">Hello, I'm a Front end Developer</h1>
        <p className="mt-4 text-lg">
          Fear of creating web application designs and bringing them to life using code & creating mobile designs.
        </p>
        <button className="mt-6 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-400">
          Create Journey
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Application Links</h2>
        <ul className="space-y-4">
          <li>
            <Link className={linkStyles} href="./page2/">
              Page 2
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="app/week-2/page.js">
              Week 2
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="app/week-3">
              Week 3
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="app/week-4">
              Week 4
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="app/week-5/arrays/page.js">
              Week 5
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="app/week-6">
              Week 6
            </Link>
          </li>
          <li>
            <Link className={linkStyles} href="./page2/">
              Week 7
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
