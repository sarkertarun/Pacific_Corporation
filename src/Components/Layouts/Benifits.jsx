import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import BenifitDatas from '../../Datas/BenifitDatas';
import BenifitsCard from '../Cards/BenifitsCard';
import Flex from '../Flex';

const Benifits = () => {
  const benfData = BenifitDatas();

  return (
    <section className='mt-[755px] mb-[50px]'>
      <Container>
        {/* Section Title */}
        <div className="sm:ml-[50px] md:ml-[100px] lg:ml-[490px] pb-3">
          <div className="sm:w-[100px] md:w-[150px] lg:w-[200px] py-3 border-b-2 border-dashed border-black">
            <Paragraph 
              text='Your Benefits' 
              className='font-openSans sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold text-btnbgColor text-center' 
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <Heading 
            as='h2' 
            text='We’re Your Right Insurance Advocate' 
            className='font-openSans font-bold sm:text-[24px] md:text-[32px] lg:text-[40px]' 
          />
          <Paragraph 
            text='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.' 
            className='sm:pl-[20px] sm:pr-[20px] md:pl-[150px] md:pr-[150px] lg:pl-[330px] lg:pr-[340px] text-paraColor' 
          />
        </div>

        {/* Benefits Cards - First Row */}
        <Flex className='sm:flex-col md:flex-col lg:flex-row lg:ml-20 gap-x-6 justify-center items-center pt-12'>
          {benfData?.benfData.slice(0, 3).map((el, index) => (
            <div className='sm:mb-6 md:mb-6 lg:mb-0' key={index}>
              <BenifitsCard
                img={el.img}
                title={el.title}
                ptext={el.ptext}
                ctext={el.ctext}
                dtext={el.dtext}
              />
            </div>
          ))}
        </Flex>

        {/* Benefits Cards - Second Row */}
        <Flex className='sm:flex-col md:flex-col lg:flex-row lg:ml-20 gap-x-6 justify-center items-center mt-10'>
          {benfData?.benfData.slice(3, 6).map((el, index) => (
            <div className='sm:mb-6 md:mb-6 lg:mb-0' key={index}>
              <BenifitsCard
                img={el.img}
                title={el.title}
                etext={el.etext}
                ftext={el.ftext}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default Benifits;
