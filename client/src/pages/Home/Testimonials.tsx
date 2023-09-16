function Testimonials() {
  return (
    <div className="section mx-auto mb-20">
      <h1 className="text-center text-5xl font-bold w-3/4 mx-auto mb-20 mt-10">Our Clients Say</h1>
      <div className="text-center flex gap-32 flex-wrap justify-center">
        <div className="w-96 shadow-lg bg-white p-10">
          <img className="w-20 h-20 object-cover mx-auto mb-5 rounded-full" src="/img/person-5.png" alt="" />
          <p className="text-gray-600 mb-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eos porro odio deserunt cupiditate magni hic corporis obcaecati repellendus eius excepturi quis, ut fugiat nihil sequi dolor consectetur iusto voluptas.</p>
          <h4 className="text-xl font-bold mb-1">Person Name</h4>
          <span className="font-semibold text-gray-500">Person Position</span>
        </div>
        <div className="w-96 shadow-lg bg-white p-10">
          <img className="w-20 h-20 object-cover mx-auto mb-5 rounded-full" src="/img/person-6.png" alt="" />
          <p className="text-gray-600 mb-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eos porro odio deserunt cupiditate magni hic corporis obcaecati repellendus eius excepturi quis, ut fugiat nihil sequi dolor consectetur iusto voluptas.</p>
          <h4 className="text-xl font-bold mb-1">Person Name</h4>
          <span className="font-semibold text-gray-500">Person Position</span>
        </div>
        <div className="w-96 shadow-lg bg-white p-10">
          <img className="w-20 h-20 object-cover mx-auto mb-5 rounded-full" src="/img/person-7.png" alt="" />
          <p className="text-gray-600 mb-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eos porro odio deserunt cupiditate magni hic corporis obcaecati repellendus eius excepturi quis, ut fugiat nihil sequi dolor consectetur iusto voluptas.</p>
          <h4 className="text-xl font-bold mb-1">Person Name</h4>
          <span className="font-semibold text-gray-500">Person Position</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
