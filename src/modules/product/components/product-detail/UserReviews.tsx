import React from 'react';
import { styles } from '../../../../styles';
import { useTranslation } from 'react-i18next';
import { Review } from '../../../../interfaces';
import { logo } from '../../../../assets';
import { Rate } from 'antd';

type UserReviewType = {
  value: Review[];
};

const UserReview = React.memo((props: { value: Review; className: string }) => {
  return (
    <div className={`md:grid md:grid-cols-12 transition-all items-top gap-8 my-8 p-8 ${props.className}`}>
      <div className='flex flex-row gap-8 col-span-3 max-md:mb-8'>
        <img
          src={props.value?.createdUser?.avatar || logo}
          alt={props.value?.createdUser?.name || '--'}
          className='rounded-full md:w-[112px] md:h-[112px] h-[56px] w-[56px] object-cover'
        />
        <div className='flex flex-col'>
          <div className='mb-4'>created_at</div>
          <div>{props.value?.createdUser?.name}</div>
        </div>
      </div>
      <div className='text-left col-span-9'>
        <Rate disabled defaultValue={props.value?.rating || 0} allowHalf className='md:mb-8 mb-2' />
        <div className='md:mb-8 mb-2'>{props.value?.content || '--'}</div>
        <div className='flex flex-row'>
          <div>like</div>
          <div>dislike</div>
        </div>
      </div>
    </div>
  );
});
const UserReviews = (props: UserReviewType) => {
  const { t } = useTranslation();
  return (
    <div className='w-full'>
      <label className={`${styles.sectionLabel} font-semibold transition-all text-ellipsis`}>
        {t('label.user_review')}
      </label>
      <div className='mt-8'>
        {props.value?.map((review, index) => (
          <div key={index}>
            <UserReview value={review} className='card-border--dot' />
          </div>
        ))}
      </div>
    </div>
  );
};
export default React.memo(UserReviews);
