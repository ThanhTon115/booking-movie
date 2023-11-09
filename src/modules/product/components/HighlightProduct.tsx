import React from 'react';
import { Rate } from 'antd';
import { Movie } from '../../../interfaces';
import { styles } from '../../../styles';
export type PropType = {
  modelValue: Movie;
};

const HighlightProduct = (props: PropType) => {
  const { modelValue } = props;
  return (
    <div
      className={`relative w-full mx-auto min-h-[60vh] object-center bg-top bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${modelValue.bannerUrl})` }}
    >
      <div
        className={`flex items-end sm:flex-row max-sm:pt-36 max-sm:items-start flex-col sm:justify-between justify-start gap-5 px-[10vw] min-h-[60vh] flex-nowrap gradient-backgorund--bottom mb-8`}
      >
        <div className='text-left sm:max-w-[40vw] max-w-[70vw]'>
          <h1 className={`${styles.heroHeadText} text-white`}>{modelValue?.name || '--'}</h1>
          <p className='font-[12px] text-white'>{modelValue?.shortDescription || '--'}</p>
          <div className='my-xl flex flex-row gap-2 items-center'>
            <Rate disabled defaultValue={modelValue?.rating || 0} allowHalf />
            <p className='text-white text-[24px]'>{modelValue?.rating || 0}</p>
          </div>
          <div className='flex justify-start items-center mt-8 gap-5'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              Trailer
            </button>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              Reviews
            </button>
          </div>
        </div>
        <div className='text-right'>
          <p
            className={`${styles.heroSubText} mt-2 font-[12px] text-ellipsis overflow-hidden line-clamp-3 sm:line-clamp-6 text-justify`}
          >
            {modelValue?.description || '--'}
          </p>
          <div className='flex justify-start items-center mt-8  gap-5 sm:justify-end'>
            <button
              type='submit'
              className={`${styles.gradientButton} py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary`}
            >
              Đặt vé
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
      <div className="w-1 sm:h-80 h-40 violet-gradient" />
    </div> */}
      </div>
    </div>
  );
};

export default HighlightProduct;
