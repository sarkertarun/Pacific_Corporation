import Paragraph from '../Paragraph';
import Image from '../Image';
import Flex from '../Flex';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ img, title, ptext, ctext, dtext, Btxt }) => {
  return (
    <section>
      <div className="w-full sm:w-[370px] mx-auto mt-6 shadow-2xl border-hidden overflow-hidden bg-white transition-transform duration-500 hover:-translate-y-16 cursor-pointer">
        {/* Image */}
        <Image src={img} className='mx-auto mt-6 sm:mt-10' />
        
        {/* Title */}
        <Paragraph text={title} className='font-bold text-[20px] sm:text-[25px] text-center mt-9' />
        
        {/* Paragraph Texts */}
        <Paragraph text={ptext} className='text-center text-[14px] sm:text-[16px] text-paraColor px-4 sm:px-[70px] mt-5' />
        <Paragraph text={ctext} className='text-center text-[14px] sm:text-[16px] text-paraColor px-4 sm:px-[80px] mt-5' />
        <Paragraph text={dtext} className='text-center text-[14px] sm:text-[16px] text-paraColor px-4 sm:px-[80px] mt-5' />
        
        {/* Button Section */}
        <Flex className='justify-center mt-8 mb-6'>
          <span className='font-openSans font-bold text-[16px] cursor-pointer'>{Btxt}</span>
          <FaArrowRight className='text-[14px] mt-[7px] ml-1 cursor-pointer' />
        </Flex>
      </div>
    </section>
  );
}

export default ServiceCard;
