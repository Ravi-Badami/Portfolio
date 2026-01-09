const ExperienceIcon = () => {
    return (
      <div className='group relative px-4 cursor-pointer'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            height='24'
            width='24'>
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='1.5'
              stroke='currentColor'
              d='M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z'></path>
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='1.5'
              stroke='currentColor'
              d='M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7'></path>
          </svg>
        </div>
        <span className='absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>
          Experience
        </span>
      </div>
    );
  };
  
  export default ExperienceIcon;
