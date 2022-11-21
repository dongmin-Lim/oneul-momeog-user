import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Rate } from "antd";

function ReviewModal(props: any) {
  const [rating, setRating] = useState<number>();
  const [content, setContent] = useState<string>("");

  const insertImg = (e: any) => {
    console.log(e.target.files[0]);
  };

  async function onSubmit() {
    try {
      const response = await axios.post(`/api/reviews/add`, {
        restaurantId: props.value.restaurantId,
        orderId: 1,
        rating: rating,
        content: content,
        reviewImage: "img",
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">채팅방 입장</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input onChange={(e) => setContent(e.target.value)}></input>
        <form encType="multipart/form-data">
          <label htmlFor="file">이미지업로드</label>
          <input
            type="file"
            id="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={(e) => insertImg(e)}
          />
        </form>
        <Rate />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>
          리뷰 작성
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewModal;
