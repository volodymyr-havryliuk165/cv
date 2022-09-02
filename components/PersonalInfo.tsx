import React from 'react';
import HorizontalList from './HorizontalList';

const AgeCity = () => {
  return (
    <ul>
      <li>
        <div className='flex justify-between'>
          <p>Residence:</p>
          <p>Ukraine</p>
        </div>
      </li>
      <li>
        <div className='flex justify-between'>
          <p>City:</p>
          <p>Lviv</p>
        </div>
      </li>
      <li>
        <div className='flex justify-between'>
          <p>Age:</p>
          <p>18</p>
        </div>
      </li>
      <li>
        <div className='flex justify-between'>
          <p>Ukrainian:</p>
          <p>Native</p>
        </div>
      </li>
      <li>
        <div className='flex justify-between'>
          <p>English:</p>
          <p>B2</p>
        </div>
      </li>
    </ul>
  );
};

const Coding = () => {
  return (
    <>
      <h3 className='text-xl font-bold text-green-400'>Skills</h3>
      <h4 className='font-semibold text-lime-300'>Good knowledge:</h4>
      <HorizontalList
        list={['Javascript(ES6+)', 'React', 'Redux toolkit', 'HTML5', 'CSS']}
      />
      <h4 className='font-semibold text-amber-300'>Basic:</h4>
      <HorizontalList
        list={['SaSS', 'TailwindCSS', 'Git', 'Webpack', 'MySQL']}
      />
      <h4 className='font-semibold text-teal-400'>In progress:</h4>
      <HorizontalList list={['Typescript', 'Next.js']} />
    </>
  );
};

const PersonalInfo = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <AgeCity />
      <hr />
      <Coding />
    </div>
  );
};

export default PersonalInfo;
