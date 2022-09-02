import React from 'react';

const HorizontalList = ({ list }: { list: string[] }) => {
  return (
    <ul className='flex flex-wrap gap-4'>
      {list.map((e) => {
        return (
          <li className='text-slate-400' key={e}>
            {e}
          </li>
        );
      })}
    </ul>
  );
};

export default HorizontalList;
