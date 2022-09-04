import React from "react";

const About = () => {
  return (
    <section name="about" className=" my-32 w-full">
      <div className='max-w-[1240px] mx-auto'>
        <article className=' text-center'>
          <h1 className=" text-5xl font-bold  px-6">
            Trusted by developers across the World
          </h1>
          <h3 className=" text-3xl  text-gray-500 py-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            iusto. Ipsa magni veniam facere ducimus.
          </h3>
        </article>

        <article className="grid md:grid-cols-3 gap-2 w-[100%] px-2 text-center">
          <div className=" flex flex-col border border-gray-300 shadow-xl px-3 py-5 rounded-lg">
            <h1 className="font-bold text-indigo-600 text-6xl">100%</h1>
            <p className='text-gray-400 mt-2'>Completion</p>
          </div>
          <div className=" flex flex-col border border-gray-300 shadow-xl px-3 py-5 rounded-lg">
            <h1 className="font-bold text-indigo-600 text-6xl">24/7</h1>
            <p className='text-gray-400 mt-2'>Support</p>
          </div>
          <div className=" flex flex-col border border-gray-300 shadow-xl px-3 py-5 rounded-lg">
            <h1 className="font-bold text-indigo-600 text-6xl">100K</h1>
            <p className='text-gray-400 mt-2'>Transactions</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
