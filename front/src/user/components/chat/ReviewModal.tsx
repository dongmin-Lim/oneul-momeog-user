import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Rate } from "antd";

function ReviewModal(props: any) {
  const [imageList, setImageList] = useState<any>([]);
  const [rating, setRating] = useState<number>();
  const [titleInput, setTitle] = useState("");
  const [contentInput, setContentInput] = useState("");

  // 임의의 버튼을 클릭하면 아래 함수를 실행하도록 한다.
  async function onClickSubmit() {
    // 폼 데이터 생성
    const formData = new FormData();
    // 폼에 데이터를 첨부하기 위해서는 form.append('키값(필드)', 데이터) 를 이용한다.
    // 폼에 파일 첨부. 파일 첨부 같은 경우에는 반복문을 통해 append 해주어야 한다.
    imageList.forEach((image: any) => {
      formData.append("files", image);
    });
    // 폼에 텍스트 정보 첨부.
    // 텍스트 그대로 전송되기 때문에, Object를 보내기 위해서는 JSON 형식으로 보낸다.
    formData.append(
      "data",
      JSON.stringify({
        restaurantId: props.value.restaurantId,
        orderId: props.orderId,
        rating: rating,
        content: contentInput,
      })
    );
    try {
      // axios를 이용한 post 요청. 헤더를 multipart/form-data 로 한다.
      await axios.post("/api/reviews/add", formData, {
        headers: { "Content-Type": "multipart/form-data", charset: "utf-8" },
      });
      alert("게시글이 등록되었습니다");
    } catch (err) {
      console.log(err);
    }
  }

  const onChangeImageInput = (e: any) => {
    setImageList([...imageList, ...e.target.files]);
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">채팅방 입장</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          multiple
          onChange={onChangeImageInput}
        />

        <input
          placeholder={"내용을 작성해주세요."}
          defaultValue={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        />
        <Rate onChange={(e) => setRating(e)} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClickSubmit}>
          리뷰 작성
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewModal;
