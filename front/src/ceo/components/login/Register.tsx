import { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  display: relative;
  width: 600px;
  margin: 0 auto;
  border: none;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  background-color: #d8f1ff;
  box-shadow: 2px 2px 6px 0px gray;
`;

const DropdownWrapper = styled(Dropdown)`
  width: 300px;
  margin: 0 auto;
`;
const FormGroupWrapper = styled(Form.Group)`
  position: relative;
  display: grid;
  grid-template-columns: 200px 100px;
  width: 300px;
  margin: 0 auto;
`;

const FormControlWrapper = styled(Form.Control)`
  width: 300px;
  margin: 0 auto;
  border: 1.5px solid black;
  background-color: rgba(0, 0, 0, 0);
`;

const ButtonWrapper = styled(Button)`
  z-index: 1;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const CategoryDiv = styled.div`
  display: inline;
  background-color: #0000ff67;
  width: fit-content;
  margin: 0 auto;
  padding: 5px 10px;
  color: white;
  border-radius: 10px;
`;

function Register({
  isPopupOpen,
  setIsPopupOpen,
  normalAddress,
  setNormalAddress,
  specificAddress,
  setSpecificAddress,
  zipcode,
}: any) {
  type Password = { password: number; passwordCheck: number; passwordSame: boolean };
  type RestaurantType = { categoryId: number; categoryName: string };
  type Restautant = { restaurantName: string; branch: string };

  const [email, setEmail] = useState<string>("");
  const [passwordObj, setPasswordObj] = useState<Password>({
    password: 0,
    passwordCheck: 0,
    passwordSame: true,
  });
  const [restaurantObj, setRestaurantObj] = useState<Restautant>({
    restaurantName: "",
    branch: "",
  });

  const [categories, setCategories] = useState<RestaurantType[]>([]);

  const restaurantTypeList = [
    { categoryId: 1, categoryName: "족발, 보쌈" },
    { categoryId: 2, categoryName: "찜, 탕, 찌개" },
    { categoryId: 3, categoryName: "돈까스, 회, 일식" },
    { categoryId: 4, categoryName: "피자" },
    { categoryId: 5, categoryName: "고기, 구이" },
    { categoryId: 6, categoryName: "양식" },
    { categoryId: 7, categoryName: "치킨" },
    { categoryId: 8, categoryName: "중식" },
    { categoryId: 9, categoryName: "아시안" },
    { categoryId: 10, categoryName: "백반, 죽, 국수" },
    { categoryId: 11, categoryName: "도시락" },
    { categoryId: 12, categoryName: "분식" },
    { categoryId: 13, categoryName: "페스트푸드" },
  ];

  async function data() {
    const response = await axios.post(
      "http://211.188.65.107:8080/api/auth/ceo/restaurant/register",
      {
        email: email,
        password: passwordObj.password,
        passwordCheck: passwordObj.passwordCheck,
        restaurant: restaurantObj.restaurantName,
        branch: restaurantObj.branch,
        categories: categories,
        zipcode: zipcode,
        normalAddress: normalAddress,
        specificAddress: specificAddress,
      }
    );
    const result = response;
    console.log(result);
  }

  async function EmailCheck() {
    const response = await axios.get(
      `http://211.188.65.107:8080/api/auth/ceo/email/check?email=${email}`
    );
    const result = response;
    console.log(result);
  }

  return (
    <Div>
      <Form>
        <h1>회원가입</h1>
        회원가입을 위해 정보를 입력해주세요
        <FormGroupWrapper className="mb-3" controlId="registerEmail">
          <FormControlWrapper
            type="email"
            placeholder="email"
            onChange={(e: any) => (setEmail(e.target.value), console.log(e.target.value))}
          />
          <Button variant="outline-success" onClick={EmailCheck}>
            중복확인
          </Button>
          <div>이미 존재하는 이메일입니다</div>
        </FormGroupWrapper>
        <div>비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</div>
        <Form.Group className="mb-3" controlId="registerPassword">
          <FormControlWrapper
            type="password"
            placeholder="비밀번호"
            onChange={(e: any) => (
              setPasswordObj({
                ...passwordObj,
                password: e.target.value,
                passwordSame:
                  passwordObj.password === passwordObj.passwordCheck ? false : true,
              }),
              console.log(e.target.value)
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerPasswordCheck">
          <FormControlWrapper
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e: any) => (
              setPasswordObj({
                ...passwordObj,
                passwordCheck: e.target.value,
                passwordSame:
                  passwordObj.password === passwordObj.passwordCheck ? false : true,
              }),
              console.log(e.target.value)
            )}
          />
          {passwordObj.passwordSame ? <></> : <div>비밀번호가 다릅니다.</div>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="restaurantName">
          <FormControlWrapper
            placeholder="음식점 이름"
            onChange={(e: any) => (
              setRestaurantObj({ ...restaurantObj, restaurantName: e.target.value }),
              console.log(e.target.value)
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="branch">
          <FormControlWrapper
            placeholder="음식점 지점"
            onChange={(e: any) => (
              setRestaurantObj({ ...restaurantObj, branch: e.target.value }),
              console.log(e.target.value)
            )}
          />
        </Form.Group>
        <DropdownWrapper className="mb-3">
          <Dropdown.Toggle id="dropdown-basic">음식점 업태 선택</Dropdown.Toggle>
          <Dropdown.Menu>
            {restaurantTypeList.map((value, index) => (
              <Dropdown.Item
                key={index}
                onClick={() =>
                  categories.some((type) => type.categoryName == value.categoryName)
                    ? // 드롭다운에서 선택한 값과 이미 추가되어있는 값과 비교하여 이미 존재하면 추가안되게 구현
                      window.alert("해당항목이 존재합니다.")
                    : setCategories([...categories, value])
                }
              >
                {value.categoryName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </DropdownWrapper>
        {categories.map((value) => (
          <CategoryDiv>{value.categoryName}</CategoryDiv>
        ))}
        <FormGroupWrapper className="mb-3" controlId="zipcode">
          <FormControlWrapper placeholder="우편번호" value={zipcode} disabled />
          <Button variant="outline-success" onClick={() => setIsPopupOpen(!isPopupOpen)}>
            검색
          </Button>
        </FormGroupWrapper>
        <Form.Group className="mb-3" controlId="normalAddress">
          <FormControlWrapper
            placeholder="주소"
            value={normalAddress}
            disabled
            onChange={(e: any) => (
              setNormalAddress(e.target.value), console.log(e.target.value)
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="specificAddress">
          <FormControlWrapper
            placeholder="상세주소"
            value={specificAddress}
            onChange={(e: any) => (
              setSpecificAddress(e.target.value), console.log(e.target.value)
            )}
          />
        </Form.Group>
        <ButtonWrapper variant="outline-primary" onClick={data}>
          회원가입
        </ButtonWrapper>
      </Form>
    </Div>
  );
}
export default Register;
