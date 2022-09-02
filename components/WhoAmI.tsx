import React from 'react';
import Image from 'next/image';

const WhoAmI = () => {
  return (
    <div className='p-8 text-center'>
      <Image
        src='/../public/my-photo.jpg'
        width={150}
        height={200}
        alt='my photo'
        className='clip-circle'
      />
      <h2 className='-mt-8 text-xl font-bold'>
        Havryliuk Volodymyr Andriyovich
      </h2>
    </div>
  );
};

export default WhoAmI;
