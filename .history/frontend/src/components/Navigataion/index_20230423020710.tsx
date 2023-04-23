import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link ="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation