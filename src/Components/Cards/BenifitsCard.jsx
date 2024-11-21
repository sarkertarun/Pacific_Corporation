import Image from "../Image"
import Paragraph from "../Paragraph"

const BenifitsCard = ({img,title,ptext,ctext,dtext,etext,ftext}) => {
  return (

    <section>
  
    <div className="w-[370px] mt-10 border shadow-sm hover:shadow-xl transition-transform duration-500 bg-white cursor-pointer">
      <Image src={img} className='ml-36 mt-10'/>
      <Paragraph text={title} className='font-bold text-[22px] text-center mt-9'/>
      <Paragraph text={ptext} className='text-center text-paraColor mt-[35px] ml-[50px] pr-[40px] mb-[40px]'/>
      <Paragraph text={ctext} className='text-center text-paraColor pr-[40px] pl-[50px] mt-[34px] mb-[35px]'/>
      <Paragraph text={dtext} className='text-center text-paraColor pr-[40px] pl-[50px] mt-5 mb-[30px]'/>
      <Paragraph text={etext} className='text-center text-paraColor pr-[40px] pl-[50px] mt-5 mb-[35px]'/>
      <Paragraph text={ftext} className='text-center text-paraColor pr-[75px] pl-[50px] mt-5 mb-[35px]'/>

      </div>

    </section>



  )
}

export default BenifitsCard