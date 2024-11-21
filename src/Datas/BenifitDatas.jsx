import B1 from '../assets/b1.png'
import B2 from '../assets/b2.png'
import B3 from '../assets/b3.png'
import B4 from '../assets/b4.png'
import B5 from '../assets/b5.png'

const BenifitDatas = () => {
    const benfData = [
        {
            img:B1,
            title:"We’re unbiased",
            ptext:"Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.",
        },
        {
            img:B2,
            title:"We have the best prices",
            ctext:"Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find.",
        },
        {
            img:B3,
            title:"We’re your insurance advocate",
            dtext:"We will deal with the insurance companies for you, even after you’ve bought your plan.",
        },
        {
            img:B4,
            title:"We’re available 24/7",
            etext:"We have your back 24/7 between our online chat function, email and telephone support."
        },
        {
            img:B5,
            title:"We make insurance simple",
            ftext:"We’re commited to making applying for insurance as simple as can be for our customers."
        }
    ]
  return {
    benfData
  }
}

export default BenifitDatas