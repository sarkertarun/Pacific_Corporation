import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Img5 from '../../assets/img5.jpg'
import Paragraph from '../Paragraph'
import Qleft from '../../assets/qleft.png'
import Flex from '../Flex'
import { TiTick } from "react-icons/ti";

const Feedback = () => {
  return (
    <section className='mt-[120px]'>
      <Container>
        <div className="relative">
          {/* Hide image and feedback card on sm and md, show on lg and xl */}
          <Image 
            src={Img5} 
            className='w-full ml-9 absolute top-0 left-0 object-cover hidden sm:block md:block lg:block xl:block'
          />
          
          <div className="absolute w-[380px] border-hidden rounded-2xl mt-[0px] ml-[0px] hidden sm:block md:block lg:block xl:block bg-white shadow-md hover:shadow-xl cursor-pointer p-6 sm:p-0 md:mt-[75px] md:ml-[150px] lg:mt-10 lg:ml-16">
            <Image src={Qleft} className='pt-10 ml-[50px]' />
            <Paragraph 
              text='This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and I wouldn’t hesitate to recommend them.' 
              className='font-semibold text-paraColor ml-[50px] mt-[25px] pr-[130px] leading-[35px] sm:text-sm md:text-base lg:text-lg xl:text-xl'
            />
            <span className='font-openSans font-bold text-[20px] ml-[50px] mt-[35px] block'>Daniel Anderson</span>
            <Flex className="items-center">
              <TiTick className='ml-[50px] mt-[1px] bg-[#c7f0df] text-[#36B37E] rounded-full text-[25px]' />
              <span className='italic pb-10 ml-1'>Verified customer</span>
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Feedback;
