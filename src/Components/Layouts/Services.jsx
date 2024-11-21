import React from 'react';
import Container from '../Container';
import Paragraph from '../Paragraph';
import Heading from '../Heading';
import ServiceCard from '../Cards/ServiceCard';
import ServicesDatas from '../../Datas/ServicesDatas';

const Services = () => {
  const serviceData = ServicesDatas();

  return (
    <section className='mt-[50px] lg:mt-[115px] mb-[50px]'>
      <Container>
        {/* Our Services Section */}
        <div className="flex justify-center pb-3">
          <div className="w-[150px] sm:w-[200px] py-3 border-b-2 border-dashed border-black">
            <Paragraph
              text='Our Services'
              className='font-openSans text-[14px] sm:text-[16px] font-bold text-btnbgColor text-center'
            />
          </div>
        </div>

        {/* Heading and Description */}
        <div className="text-center mt-4">
          <Heading
            as='h2'
            text='Insurance made simple for you'
            className='font-openSans font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]'
          />
          <Paragraph
            text='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.'
            className='text-[14px] sm:text-[16px] text-paraColor mt-4 px-4 sm:px-[50px] md:px-[150px] lg:px-[330px] xl:px-[340px]'
          />
        </div>

        {/* Services Cards Section */}
        <div className='flex flex-wrap gap-y-8 sm:gap-y-10 gap-x-6 items-center justify-center pt-12 lg:flex-nowrap lg:gap-x-40 lg:justify-start'>
          {serviceData?.serviceData.map((el, index) => (
            <div
              key={index}
              className='w-full sm:w-[90%] md:w-[80%] lg:w-[22%] mx-auto lg:mx-0'
            >
              <ServiceCard
                img={el.img}
                title={el.title}
                ptext={el.ptext}
                ctext={el.ctext}
                dtext={el.dtext}
                Btxt={el.Btxt}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
