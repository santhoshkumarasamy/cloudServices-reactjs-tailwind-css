import { BiCheckDouble } from "react-icons/bi";

const Pricing = () => {
  return (
    <section name="pricing" className="w-full my-32 text-white">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className=" max-w-[1240px] mx-auto py-12 ">
        <div className="text-center py-8 text-slate-300">
          <h2 className=" text-3xl uppercase">Pricing</h2>
          <h3 className="test-5xl font-bold text-white py-8 ">
            The Right Price for your research.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            repudiandae nam incidunt nesciunt, voluptas obcaecati?
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>

                <div>
                    <p className="text-6xl font-bold py-4 flex" >$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <p className='text-2xl py-8 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <div className="relative">
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='w-full py-4 my-4 '>Get Started</button>
                </div>
          </div>
          <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>

                <div>
                    <p className="text-6xl font-bold py-4 flex" >$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <p className='text-2xl py-8 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <div className="relative">
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <div className='flex py-4'>
                        <div className="text-3xl mr-4 text-green-600"><BiCheckDouble /></div>
                        <p className='text-2xl text-slate-900'>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='w-full py-4 my-4 '>Get Started</button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
