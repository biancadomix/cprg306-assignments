import Link from "next/link";

export default function Home() {

  const linkStyles ="underline text-cyan-600 hover:text-cyan-300";

  return (
    <main className="h-screen">
      <hi className="text-xl">My Cool React Site</hi>
      <p>Hello World</p>
      <h2>Application Links</h2>
      <ul>
        <li><Link className={linkStyles} href="./page2/">Page 2</Link> </li>
        <li><Link className={linkStyles} href="app\week-2\page.js">Week 2</Link> </li>
        <li><Link className={linkStyles} href="app\week-3">Week 3</Link> </li>
        <li><Link className={linkStyles} href="app\week-4">Week 4</Link> </li>
        <li><Link className={linkStyles} href="app\week-5\arrays\page.js">Week 5</Link> </li>
        <li><Link className={linkStyles} href="app\week-6">Week 6</Link> </li>
        <li><Link className={linkStyles} href="./page2/">Week 7</Link> </li>
      </ul>
    </main>
  );
}
