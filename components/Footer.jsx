import React from "react";
import { Form, Input, Icon } from "semantic-ui-react";
import { useState } from "react";
import { validateEmail } from "/lib/emailValidation.js";
import Button from "./Button";

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
    <footer className='text-center'>
      <div className='box md:py-[60px] w-full'>
        <div className='wrapper max-w-[1150px] mx-auto'>
          <div className='mb-2'>
            <p className='px-6'>
              <span>Subscribe and stay on top of our latest news and promotions</span>
            </p>
          </div>
          <div className=' mx-auto max-w-[88%]'>
            <Form className='footer-email-form  mb-8 md:flex md:justify-center' onSubmit={handleSubmit}>
              <Form.Field
                className='md:w-96 md:mr-4'
                id='form-input-control-error-email'
                control={Input}
                placeholder='Enter your email address'
                error={errorMessage}
                onChange={onChange}
              />
              <div className='md:ml-2'></div>
             
              <Button label={'Subscribe'} bgColor="bg-secondary"/>
            </Form>
          </div>
          <div className='mb-6'>
            <a>
              <Icon name='facebook f' size='large' />
            </a>
            <a>
              <Icon name='instagram' size='large' />
            </a>
            <a>
              <Icon name='pinterest p' size='large' />
            </a>
          </div>
          <div className='mb-8'>
            <p>
              <span>© 2023 by Poster Gal. Proudly created in India with love</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
