import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/bookslist">Bookslist</Link>
        </li>
        <li>
          <Link href="/questions">Contact</Link>
        </li>
        <li>
          <Link href="/timeline">Timeline</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation