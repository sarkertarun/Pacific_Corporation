import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Img1 from '../../assets/img1.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const Banner = () => {
  return (
    <div className='relative'>
      {/* Image Positioned Absolutely to the Right, hidden on sm and md */}
      <div className="hidden lg:block w-[45%] xl:w-[40%] absolute right-0 mt-[20px]">
        <Image src={Img1} className='ml-10' />
      </div>
      
      <Container>
        <Flex className='justify-between'>
          {/* Text Section */}
          <div className="w-full sm:w-[90%] md:w-[680px] lg:w-[650px] xl:w-[700px] mt-[80px] sm:mt-[30px] md:mt-[60px]">
            <Heading 
              as='h1' 
              text='We Are Ready To Make Your New Life Happier.' 
              className='font-openSans font-bold text-[32px] ml-2 sm:text-[40px] md:text-[55px] lg:text-[65px] xl:text-[70px] leading-[40px] sm:leading-[50px] md:leading-[70px] lg:leading-[80px] xl:leading-[90px] pr-[20px] sm:pr-[50px] md:pr-[70px]'
            />
            <div className="">
              <Paragraph 
                text='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.' 
                className="font-openSans ml-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-paraColor leading-[26px] sm:leading-[30px] md:leading-[34px] lg:leading-[36px] mt-[20px] sm:mt-[30px] md:mt-[54px] pr-[20px] sm:pr-[40px] md:pr-[80px] lg:pr-[120px]" 
              />
            </div>
            <div className="mt-6 sm:mt-8 md:mt-12">
              <a href='#' className='font-openSans ml-2 text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white border rounded-2xl px-5 sm:px-6 md:px-7 py-2 bg-btnbgColor'>
                Get a Consultation
              </a>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Banner;
