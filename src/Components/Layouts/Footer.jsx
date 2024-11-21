import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo1 from '../../assets/logo1.png'
import Paragraph from '../Paragraph'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Flex from '../Flex'
import List from '../List'

const Footer = () => {
  return (
    <section className='mt-[125px] mb-[120px]'>
        <Container>
            <Flex className='gap-x-[160px] flex-wrap sm:flex-nowrap'>
                {/* Logo and Social Links Section */}
                <div className="w-full sm:w-[265px] mb-10 sm:mb-0">
                    <Image src={Logo1}/>
                    <Paragraph text='Build a modern and creative website with crealand' className="text-[16px] text-paraColor pt-[28px] pr-10"/>
                    <Flex className='mt-[35px] gap-x-2'>
                        <button type='#' className="border p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                            <FaGoogle className='text-[20px] text-paraColor '/>
                        </button>
                        <button type='#' className="border p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                            <FaTwitter className='text-[20px] text-paraColor'/>
                        </button>
                        <button type='#' className="border p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                            <FaInstagram className='text-[20px] text-paraColor'/>
                        </button>
                        <button type='#' className="border p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                            <FaLinkedin className='text-[20px] text-paraColor'/>
                        </button>
                    </Flex>
                </div>

                {/* Products, Services, Company, More Sections */}
                <div className="w-full sm:w-[130px] mb-10 sm:mb-0">
                    <Paragraph text='Products' className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                        <List href='#' text='Landingpage' className='pb-5'/>
                        <List href='#' text='Features' className='pb-5'/>
                        <List href='#' text='Documentation' className='pb-5'/>
                        <List href='#' text='Referral Program' className='pb-5 text-[16px]'/>
                        <List href='#' text='Pricing'/>
                    </ul>
                </div>

                <div className="w-full sm:w-[117px] mb-10 sm:mb-0">
                    <Paragraph text='Services' className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                        <List href='#' text='Documentation' className='pb-5'/>
                        <List href='#' text='Design' className='pb-5'/>
                        <List href='#' text='Themes' className='pb-5'/>
                        <List href='#' text='Illustrations' className='pb-5'/>
                        <List href='#' text='UI Kit' className='pb-5'/>
                    </ul>
                </div>

                <div className="w-full sm:w-[101px] mb-10 sm:mb-0">
                    <Paragraph text='Company' className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                        <List href='#' text='About' className='pb-5'/>
                        <List href='#' text='Terms' className='pb-5'/>
                        <List href='#' text='Privacy Policy' className='pb-5'/>
                        <List href='#' text='Careers' className='pb-5'/>
                    </ul>
                </div>

                <div className="w-full sm:w-[117px] mb-10 sm:mb-0">
                    <Paragraph text='More' className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                        <List href='#' text='Documentation' className='pb-5'/>
                        <List href='#' text='License' className='pb-5'/>
                        <List href='#' text='Changelog' className='pb-5'/>
                    </ul>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Footer
