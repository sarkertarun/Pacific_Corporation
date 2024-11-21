import Flex from "../Flex"
import Image from "../Image";
import Paragraph from "../Paragraph"
import { FaRegStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";


const TestiMoCard = ({title,img,ptext,stext}) => {
  return (
    <section>
    <div className="w-[370px] h-[342px] mx-2 rounded-2xl mt-10 border shadow-md hover:shadow-xl bg-white cursor-pointer">
       <Flex className='gap-x-2 mt-[50px] ml-[58px]'>
        <FaRegStar className="text-[#F3A100] text-[18px]"/>
        <FaRegStar className="text-[#F3A100] text-[18px]"/>
        <FaRegStar className="text-[#F3A100] text-[18px]"/>
        <FaRegStar className="text-[#F3A100] text-[18px]"/>
        <FaRegStar className="text-[#F3A100] text-[18px]"/>
       </Flex>

      <Paragraph text={title} className='font-bold text-[16px] text-paraColor mt-9 ml-[58px] pr-20'/>
       <Flex>
        <div className="">
        <Image src={img} className="w-[40px] rounded-full ml-[58px] mt-[40px]"/>
        </div>
        <div className="">
            <Paragraph text={ptext} className='font-semibold text-[20px] mt-[40px] ml-[16px]'/>
            <Flex>
            <TiTick className='ml-[16px] mt-[1px] bg-[#c7f0df] text-[#36B37E] rounded-full text-[20px]'/>
            <span className='italic pb-10 ml-1'>{stext}</span>
            </Flex>
        </div>
       </Flex>

      </div>

    </section>
  )
}

export default TestiMoCard