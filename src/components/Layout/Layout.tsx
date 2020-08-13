import styled from "styled-components";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Container>{children}</Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Layout;
