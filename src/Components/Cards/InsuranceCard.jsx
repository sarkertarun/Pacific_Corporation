import Image from "../Image"
import Paragraph from "../Paragraph"

const InsuranceCard = ({img,img2,title,ptext}) => {
  return (
    <section>
    <div className="w-[370px] h-[460px] rounded-2xl mt-24 border-hidden shadow-md hover:shadow-xl transition-transform duration-500 bg-white  cursor-pointer">
      <Image src={img} className='w-full'/>
      <Image src={img2} className=""/>

      <Paragraph text={title} className='font-bold text-[22px] text-center mt-9'/>
      <Paragraph text={ptext} className='text-center text-paraColor mt-[35px] ml-[50px] pr-[40px] mb-[50px]'/>

      </div>

    </section>
  )
}

export default InsuranceCard