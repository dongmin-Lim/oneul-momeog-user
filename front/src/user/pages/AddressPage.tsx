import { useState } from "react";
import Address from "../../user/components/login/Address";
import DaumPost from "../../components/DaumPost";

function AddressPage() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [normalAddress, setNormalAddress] = useState<string>();
  const [specificAddress, setSpecificAddress] = useState<string>();
  const [zipcode, setZipcode] = useState<number>();
  return (
    <>
      <Address
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        normalAddress={normalAddress}
        setNormalAddress={setNormalAddress}
        specificAddress={specificAddress}
        setSpecificAddress={setSpecificAddress}
        zipcode={zipcode}
      />
      {isPopupOpen ? (
        <DaumPost
          isPopupOpen={isPopupOpen}
          setNormalAddress={setNormalAddress}
          setSpecificAddress={setSpecificAddress}
          setZipcode={setZipcode}
        />
      ) : (
        <></>
      )}
    </>
  );
}
export default AddressPage;
