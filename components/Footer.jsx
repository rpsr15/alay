import React from "react";
import { useState } from "react";
import { validateEmail } from "/lib/emailValidation.js";
import { Container, Input, Spacer, Text } from "@nextui-org/react";
import Button from "./Button";
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const Footer = () => {
  const defaultError = {
    content: "Please enter a valid email address",
    pointing: "above",
  };
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
    const isEmailValid = validateEmail(e.target.value);
    if (isEmailValid) {
      setError(false);
      setErrorMessage(false);
    } else {
      setError(true);
    }
  };
  const handleSubmit = () => {
    console.log(email);
    if (email === "" || error) {
      setErrorMessage(defaultError);
    }
  };
  return (
    <SectionWrapper>
      <footer className="pt-32 mx-8">
        <div className='box md:py-[60px] w-full'>
          <div className='wrapper   mx-auto text-center'>
            <div className='text-center text-6xl'>
              <Text size={"1rem"}>Subscribe and stay on top of our latest news and promotions</Text>
            </div>
            <Spacer y={1} />
            <div className=' mx-auto md:max-w-[88%]'>
              <form className='footer-email-form  mb-8 sm:flex sm:justify-center' onSubmit={handleSubmit}>
                <div className='w-full md:w-[400px]'>
                  <Input
                    className='nextinput'
                    size='lg'
                    width='100%'
                    labelPlaceholder='Enter your email address'
                    id='form-input-control-error-email'
                    // control={Input}
                    placeholder='Enter your email address'
                    error={errorMessage}
                    onChange={onChange}
                  />
                </div>

                <div className='mt-4 sm:mt-0 sm:ml-4'>
                  <Button color='text-black' bgColor='bg-secondary' type='submit' size={"lg"}>
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
            <div className=' mb-6 text-xl flex flex-row justify-center'>
              <a>
                <FaFacebookF />
              </a>
              <Spacer x={1} />
              <a>
                <FaInstagram />
              </a>
              <Spacer x={1} />
              <a>
                <FaSnapchatGhost />
              </a>
            </div>
            
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default Footer;
