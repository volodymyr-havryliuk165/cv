import type { NextPage } from 'next';
import WhoAmI from '../components/WhoAmI';
import PersonalInfo from '../components/PersonalInfo';
import Links from '../components/Links';
const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center bg-gray-900 py-5 text-neutral-100 print:min-h-[200vh]'>
      <div className='flex w-[70%] flex-col justify-center gap-8 lg:flex-row'>
        <section className='flex basis-1/3 flex-col print:mt-28'>
          <header className='rounded-t-2xl bg-gray-700'>
            <WhoAmI />
          </header>
          <div className='flex-grow bg-gray-800'>
            <PersonalInfo />
          </div>
          <footer className='rounded-b-2xl bg-gray-700'>
            <Links />
          </footer>
        </section>
        <section className='flex basis-2/3 flex-col gap-4 rounded-2xl bg-gray-800 p-6 pt-14 print:mt-[9.5rem]'>
          <section className='flex flex-col gap-4 rounded-2xl bg-gray-700 bg-opacity-50 p-4 text-lg'>
            <h3 className='text-center text-3xl font-bold'>Desired position</h3>
            <p>
              <strong>Front-End Developer(React JS)</strong>
            </p>
            <p>
              <strong>Employment</strong>: part time, full time
            </p>
            <p>
              <strong>Work schedule</strong>: remote working, flexible schedule,
              full day, shift schedule
            </p>
          </section>
          <section className='flex flex-col gap-4 rounded-2xl bg-gray-700 bg-opacity-50 p-4 text-lg'>
            <h3 className='text-center text-3xl font-bold'>Education</h3>
            <div className='flex gap-12'>
              <p>2019-2023</p>
              <p className='font-bold'>
                Technological Vocational College of Lviv Polytechnic National
                University
              </p>
            </div>
          </section>
          <section className='flex flex-col gap-4 rounded-2xl bg-gray-700 bg-opacity-50 p-4 text-lg'>
            <h3 className='text-center text-3xl font-bold'>
              Further information
            </h3>
            <h4 className='flex flex-col gap-4 text-2xl'>About me:</h4>
            <p>
              4th year Computer Science student in Technological College of Lviv
              Polytechnic.
            </p>
            <ul className='list-disc pl-6'>
              <li>I work with React library for JavaScript</li>
              <li>Have good knowledge of ES6.</li>
              <li>
                Passionate about developing client-side of applications and
                creating enjoyable user experience.
              </li>
              <li>
                Have basic understanding of OOP and FP concepts, design
                patterns.
              </li>
              <li>Took Front-End training program in EPAM University.</li>
              <li>
                I like comfortable atmosphere, where disagreements are solved
                with dialogue rather than conflict.
              </li>
              <li>
                Very willing to cooperate with colleagues, to learn from them
                and to learn by myself
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;
