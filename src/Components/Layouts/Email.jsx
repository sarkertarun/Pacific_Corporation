import React, { useState } from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Paragraph from '../Paragraph';
import Heading from '../Heading';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Validate email using regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValid(validateEmail(emailValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Submit the email, handle the form submission here
      alert(`Submitted email: ${email}`);
    }
  };

  return (
      <section className='bg-[#313131]'>
        <Container>
          {/* Heading Section */}
          <div className="text-center pb-3 mt-[125px]">
            <Heading 
              as='h2' 
              text='Ready To Get Insured? Submit Your Request And Hear Back As Soon As Tomorrow.' 
              className='text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-white pt-[136px] px-[20px] sm:px-[80px] md:px-[150px] lg:px-[180px]' 
            />
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col mt-10">
            <Flex className='gap-x-2 justify-center ml-4'>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 pr-20 py-3 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-start"
                  placeholder="Your email"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className={`px-[30px] mt-1 font-bold text-white rounded ${isValid ? 'bg-btnbgColor hover:bg-btnbgColor' : 'bg-btnbgColor cursor-not-allowed'}`}
              >
                Get Started
              </button>
            </Flex>
          </form>

          {/* Footer Paragraph */}
          <Paragraph 
            text='Get a response tomorrow if you submit by 9pm today. If we receive it after 9pm, we will get a response the following day.' 
            className='text-white pt-[30px] text-center px-[20px] sm:px-[100px] md:px-[150px] lg:px-[350px] pb-[120px]' 
          />
        </Container>
      </section>
  );
};

export default EmailForm;
