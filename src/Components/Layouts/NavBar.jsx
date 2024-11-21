import Container from '../Container';
import Image from '../Image';
import Logo1 from "../../assets/logo1.png";
import Flex from '../Flex';
import List from '../List';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className='mt-10'>
        <Container>
          <Flex className='justify-between items-center'>
            {/* Logo */}
            <div className="w-[200px] md:w-[280px] mt-2">
              <Image src={Logo1} alt="Logo" className='text-center pl-2'/>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="block pr-2 md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? "" : <HiOutlineMenu className="text-3xl"/>}
              </button>
            </div>

            {/* Sliding Menu for sm and md (Right-Side) */}
            <div className={`fixed top-0 right-0 w-[75%] sm:w-[60%] h-full border bg-white  opacity-90 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
              {/* Close Button inside sliding menu */}
              <button onClick={toggleMenu} className="absolute top-10 right-5 text-black">
                <HiOutlineX className="text-3xl" />
              </button>
              <ul className='flex flex-col gap-y-3 pl-6 pt-16'>
                <List href='#' text='Home' className='font-openSans text-[18px] text-paraColor' />
                <List href='#' text='Pages' className='font-openSans text-[18px] text-paraColor' />
                <List href='#' text='Services' className='font-openSans text-[18px] text-paraColor' />
                <List href='#' text='Portfolio' className='font-openSans text-[18px] text-paraColor' />
                <List href='#' text='Blog' className='font-openSans text-[18px] text-paraColor' />
                <List href='#' text='Contact Us' className='font-openSans text-[18px] text-paraColor' />
              </ul>
              {/* Call Now Button in Mobile Sliding Menu */}
              <div className="mt-6 pl-4">
                <a href='#' className='font-openSans font-bold text-[18px] bg-btnbgColor rounded-2xl px-4 py-2 text-white'>
                  Call Now
                </a>
              </div>
            </div>

            {/* Navigation Links for Desktop */}
            <div className={`hidden md:block w-full md:w-[690px] ml-[50px]`}>
              <ul className='flex flex-col pt-3 md:flex-row justify-center gap-y-5 md:gap-x-[20px]'>
                <List href='#' text='Home' className='font-openSans text-[14px] text-center pt-5 md:pt-0'/>
                <List href='#' text='Pages' className='font-openSans text-[14px] text-center pt-5 md:pt-0'/>
                <List href='#' text='Services' className='font-openSans text-[14px] text-center pt-5 md:pt-0'/>
                <List href='#' text='Portfolio' className='font-openSans text-[14px] text-center pt-5 md:pt-0'/>
                <List href='#' text='Blog' className='font-openSans text-[14px] text-center pt-5 md:pt-0'/>
                <List href='#' text='Contact Us' className='font-openSans text-[14px] text-center pt-5 md:pt-0'/>
              </ul>
            </div>

            {/* Call Now Button for Desktop */}
            <div className="hidden md:block w-[200px] lg:w-[250px] xl:w-[290px] mt-2 lg:mt-2">
              <a href='#' className='ml-[10px] md:ml-[10px] lg:ml-[80px] xl:ml-[100px] font-openSans font-bold text-[16px] bg-btnbgColor rounded-2xl px-4 py-2 text-white'>
                Call Now
              </a>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default NavBar;
