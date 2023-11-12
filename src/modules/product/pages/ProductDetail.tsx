import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { Movie } from '../../../interfaces';
import { actors, members, movies, reviews } from '../../../constants';
import { Rate } from 'antd';
import { styles } from '../../../styles';
import './styles.scss';
import XCustomedCarousel from '../../../components/XCustomedCarousel';
import EventCard from '../../event/components/EventCard';
import { logo } from '../../../assets';
import ProductInfo from '../components/product-detail/ProductInfo';
import ProductPhotos from '../components/product-detail/ProductPhotos';
import XSwitches from '../../../components/core/XSwitches';
import Actors from '../components/product-detail/Actors';
import UserReviews from '../components/product-detail/UserReviews';
const ProductDetail = () => {
  const { slug } = useParams();
  const modelValue: Movie = movies[0];
  return (
    <>
      <ProductInfo value={modelValue} />
      <div className='product-detail mt-16 px-[10vw]'>
        <div className='lg:grid lg:grid-cols-12 w-full'>
          <div className='col-span-4'>
            <Actors value={[...actors]} />
          </div>
          <div className='col-span-8'>
            <ProductPhotos value={[...modelValue.files, ...modelValue.files]} />
          </div>
        </div>
        <hr className='my-8 separator' />
        <UserReviews value={reviews} />
      </div>
    </>
  );
};
export default ProductDetail;
