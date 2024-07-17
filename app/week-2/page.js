import Link from "next/link";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <Link href="../">
          <a>Back to Home</a>
        </Link>
      </main>
    );
}
