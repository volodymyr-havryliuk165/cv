import React from 'react';
import { FaTelegram, FaPhoneSquareAlt } from 'react-icons/fa';
import { IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

const ToShow = () => {
  return (
    <ul className='flex justify-evenly gap-4 py-4 print:hidden'>
      <li className='text-2xl'>
        <a
          href='https://www.linkedin.com/in/volodymyr-havryliuk-1ba70a249/'
          className='transition-colors hover:text-blue-400'
        >
          <IoLogoLinkedin />
        </a>
      </li>
      <li className='text-2xl'>
        <a
          className='transition-colors hover:text-gray-500'
          href='https://github.com/volodymyr-havryliuk165'
        >
          <IoLogoGithub />
        </a>
      </li>
      <li className='text-2xl'>
        <a
          className='transition-colors hover:text-rose-600'
          href='mailto:vova2341591@gmail.com'
        >
          <IoMail />
        </a>
      </li>
      <li className='text-2xl'>
        <a className='transition-colors hover:text-blue-400' href=''>
          <FaTelegram />
        </a>
      </li>
    </ul>
  );
};

const ToPrint = () => {
  return (
    <ul className='hidden flex-col gap-2 p-4 print:flex'>
      <li className='flex gap-2'>
        <IoMail className='text-2xl' />
        <p>
          <a href='mailto:vova2341591@gmail.com'>vova2341591@gmail.com</a>
        </p>
      </li>
      <li className='flex gap-2'>
        <FaPhoneSquareAlt className='text-2xl' />
        <p>+380 66 427 5037</p>
      </li>
      <li className='flex gap-2'>
        <IoLogoGithub className='text-2xl' />
        <p>volodymyr-havryliuk165</p>
      </li>
      <li className='flex gap-2'>
        <FaTelegram className='text-2xl' />
        <p>t.me/volodymyr_havryliuk</p>
      </li>
    </ul>
  );
};

const Links = () => {
  return (
    <>
      <ToShow />
      <ToPrint />
    </>
  );
};

export default Links;
