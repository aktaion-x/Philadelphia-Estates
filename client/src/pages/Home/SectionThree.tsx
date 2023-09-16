function SectionThree() {
  return (
    <div className="mt-32">
      <div className="bg-black py-20 w-full">
        <div className="text-white text-center max-w-[700px] mx-auto px-10">
          <h1 className="font-extrabold mb-10 text-6xl">Real State Jordan</h1>
          <p className="text-lg font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero est id?</p>
        </div>
      </div>
      {/* Why Us */}
      <div className="section mx-auto">
        <img className="mx-auto" src="/img/service.png" alt="" />
        <div className="flex lg:flex-nowrap flex-wrap gap-28 justify-between items-start mt-32">
          <div>
            <h6 className="font-bold text-lg mb-3">Why Choose Us</h6>
            <h2 className="text-5xl font-bold mb-5">Best valued deals you will ever find</h2>
            <p className="text-gray-500 mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sunt, atque quod, illo facere, natus sint magni odio adipisci sit quidem. Quos ea aperiam nam harum nostrum aut adipisci culpa!</p>
            <button className="py-3 px-5 bg-brand-700 font-bold text-white">Find Details &#62;</button>
          </div>
          <div>
            <div className="flex gap-5 items-start justify-between mb-5">
              <img className="w-16" src="/img/icon-4.png" alt="" />
              <div>
                <h4 className="font-bold text-xl mb-3">Coutnety asd cxlier</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus hic laudantium, nisi aut eum ad nemo ratione</p>
              </div>
            </div>
            <div className="flex gap-5 items-start justify-between mb-5">
              <img className="w-16" src="/img/icon-5.png" alt="" />
              <div>
                <h4 className="font-bold text-xl mb-3">Coutnety asd cxlier</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus hic laudantium, nisi aut eum ad nemo ratione</p>
              </div>
            </div>
            <div className="flex gap-5 items-start justify-between mb-5">
              <img className="w-16" src="/img/icon-6.png" alt="" />
              <div>
                <h4 className="font-bold text-xl mb-3">Coutnety asd cxlier</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus hic laudantium, nisi aut eum ad nemo ratione</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
