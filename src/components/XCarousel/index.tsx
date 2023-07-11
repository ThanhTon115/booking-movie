import { Carousel, CarouselProps } from 'antd'
import './styles.scss'
import React, { forwardRef, useRef } from 'react'
import { CarouselRef } from 'antd/es/carousel'

export interface XCarouselProps extends CarouselProps {}

const XCarousel = React.forwardRef((props: XCarouselProps, ref: React.Ref<CarouselRef>) => {
  return <Carousel {...props} ref={ref}></Carousel>
})

export default XCarousel
