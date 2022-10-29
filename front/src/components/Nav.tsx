import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 70% 30%;
  height: 50px;
  width: 100%;
  padding: 10px 50px;
  border: none;
  background-color: #d8f1ff;
`;

const Logo = styled.img`
  height: 30px;
`;

const NavList = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 2fr 2fr;
  height: 30px;
  width: 100%;
  text-align: end;
  font-size: 18px;
  line-height: 30px;
`;

function Nav() {
  return (
    <Div>
      <Link to="/">
        <Logo src="../data/img/logo.png" alt="logo" />
      </Link>
      <NavList>
        <div>주소</div>
        <div>💬</div>
        <div>닉네임</div>
        <div>로그아웃</div>
      </NavList>
    </Div>
  );
}
export default Nav;
