import React from 'react';
import Image from 'next/image';
import me from '../public/my-photo.jpg';

const WhoAmI = () => {
  return (
    <div className='p-8 text-center'>
      <Image
        src={me}
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
