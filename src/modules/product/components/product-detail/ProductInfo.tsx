import { useRef } from 'react';
import { Movie } from '../../../../interfaces';
import { Rate } from 'antd';
import React from 'react';
import { styles } from '../../../../styles';
import { useTranslation } from 'react-i18next';
type ProductInfoType = {
  value: Movie;
};

const ProductInfo = (props: ProductInfoType) => {
  const { t } = useTranslation();
  const modelValue = useRef(props.value);
  return (
    <div
      className={`product-detail relative w-full mx-auto h-[60vh] max-lg:h-[40vh] object-center bg-top bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${modelValue.current?.bannerUrl})` }}
    >
      <div
        className={`flex items-end sm:justify-between justify-start gap-5 px-[10vw] min-h-[60vh] max-lg:min-h-[40vh] flex-nowrap gradient-backgorund--bottom`}
      >
        <div className='movie-info lg:flex flex-row justify-between w-full h-full transation-all'>
          <div className='movie-info--general flex flex-row'>
            <img
              src={modelValue.current?.thumbnail || ''}
              className='lg:w-[280px] object-contain rounded-[6px] w-[20vw] min-w-[120px] max-lg:max-w-[180px] thumbnail-image mr-8 transation-all'
            />
            <div className='text-left max-w-[300px] self-end flex flex-col'>
              <h1 className={`${styles.heroHeadText} text-white mb-4`}>{modelValue.current?.name || '--'}</h1>
              <p className='font-[12px] text-white mb-4'>{modelValue.current?.shortDescription || '--'}</p>
              <button
                type='submit'
                className={`${styles.gradientButton} ${styles.responsiveButtonSize} py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary`}
              >
                {t('label.get_ticket')}
              </button>
            </div>
          </div>
          <div className='movie-info--detail'>
            <div className='my-xl flex flex-row gap-2 items-center'>
              <Rate disabled defaultValue={modelValue.current?.rating || 0} allowHalf />
              <p className='text-white text-[24px]'>{modelValue.current?.rating || 0}</p>
            </div>
            <p
              className={`${styles.heroSubText} mt-2 font-[12px] text-ellipsis overflow-hidden line-clamp-3 sm:line-clamp-6 text-justify`}
            >
              {modelValue.current?.description || '--'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
