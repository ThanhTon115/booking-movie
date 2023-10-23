import React, { useMemo } from 'react';
import { StarFilled } from '@ant-design/icons';
import './styles.scss';
import XCard from '../../../components/XCard';
import { Event, Movie } from '../../../interfaces';
import { fadeIn } from '../../../shared/utils/motion';
import { useTranslation } from 'react-i18next';

export type EventCardProps = {
  childrent?: React.ReactElement;
  inComing?: Boolean;
  value: Event;
  className?: string;
};
const EventCard = (props: EventCardProps) => {
  const { t, i18n } = useTranslation();
  const selectedLocale = useMemo(() => {
    return i18n.language;
  }, [i18n.language]);
  return (
    <XCard
      variants={fadeIn('up', 'spring', 2 * 0.5, 0.75)}
      mouseTransition={false}
      className={props.className}
      childrent={
        <div className='showing-card relative h-max w-[380px] bg-primary-50 rounded-[6px]'>
          <img
            src={props.value?.bannerUrl || ''}
            className='object-cover w-full rounded-t-[6px] sm:min-w-[200px]
             h-[280px] sm:h-[200px] thumbnail-image'
          />
          <div className='px-4'>
            <p className='text-white py-4 uppercase'>{props.value?.title[selectedLocale]}</p>
            <hr />
            <p className='text-white py-4 truncate'>
              {props.value?.shortDescription[selectedLocale]}
            </p>
          </div>
        </div>
      }
    />
  );
};

export default React.memo(EventCard);
