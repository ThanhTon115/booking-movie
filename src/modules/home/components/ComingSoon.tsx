import React from 'react';
import './styles.scss';
import { movies } from '../../../constants';
import ProductCard from '../../product/components/ProductCard';
import { useTranslation } from 'react-i18next';

const ComingSoon = (props) => {
  const { t } = useTranslation();

  return (
    <div className={`${props.className} relative w-full mx-auto max-w-7xl px-5`}>
      <div className='flex flex-row justify-between items-center'>
        <label className='text-[36px] font-semibold max-md:text-[16px]'>{t(`home.label.coming_soon`)}</label>
        <label className='cursor-pointer max-md:text-[12px]'>{t(`label.view_all`)}</label>
      </div>
      <div className='flex flex-row gap-10 mt-10 max-lg:flex-wrap max-lg:justify-center'>
        {movies
          ?.filter((e) => e.publishedAt)
          .map((e, index) => <ProductCard value={e} key={index} className='max-w-[280px]' />)}
      </div>
    </div>
  );
};
export default ComingSoon;
