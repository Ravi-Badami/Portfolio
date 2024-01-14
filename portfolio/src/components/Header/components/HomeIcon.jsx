const HomeIcon = () => {
  return (
    <div className='group relative px-4 cursor-pointer'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          height='32'
          width='32'>
          <path
            stroke='currentColor'
            d='M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z'></path>
        </svg>
      </div>
      <span className='absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>
        Home
      </span>
    </div>
  );
};

export default HomeIcon;
