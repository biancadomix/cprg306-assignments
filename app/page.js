import Link from "next/link";

export default function Home() {
  const linkStyles = "underline text-[#5D7599] hover:text-[#ABB6C8]";

  return (
    <main className="h-screen bg-[#DADADA] text-[#2B2D42] flex flex-col items-center justify-center p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#5D7599]">Hello, I'm Bianca Dominique De Torres</h1>
        <p className="mt-4 text-lg text-[#ABB6C8]">
         I Fear of creating web application designs and bringing them to life using code & creating mobile designs. and I like trains
        </p>
        <button className="mt-6 px-8 py-3 bg-[#F7F0C6] text-[#2B2D42] rounded-full hover:bg-[#C2C4B6]">
          Web Dev
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#5D7599] mb-6">Application Links</h2>
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
