import { useState } from "react";
import Register from "../components/user/Register";
import DaumPost from "../components/user/DaumPost";

function RegisterPage() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [normalAddress, setNormalAddress] = useState<string>("");
  const [specificAddress, setSpecificAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<number>();

  return (
    <>
      <Register
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        normalAddress={normalAddress}
        setNormalAddress={setNormalAddress}
        specificAddress={specificAddress}
        setSpecificAddress={setSpecificAddress}
        zipcode={zipcode}
      />
      <DaumPost
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        setNormalAddress={setNormalAddress}
        setSpecificAddress={setSpecificAddress}
        setZipcode={setZipcode}
      />
    </>
  );
}
export default RegisterPage;
