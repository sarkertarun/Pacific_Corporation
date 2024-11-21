import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import TestiMoDatas from '../../Datas/TestiMoDatas';
import TestiMoCard from '../Cards/TestiMoCard';

const Testimonial = () => {
    const testMData = TestiMoDatas();

  return (
    <section>
        <Container>
            {/* Section Title */}
            <div className="sm:ml-[20px] md:ml-[100px] lg:ml-[485px] pb-3 mt-[120px]">
                <div className="sm:w-[150px] md:w-[200px] lg:w-[200px] py-3 border-b-2 border-dashed border-black">
                    <Paragraph text='Testimonial' className='font-openSans text-[12px] sm:text-[14px] md:text-[16px] font-bold text-btnbgColor text-center' />
                </div>
            </div>

            {/* Main Heading */}
            <div className="text-center">
                <Heading as='h2' text='What Our Customer Have To Say' className='font-openSans font-bold sm:text-[28px] md:text-[36px] lg:text-[40px]' />
                <Paragraph 
                    text='We share common trends, strategies ideas, Opinion, short & long stories from the team behind the company'
                    className='sm:pl-[20px] sm:pr-[20px] md:pl-[150px] md:pr-[150px] lg:pl-[370px] lg:pr-[360px] text-paraColor mx-auto' 
                />
            </div>

            {/* Testimonial Cards */}
            <Flex className='sm:flex-col md:flex-col lg:flex-row lg:gap-x-6 justify-center items-center pt-12'>
                {testMData?.testMData.map((el, index) => (
                    <div className="sm:mb-6 md:mb-6 lg:mb-0" key={index}>
                        <TestiMoCard
                            title={el.title}
                            img={el.img}
                            ptext={el.ptext}
                            stext={el.stext}
                        />
                    </div>
                ))}
            </Flex>
        </Container>
    </section>
  );
}

export default Testimonial;
