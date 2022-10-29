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
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 300px;
  margin: 0 auto;
`;

const GridFormGroupWrapper = styled(Form.Group)`
  display: grid;
  grid-template-columns: 190px 100px;
  grid-column-gap: 10px;
  width: 300px;
  margin: 0 auto;
`;

const FormControlWrapper = styled(Form.Control)`
  width: 300px;
  margin: 0 auto;
  border: 1.5px solid black;
  background-color: rgba(0, 0, 0, 0);
`;

const GridFormControlWrapper = styled(Form.Control)`
  width: relative;
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

const RestaurantTypeDiv = styled.div`
  width: 300px;
  height: fit-content;
  margin: 0 auto;
`;

const TypeTag = styled.div`
  display: inline-block;
  background-color: #0000ff67;
  width: fit-content;
  margin: 0 auto;
  margin: 2px;
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
  type Password = { password: string; passwordCheck: string };
  type RestaurantType = { categoryId: number; categoryName: string };
  type Restautant = { restaurantName: string; branch: string };

  const [email, setEmail] = useState<string>("");
  const [emailCheckResult, setEmailCheckResult] = useState<string>("");
  const [passwordObj, setPasswordObj] = useState<Password>({
    password: "",
    passwordCheck: "",
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
        restaurantName: restaurantObj.restaurantName,
        branch: restaurantObj.branch,
        categories: categories,
        zipcode: zipcode,
        normalAddress: normalAddress,
        specificAddress: specificAddress,
      }
    );
    const result = response;
    console.log(result.data.success);
    result.data.success ? (window.location.href = "/ceo/login") : <></>;
  }

  async function EmailCheck() {
    const response = await axios.get(
      `http://211.188.65.107:8080/api/auth/ceo/email/check?email=${email}`
    );
    const result = response;

    setEmailCheckResult(result.data.message);
  }

  return (
    <Div>
      <Form>
        <h1>회원가입</h1>
        회원가입을 위해 정보를 입력해주세요
        <FormGroupWrapper controlId="registerEmail">
          <FormControlWrapper
            onBlur={email ? EmailCheck : console.log("이메일을 입력해주세요")}
            type="email"
            placeholder="email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <div>{emailCheckResult}</div>
        </FormGroupWrapper>
        <div>비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</div>
        <Form.Group className="mb-1" controlId="registerPassword">
          <FormControlWrapper
            type="password"
            placeholder="비밀번호"
            onChange={(e: any) =>
              setPasswordObj({
                ...passwordObj,
                password: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerPasswordCheck">
          <FormControlWrapper
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e: any) =>
              setPasswordObj({
                ...passwordObj,
                passwordCheck: e.target.value,
              })
            }
          />
          {passwordObj.password === passwordObj.passwordCheck ? (
            <div></div>
          ) : (
            <div>비밀번호가 다릅니다</div>
          )}
        </Form.Group>
        <Form.Group className="mb-1" controlId="restaurantName">
          <FormControlWrapper
            placeholder="음식점 이름"
            onChange={(e: any) =>
              setRestaurantObj({ ...restaurantObj, restaurantName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="branch">
          <FormControlWrapper
            placeholder="음식점 지점"
            onChange={(e: any) =>
              setRestaurantObj({ ...restaurantObj, branch: e.target.value })
            }
          />
        </Form.Group>
        <RestaurantTypeDiv className="mb-3">
          <DropdownWrapper className="mb-1">
            <Dropdown.Toggle id="dropdown-basic">음식점 업태 선택</Dropdown.Toggle>
            <Dropdown.Menu>
              {restaurantTypeList.map((value, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() =>
                    categories.some((type) => type.categoryName === value.categoryName)
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
          {categories.map((value, index) => (
            <TypeTag
              key={index}
              onClick={() =>
                setCategories(
                  categories.filter((list) => {
                    return list.categoryId !== value.categoryId;
                  })
                )
              }
            >
              {value.categoryName}
            </TypeTag>
          ))}
        </RestaurantTypeDiv>
        <GridFormGroupWrapper className="mb-3" controlId="zipcode">
          <GridFormControlWrapper placeholder="우편번호" value={zipcode} disabled />
          <Button variant="outline-success" onClick={() => setIsPopupOpen(!isPopupOpen)}>
            검색
          </Button>
        </GridFormGroupWrapper>
        <Form.Group className="mb-3" controlId="normalAddress">
          <FormControlWrapper
            placeholder="주소"
            value={normalAddress}
            disabled
            onChange={(e: any) => setNormalAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="specificAddress">
          <FormControlWrapper
            placeholder="상세주소"
            value={specificAddress}
            onChange={(e: any) => setSpecificAddress(e.target.value)}
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
