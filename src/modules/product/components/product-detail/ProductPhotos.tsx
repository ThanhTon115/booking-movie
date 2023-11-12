import React from 'react';
import { logo } from '../../../../assets';
import XCustomedCarousel from '../../../../components/XCustomedCarousel';
import { File } from '../../../../shared/types';
import { useTranslation } from 'react-i18next';
import { styles } from '../../../../styles';

type ProductPhotoType = {
  value: File[];
};
const ProductPhotos = (props: ProductPhotoType) => {
  const { t } = useTranslation();
  return (
    <div className='w-full'>
      <label className={`${styles.sectionLabel} font-semibold transition-all`}>{t('label.photos')}</label>
      <XCustomedCarousel
        itemCount={props.value?.length}
        className='my-8'
        childrent={
          <div className='relative w-full mx-auto max-w-7xl flex flex-row items-center gap-8'>
            {props.value?.map((e, ind) => (
              <img className='w-[160px] rounded lg:w-[360px] md:w-[240px] transition-all' src={e.url || logo} key={ind} />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default ProductPhotos;
