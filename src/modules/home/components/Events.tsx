import React, { useRef, useState } from 'react';
import { styles } from '../../../styles';
import { Rate } from 'antd';
import './styles.scss';
import XCarousel from '../../../components/XCarousel';
import { IntrinsicAttributes } from '../../../shared/types';
import { Event, Movie } from '../../../interfaces';
import { events, members, movies } from '../../../constants';
import EventCard from '../../event/components/EventCard';
import { useTranslation } from 'react-i18next';
import XSwitches from '../../../components/core/XSwitches';
import XCustomedCarousel from '../../../components/XCustomedCarousel';

export type EventType = IntrinsicAttributes & {
  modelValue?: Event[];
};

const Events = (props: EventType) => {
  const { t } = useTranslation();
  const [currentTab, updateTab] = useState('news');

  return (
    <div className={`mx-auto px-8 ${props.className} event-list`}>
      <div className='flex flex-row justify-between items-center mb-8'>
        <label className='text-[36px] font-semibold max-md:text-[16px]'>{t(`home.label.events`)}</label>
        <div className='flex flex-row event-options gap-2'>
          <XSwitches
            value={currentTab}
            onChange={(val) => updateTab(val)}
            optionClassName='cursor-pointer'
            labelClassName='max-md:py-[8px] max-md:px-[16px] py-[16px] px-[24px]'
            options={[
              { label: 'Tin tức', value: 'news' },
              { label: 'Thành viên', value: 'member' }
            ]}
          />
        </div>
      </div>
      <XCustomedCarousel
        itemCount={currentTab === 'news' ? props.modelValue?.length : members?.length}
        childrent={
          <div className='relative w-full mx-auto max-w-7xl flex flex-row items-center gap-8'>
            {currentTab === 'news'
              ? props.modelValue?.map((e, index) => <EventCard value={e} key={index} />)
              : members?.map((e, index) => (
                  <img
                    key={index}
                    src={e?.bannerUrl || ''}
                    className='object-cover w-[300px] rounded-[6px] sm:min-w-[200px]
         h-[380px] sm:h-[313px] thumbnail-image'
                  />
                ))}
          </div>
        }
      />
    </div>
  );
};
export default React.memo(Events);
