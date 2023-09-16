import Logo from '../../assets/Logo';
function Landing() {
  return (
    <div className="h-screen">
      <div>
        <img className="w-full h-full object-cover absolute top-0 left-0" src="/img/landing.png" alt="" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-flow-col w-10/12 lg:w-10/12 ">
        <div className='grid-cols-3 hidden md:flex xl:px-10 items-center justify-center bg-black border-[10px] border-black'>
          <Logo className="w-40 h-40 xlg:w-56 xlg:h-56 fill-white" />
        </div>
        <div className='border-[10px] border-black grid-cols-9 flex flex-col lg:block'>
          <p className='border-b-[10px] border-black lg:text-xl p-3 pl-8 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h1 className='
          xl:text-6xl xl:pl-8 xl:pb-28 xl:text-left
          lg:text-5xl lg:pl-8 lg:pb-28 lg:text-left
         border-black
          text-3xl font-extrabold p-8 '>Philadelphia Estates</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
