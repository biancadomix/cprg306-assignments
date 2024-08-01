import Link from "next/link";

export default function Home() {
  const buttonStyles = "px-6 py-2 bg-[#9a3445] text-[#FFA586] rounded-full hover:bg-[#FFA586] hover:text-[#851A2B]";

  return (
    <main className="h-screen bg-[#4e6485] text-[#E8D8C4] flex flex-col items-center justify-center p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#E8D8C4]">Hello, I'm Bianca Dominique De Torres</h1>
        <p className="mt-4 text-lg text-[#C7B7A3]">
          I fear of creating web application designs and bringing them to life using code & creating mobile designs. And I like trains.
        </p>
        <button className="mt-6 px-8 py-3 bg-[#9a3445] text-[#FFA586] rounded-full hover:bg-[#FFA586] hover:text-[#851A2B]">
          Web Dev
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#E8D8C4] mb-6">Application Links</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/page2">
              <button className={buttonStyles}>Page 2</button>
            </Link>
          </li>
          <li>
            <Link href="/week-2/page">
              <button className={buttonStyles}>Week 2</button>
            </Link>
          </li>
          <li>
            <Link href="/week-3">
              <button className={buttonStyles}>Week 3</button>
            </Link>
          </li>
          <li>
            <Link href="/week-4">
              <button className={buttonStyles}>Week 4</button>
            </Link>
          </li>
          <li>
            <Link href="/week-5/arrays/page">
              <button className={buttonStyles}>Week 5</button>
            </Link>
          </li>
          <li>
            <Link href="/week-6">
              <button className={buttonStyles}>Week 6</button>
            </Link>
          </li>
          <li>
            <Link href="/page2">
              <button className={buttonStyles}>Week 7</button>
            </Link>
          </li>
          <li>
            <Link href="/page2">
              <button className={buttonStyles}>Week 8</button>
            </Link>
          </li>
          <li>
            <Link href="/page2">
              <button className={buttonStyles}>Week 10</button>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
