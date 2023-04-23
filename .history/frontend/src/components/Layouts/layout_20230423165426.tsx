import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <h1></h1>
      <p></p>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  border-right: solid 1px #000000;
  background-color: #d3c9c6;
  z-index: 1;
`;
