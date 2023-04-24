import { ReactChild } from "react";
import styled from "styled-components";
import Navigation from "../Navigataion";

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <Wrapper>
      <Sidebar>
        <Navigation />
      </Sidebar>
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: #212121;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  /* z-index: 1; */
`;

const Main = styled.div`
  background-color: #ffffff;
  width: calc(100% - 400px);
  margin: 0 auto;
  margin-right: 64px;
  margin-top: 24px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;
