import PropTypes from 'prop-types';
import '../index.css';

const Card = ({ js, skill }) => {
  return (
    <div className='container noselect'>
      <div className='canvas'>
        <div className='tracker tr-1'></div>
        <div className='tracker tr-2'></div>
        <div className='tracker tr-3'></div>
        <div className='tracker tr-4'></div>
        <div className='tracker tr-5'></div>
        <div className='tracker tr-6'></div>
        <div className='tracker tr-7'></div>
        <div className='tracker tr-8'></div>
        <div className='tracker tr-9'></div>
        <div className='tracker tr-10'></div>
        <div className='tracker tr-11'></div>
        <div className='tracker tr-12'></div>
        <div className='tracker tr-13'></div>
        <div className='tracker tr-14'></div>
        <div className='tracker tr-15'></div>
        <div className='tracker tr-16'></div>
        <div className='tracker tr-17'></div>
        <div className='tracker tr-18'></div>
        <div className='tracker tr-19'></div>
        <div className='tracker tr-20'></div>
        <div className='tracker tr-21'></div>
        <div className='tracker tr-22'></div>
        <div className='tracker tr-23'></div>
        <div className='tracker tr-24'></div>
        <div className='tracker tr-25'></div>
        <div id='card'>
          <div className='title'>
            <img src={js} alt={`${skill} technology icon`} className='h-28' />
            <div className='w-full flex justify-center'>
              <p className='mt-5 font-semibold text-lg'>{skill}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  js: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default Card;
