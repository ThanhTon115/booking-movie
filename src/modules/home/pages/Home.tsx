import React, { useRef, useState } from 'react';
import Highlights from '../components/HighlightMovie';
import NowShowings from '../components/NowShowings';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import { events, movies } from '../../../constants';
import ReactTyped from 'react-typed';
import ComingSoon from '../components/ComingSoon';
import Events from '../components/Events';
import XCustomedCarousel from '../../../components/XCustomedCarousel';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='relative z-0 bg-primary home-page min-h-fit'>
      <Highlights modelValue={movies} />
      {/* <div className='text-8xl font-extrabold text-center max-w-[70vw] m-auto uppercase pt-24 pb-8'>
        {t('home.label.title')}{' '}
        <ReactTyped
          style={{ color: '#52bf90' }}
          strings={['movie', 'sport', 'dramatic'].map((e) => t(`home.label.ticket_type.${e}`))}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar='|'
          showCursor={true}
        />
      </div>
      <p className='text-center text-4xl'>{t('home.label.sub_title')}</p> */}
      <NowShowings className='pt-20' />
      <ComingSoon className='pt-20' />
      <Events modelValue={events} className='pt-20  max-w-7xl' />
    </div>
  );
};
export default Home;
