function About() {
  return (
    <div className="page">
      <div className="flex justify-center gap-10 items-start mt-16">
        <img className="hidden md:block w-2/5" src="/img/about.png" alt="" />
        <div className="md:text-start text-center">
          <h1 className="text-5xl w-full font-bold ">About Us</h1>
          <p className="text-gray-600 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-brand-700">Magni soluta non</span> labore aperiam tempore iusto corrupti blanditiis vitae totam voluptatum nihil odit fugiat at adipisci, et recusandae cumque repellendus saepe?</p>
          <p className="text-gray-600 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta non labore aperiam tempore iusto corrupti blanditiis vitae totam voluptatum nihil odit fugiat at adipisci, et recusandae cumque repellendus saepe?</p>
        </div>
      </div>
    </div>
  );
}

export default About;
