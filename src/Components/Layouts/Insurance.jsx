import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Flex from '../Flex';
import InsuranceCard from '../Cards/InsuranceCard';
import InsuranceDatas from '../../Datas/InsuranceDatas';

const Insurance = () => {
  const insuData = InsuranceDatas();
  
  return (
    <section>
      <Container>
        {/* Section Title */}
        <div className="sm:ml-[20px] md:ml-[100px] lg:ml-[485px] pb-3">
          <div className="sm:w-[150px] md:w-[200px] lg:w-[200px] py-3 border-b-2 border-dashed border-black">
            <Paragraph text='Our Tips For You' className='font-openSans text-[12px] sm:text-[14px] md:text-[16px] font-bold text-btnbgColor text-center' />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <Heading as='h2' text='Reinventing Your Protection' className='font-openSans font-bold sm:text-[28px] md:text-[36px] lg:text-[40px]' />
          <Paragraph 
            text='We share common trends, strategies, ideas, opinions, short & long stories from the team behind the company'
            className='sm:pl-[20px] sm:pr-[20px] md:pl-[150px] md:pr-[150px] lg:pl-[370px] lg:pr-[360px] text-paraColor' 
          />
        </div>

        {/* Insurance Cards */}
        <Flex className='sm:flex-col md:flex-col lg:flex-row lg:gap-x-6 justify-center items-center pt-12'>
          {insuData?.insuData.map((el, index) => (
            <div className="sm:mb-6 md:mb-6 lg:mb-0" key={index}>
              <InsuranceCard
                img={el.img}
                img2={el.img2}
                title={el.title}
                ptext={el.ptext}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Insurance;
