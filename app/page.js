import About from './components/home/About';
import Hero from './components/home/Hero';

export default function Home() {
  return (
    <div className=' w-full min-h-screen  border-b  bg-[#171129] '>
      <div className=' max-w-[1200px] m-auto px-4'>
        <div className="text-white bg-repeat bg-[url('../public/images/bg-pattern.svg')] w-full h-screen">
          {/* Hello*/}

          <Hero />
        </div>
        
        <About />
      </div>
    </div>
  );
}
