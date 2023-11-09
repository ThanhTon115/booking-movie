import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { Movie } from '../../../interfaces';
import { members, movies } from '../../../constants';
import { Rate } from 'antd';
import { styles } from '../../../styles';
import './styles.scss';
import XCustomedCarousel from '../../../components/XCustomedCarousel';
import EventCard from '../../event/components/EventCard';
import { logo } from '../../../assets';
import ProductInfo from '../components/product-detail/ProductInfo';
import ProductPhotos from '../components/product-detail/ProductPhotos';
import XSwitches from '../../../components/core/XSwitches';
const ProductDetail = () => {
  const { slug } = useParams();
  const modelValue: Movie = movies[0];
  const [currentTab, updateTab] = useState('summary');
  return (
    <>
      <ProductInfo value={modelValue} />
      <ProductPhotos value={modelValue.files} />
      <div className='flex flex-row event-options gap-2'>
        <XSwitches
          value={currentTab}
          onChange={(val) => updateTab(val)}
          optionClassName='cursor-pointer'
          labelClassName='max-md:py-[8px] max-md:px-[16px] py-[16px] px-[24px]'
          options={[
            { label: 'Tóm lược', value: 'summary' },
            { label: 'Đánh giá', value: 'reviews' }
          ]}
        />
      </div>
      {}
      {slug}
    </>
  );
};
export default ProductDetail;
