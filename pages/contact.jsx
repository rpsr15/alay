import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
//import backgoundImage from '/public/images/contact_background.webp'
// import {writeContactUsMessage} from "../firebase";

const AddressDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //laptop
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const AddressDetails = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
const ContactFormWrapper = styled.div`
  @media (min-width: 1024px) {
    width: 288px;
  }
`;
// const StyledForm = styled(Form)`
//   & input {
//     background: transparent !important;
//   }

//   margin-top: 2rem;
//   @media (min-width: 1024px) {
//     margin-top: 0;
//   }

//   & textarea {
//     border-radius: 0 !important;
//     border-color: black !important;
//     background: transparent !important;
//   }

//   & .ui.button {
//     background-color: transparent !important;
//     font-family: "Playfair Display", serif;
//     float: right;
//     font-size: 1.15rem;
//     font-weight: normal;
//   }
// `;

const PartitionLine = () => {
  return (
    <div
      style={{ borderTop: "2px solid black", width: "29px", height: "5px" }}
    ></div>
  );
};

export default function Contact() {
  const [name, setName] = useState("");
  const [remail, setremail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const handleChange = (e, { name, value }) => {
    if (name === "name") {
      setName(value);
    } else if (name === "remail") {
      setremail(value);
    } else if (name === "phone") {
      setPhoneNo(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };
  const handleSumbit = () => {
    console.log(name, remail, message, phoneNo);
    // TODO: Implement gathering query
    // writeContactUsMessage(name, remail, phoneNo, message).then((success) => {
    //     setPhoneNo('')
    //     setName('')
    //     setremail('')
    //     setMessage('')
    // }).catch((error) => {
    //     console.log(error)
    // })
  };
  return (
    <div className="contact-wrapper overflow-hidden h-full">
      <div className="mx-8 mt-8 mb-5">
        <h2 className="text-4xl font-medium">CONTACT</h2>
      </div>

      <AddressDetailsWrapper className="mx-8">
        <AddressDetails>
          <div className="mb-2">
            <p> I-331 Rangoli Gardens</p>
            <p> Vaishali Nagar, Jaipur</p>
          </div>
          <PartitionLine />
          <div className="mb-2 mt-2">
            <p>Tel: +9181461219630</p>
            <p>remail: info@mysite.com</p>
          </div>
          <div className="mt-4 mb-4">icons</div>
        </AddressDetails>
        <ContactFormWrapper>
          <form onSubmit={handleSumbit}>
            <input
              required={true}
              value={name}
              name={"name"}
              onChange={handleChange}
              placeholder={"Name"}
            />
            <input
              required={true}
              type={"remail"}
              onChange={handleChange}
              name={"remail"}
              value={remail}
              placeholder={"remail"}
            />
            <input
              required={true}
              type={"tel"}
              onChange={handleChange}
              name={"phone"}
              value={phoneNo}
              pattern="[0-9]{10}"
              placeholder={"Phone"}
            />
            <input
              required={true}
              name={"message"}
              value={message}
              onChange={handleChange}
              placeholder={"Type your message here..."}
            />
            <button type={"submit"} className="bg-tranparent">
              Submit
            </button>
          </form>
        </ContactFormWrapper>
      </AddressDetailsWrapper>
    </div>
  );
}
