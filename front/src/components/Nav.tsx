import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  height: 50px;
  width: 100%;
  padding: 10px 50px;
  background-color: #d8f1ff;
`;

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Logo = styled.img`
  height: 30px;
`;

const NavList = styled.div`
  display: grid;
  grid-template-columns: 15fr 1fr 1fr;
  height: 30px;
  width: 100%;
  text-align: end;
  font-size: 18px;
  line-height: 30px;
`;

function Nav() {
  return (
    <Div>
      <NavGrid>
        <Link to="/">
          <Logo src="../data/img/logo.png" alt="logo" />
        </Link>
        <NavList>
          {sessionStorage.getItem("jwt") ? (
            <div>{sessionStorage.getItem("normalAddress")}</div>
          ) : (
            <div></div>
          )}
          <div>💬</div>
          {sessionStorage.getItem("jwt") ? (
            <div>{sessionStorage.getItem("nickname")}</div>
          ) : (
            <div>로그인</div>
          )}
        </NavList>
      </NavGrid>
    </Div>
  );
}
export default Nav;
