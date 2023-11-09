import React from 'react';
import { logo } from '../../../../assets';
import XCustomedCarousel from '../../../../components/XCustomedCarousel';
import { File } from '../../../../shared/types';

type ProductPhotoType = {
  value: File[];
};
const ProductPhotos = (props: ProductPhotoType) => {
  return (
    <div className='w-full px-[15vw] mt-16'>
      <label className='text-[36px] font-semibold max-md:text-[16px] '>Photos</label>
      <XCustomedCarousel
        itemCount={props.value?.length}
        className='my-8'
        childrent={
          <div className='relative w-full mx-auto max-w-7xl flex flex-row items-center gap-8'>
            {props.value?.map((e, ind) => <img className='h-[300px] rounded' src={e.url || logo} key={ind} />)}
          </div>
        }
      />
    </div>
  );
};

export default ProductPhotos;
