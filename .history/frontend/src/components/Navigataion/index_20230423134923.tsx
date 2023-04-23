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
          <Link href="/questions">質問</Link>
        </li>
        <li>
          <Link href="/timeline"></Link>
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
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
