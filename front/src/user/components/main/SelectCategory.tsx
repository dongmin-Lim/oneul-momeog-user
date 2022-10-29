import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

const DropdownWrapper = styled(Dropdown)`
  width: 200px;
  height: 40px;
  margin: 0 auto;
`;

const TypeTags = styled.div`
  display: inline-block;
`;

const TypeTag = styled.div`
  width: fit-content;
  height: 40px;
  line-height: 40px;
  padding: 0px 10px;
  border-radius: 10px;
  background-color: #0000ff67;
  color: white;
`;

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

function SelectCategory() {
  type RestaurantType = { categoryId: number; categoryName: string };

  const [categories, setCategories] = useState<RestaurantType[]>([]);
  return (
    <>
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
      <TypeTags>
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
      </TypeTags>
    </>
  );
}
export default SelectCategory;
