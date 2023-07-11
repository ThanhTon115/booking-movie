import React, { useRef, useState } from 'react'
import Highlights from '../components/Highlights'
import { Carousel } from 'antd'
import NowShowings from '../components/NowShowings'
import InComings from '../components/InComings'
import ShowingCard from '../components/ShowingCard'
import { showingMovies } from '../type'
import { StarsCanvas } from '../../../components/canvas'
import Contact from '../../../components/Contact'
import XCarousel from '../../../components/XCarousel'
import './styles.scss'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  const [tab, useTab] = useState('promotion')
  const carouselRef = useRef(null)
  return (
    <div className='relative z-0 bg-primary home-page'>
      <Carousel autoplay>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Highlights />
        </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Highlights />
        </div>
      </Carousel>
      <NowShowings className='mt-[32px]' />
      <InComings className='mt-[64px]' />
      <div className='flex flex-row my-[32px] text-[24px] gap-5 justify-center font-bold'>
        <label
          className={`${tab === 'promotion' ? 'selected' : ''} cursor-pointer`}
          onClick={() => useTab('promotion')}
        >
          {t('label.promotions')}
        </label>
        |
        <label className={`${tab === 'event' ? 'selected' : ''} cursor-pointer`} onClick={() => useTab('event')}>
          {t('label.news')}
        </label>
      </div>
      <XCarousel ref={carouselRef} autoplay className='max-w-5xl mx-auto' variableWidth>
        {showingMovies.map((e, index) => (
          <ShowingCard value={e} key={index} className='w-fit mx-[12px]' />
        ))}
      </XCarousel>
      <div className='relative z-0'>
        <StarsCanvas />
        <Contact />
      </div>
    </div>
  )
}
export default Home
