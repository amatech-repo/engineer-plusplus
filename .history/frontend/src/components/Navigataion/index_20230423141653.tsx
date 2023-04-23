import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <BurgerMenu onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <ul className={showMenu ? "show" : ""}>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/bookslist">教材一覧</Link>
        </li>
        <li>
          <Link href="/questions">質問</Link>
        </li>
        <li>
          <Link href="/timeline">タイムライン</Link>
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

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 10px;

    ul {
      flex-direction: column;
      align-items: flex-start;
      display: none;
      margin-top: 50px;
    }

    ul.show {
      display: flex;
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin-bottom: 5px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 800px) {
    display: flex;
  }

  div:nth-child(1) {
    transform: ${({ showMenu }) =>
      showMenu ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
  }

  div:nth-child(2) {
    opacity: ${({ showMenu }) => (showMenu ? "0" : "1")};
  }

  div:nth-child(3) {
    transform: ${({ showMenu }) =>
      showMenu ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
  }
`;
