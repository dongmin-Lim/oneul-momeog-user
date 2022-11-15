import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../enum/routes";
import { Modal, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

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
  grid-template-columns: 1fr 2fr;
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

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">채팅방 입장</Modal.Title>
      </Modal.Header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>채팅방 제목</th>
            <th>음식점</th>
            <th>현재인원 / 총원</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>남자기숙사 드루와</td>
            <td>도미노 피자</td>
            <td>3 / 4</td>

            <td>
              <Link
                to={ROUTES.USER.CHAT}
                // state={{ roomId: roomId }}
                onClick={() => props.setModalShow(false)}
              >
                입장하기
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
}

function Nav() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [lists, setLists] = useState([]);

  async function getChatList() {
    try {
      const response = await axios.get(
        // `http://211.188.65.107:8080/api/chats`
        `/mockdata/ChatRoomList.json`
      );
      setLists(response.data.data.rooms);
      console.log(response.data.data.rooms);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Div>
      <NavDiv>
        <NavGrid>
          <Link to={ROUTES.USER.MAIN}>
            <Logo src="../data/img/logo.png" alt="logo" />
          </Link>
          <NavList>
            {sessionStorage.getItem("jwt") ? (
              sessionStorage.getItem("normalAddress") === "null" ? (
                <div>주소를 입력해주세요</div>
              ) : (
                <div>{sessionStorage.getItem("normalAddress")}</div>
              )
            ) : (
              <div></div>
            )}
            <div onClick={() => (getChatList(), setModalShow(true))}>💬</div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              setModalShow={setModalShow}
            />
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
