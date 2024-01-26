import SocialMedia from './SocialMedia';

const Contact = () => {
  return (
    <div id='messages'>
      <section className='text-gray-600 body-font relative bg-blue-100 rounded-xl '>
        <SocialMedia />
        <div className=' px-5 py-10 md:py-10 mx-auto'>
          <div className='flex flex-col text-center w-full mb-6 md:mb-12'>
            <h1 className='text-3xl md:text-6xl  title-font font-extrabold mb-4 text-gray-900'>
              Lets connect
            </h1>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label className='leading-7 text-sm font-medium text-black'>Name</label>
                  <input
                    type='text'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border  border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label className='leading-7 text-sm font-medium text-black'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label className='leading-7 text-sm font-medium text-black'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full min-h-44 bg-gray-100 bg-opacity-50 rounded border border-black focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-auto text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out resize-both'></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button className='flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'>
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
