import React from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from '../../../../styles';
import { actors } from '../../../../constants';
import { logo } from '../../../../assets';
import XCustomedCarousel from '../../../../components/XCustomedCarousel';
import { Actor } from '../../../../interfaces/actor';

type ProductActorType = {
  value: Actor[];
};
const ActorItem = (props: { value: Actor }) => {
  return (
    <div className='lg:flex lg:flex-row transition-all items-center gap-8 mb-8'>
      <img
        src={props.value?.avatar || logo}
        alt={props.value?.name || '--'}
        className='rounded-full max-lg:min-w-[112px] max-lg:min-h-[112px] max-lg:mb-4 object-cover w-[56px] h-[56px]'
      />
      <div className='text-left max-lg:text-center'>
        <div>{props.value?.name || '--'}</div>
        {props.value?.role && <div>{props.value?.role || '--' || '--'}</div>}
        <div>{props.value?.characterName || '--'}</div>
      </div>
    </div>
  );
};

const Actors = (props: ProductActorType) => {
  const { t } = useTranslation();
  return (
    <div className='w-full'>
      <label className={`${styles.sectionLabel} font-semibold transition-all text-ellipsis`}>
        {t('label.director_and_actors')}
      </label>
      <div className='transition-all mt-8 max-lg:hidden'>
        {props.value?.map((actor, ind) => <ActorItem value={actor} key={ind} />)}
      </div>
      <XCustomedCarousel
        itemCount={props.value?.length}
        className='my-8 lg:hidden'
        childrent={
          <div className='relative w-full mx-auto max-w-7xl flex flex-row items-center gap-8 '>
            {props.value?.map((actor, ind) => <ActorItem value={actor} key={ind} />)}
          </div>
        }
      />
    </div>
  );
};

export default React.memo(Actors);
