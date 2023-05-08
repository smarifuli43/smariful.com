import About from './components/home/About';
import Hero from './components/home/Hero';
import Portfolio from './components/home/Portfolio';

export default function Home() {
  return (
    <div className=' w-full min-h-screen  border-b  bg-[#171129] '>
      <div className="max-w-[1200px] m-auto px-4 md:px-6 lg:px-8 xl:px-0 bg-repeat bg-[url('../public/images/bg-pattern.svg')] w-full h-full">
        <div className='text-white'>
          {/* Hello*/}

          <Hero />
        </div>

        <About />
        <Portfolio />
      </div>
    </div>
  );
}
