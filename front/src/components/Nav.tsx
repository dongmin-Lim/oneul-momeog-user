import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../enum/routes";
import { Modal, Table, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Div = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #d8f1ff;
  a {
    color: black;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  float: left;
  height: 30px;
  padding: 0 30px;
  margin-top: 10px;
`;

const NavList = styled.div`
  float: right;
  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: 0 30px;
  text-align: center;
`;

function MyVerticallyCenteredModal(props: any) {
  const lists = props.lists;

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

            <th></th>
          </tr>
        </thead>
        <tbody>
          {lists.map((value: any, index: any) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{value.roomName}</td>
              <td>{value.restaurantName}</td>

              <td>
                <Link
                  to={`/chat/${value.roomId}`}
                  state={{ value: value }}
                  onClick={() => props.setModalShow(false)}
                >
                  입장하기
                </Link>
              </td>
            </tr>
          ))}
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
        `http://175.45.208.84:8081/api/chats`
        // `/mockdata/ChatRoomList.json`
      );
      setLists(response.data.data.rooms);
      console.log(response.data.data.rooms);
    } catch (e) {
      console.log(e);
    }
  }

  function LogOutHandler() {
    sessionStorage.removeItem("normalAddress");
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("nickname");
    window.location.replace("/");
  }
  return (
    <Div>
      <Link to={ROUTES.USER.MAIN}>
        <Logo src="../data/img/logo.png" alt="logo" />
      </Link>
      <NavList>
        {sessionStorage.getItem("jwt") ? (
          sessionStorage.getItem("normalAddress") === "null" ? (
            <div style={{ padding: "0 30px" }}>주소를 입력해주세요</div>
          ) : (
            <div style={{ padding: "0 30px" }}>
              {sessionStorage.getItem("normalAddress")}
            </div>
          )
        ) : (
          <div></div>
        )}
        <div
          style={{ padding: "0 30px" }}
          onClick={() => (getChatList(), setModalShow(true))}
        >
          💬
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
          lists={lists}
        />
        {sessionStorage.getItem("jwt") ? (
          <NavDropdown title={sessionStorage.getItem("nickname")}>
            <NavDropdown.Item href="#action/3.1">내 주문목록</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" onClick={LogOutHandler}>
              로그아웃
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <div>
            <Link to={ROUTES.USER.LOGIN}>로그인</Link>
          </div>
        )}
      </NavList>
    </Div>
  );
}
export default Nav;
