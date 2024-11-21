import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'
import Img4 from '../assets/img4.png'

const ServicesDatas = () => {
    const serviceData = [
        {
            img:Img2,
            title:"Home insurance",
            ptext:"Home insurance is a type of insurance policy that provides cover for your home.",
            Btxt:"Learn more",        
        },
        {
            img:Img3,
            title:"Life Insurance",
            ctext:"Helping you bridge gaps in your health care coverage during times of transition",
            Btxt:"Learn more",        
        },
        {
            img:Img4,
            title:"Car Insurance",
            dtext:"Car insurance is a type of insurance policy that provides cover for your car.",
            Btxt:"Learn more",        
        },
    ]
  return {
    serviceData
  }
}

export default ServicesDatas