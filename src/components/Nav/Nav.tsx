import Link from "next/link";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <NavList>
        <NavListItem>
          <Link href="/leaderboard">
            <a>Leaderboard</a>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </NavListItem>
      </NavList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 56px;
  background: #464646;
  width: 100%;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 100%;
  max-width: 1200px;
`;

const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  margin-left: 36px;

  a,
  a:visited {
    font-weight: 700;
    color: ${({ theme }) => theme.textColor};
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export default Nav;
