import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../enum/routes";

const Div = styled.div`
  height: 50px;
  width: 100%;
  padding: 10px 50px;
  background-color: #d8f1ff;
  a {
    color: black;
    text-decoration: none;
  }
`;

const NavDiv = styled.div`
  width: 1320px;
  margin: 0 auto;
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
  grid-template-columns: 15fr 2fr 2fr;
  height: 30px;
  width: 100%;
  text-align: end;
  font-size: 18px;
  line-height: 30px;
`;

function Nav() {
  return (
    <Div>
      <NavDiv>
        <NavGrid>
          <Link to={ROUTES.USER.MAIN}>
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
              <div>
                <Link to={ROUTES.USER.LOGIN}>로그인</Link>
              </div>
            )}
          </NavList>
        </NavGrid>
      </NavDiv>
    </Div>
  );
}
export default Nav;
