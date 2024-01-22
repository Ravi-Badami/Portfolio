const Settings = () => {
  return (
    <div className='group relative px-4 cursor-pointer'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
        <svg
          width='256px'
          height='256px'
          viewBox='0 0 48.00 48.00'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          transform='matrix(1, 0, 0, 1, 0, 0)rotate(0)'>
          <g id='SVGRepo_bgCarrier' strokeWidth='1.5' />

          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />

          <g id='SVGRepo_iconCarrier'>
            <defs>
              <style>
                {`
                  .a {
                    fill: none;
                    stroke: currentColor;
                    strokeLinecap: round;
                    strokeLinejoin: round;
                    strokeWidth:'1.5'
                  }
                `}
              </style>
            </defs>

            <polygon
              className='a'
              points='43.5 20.48 24 9.54 4.5 20.48 24 31.42 43.5 20.48'
              strokeWidth='1.5'
            />

            <polyline
              className='a'
              points='36.26 24.54 36.26 31.58 24 38.46 11.74 31.58 11.74 24.54'
              strokeWidth='1.5'
            />

            <line className='a' x1='43.5' y1='35.02' x2='43.5' y2='20.48' strokeWidth='1.5' />
          </g>
        </svg>
      </div>
      <span className='absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>
        Projects
      </span>
    </div>
  );
};

export default Settings;
