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
  z-index: 1;
`;

const Main = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: calc(100% - 600px);
  margin: auto;
  margin-top: 24px;
`;
