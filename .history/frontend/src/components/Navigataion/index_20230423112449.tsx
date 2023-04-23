import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  return (
    <Nav>
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
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: black;
  color: white;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;