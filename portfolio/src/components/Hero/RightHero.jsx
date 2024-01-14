import profilePic from '../../../public/image/profile.png';
const RightHero = () => {
  return (
    <div className='w-1/2 borderr borderr-black h-[80%] flex justify-center'>
      <div className='rounded-full'>
        <img src={profilePic} alt='' className='rounded-full' />
      </div>
    </div>
  );
};

export default RightHero;
