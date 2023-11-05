import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IntrinsicAttributes } from '../../shared/types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './styles.scss';

export type XCustomedCarouselType = IntrinsicAttributes & {
  childrent?: React.ReactNode;
  itemCount?: number;
};
const XCustomedCarousel = (props: XCustomedCarouselType) => {
  const carouselRef = useRef<any>(null);
  const [defaultTranformValue, setDefaultTranformValue] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [tranformValue, setTranformValue] = useState(0);
  const [isOverflown, setIsOverflown] = useState(false);
  const handleNext = (next?) => {
    const nextPos = next ? activeItem + 1 : activeItem - 1;
    setTranformValue(-(nextPos * defaultTranformValue));
    setActiveItem(nextPos);
  };
  const refreshOverflow = () => {
    if (carouselRef.current?.scrollWidth > carouselRef.current?.clientWidth) {
      setIsOverflown(true);
    } else {
      setIsOverflown(false);
      setTranformValue(0);
      setActiveItem(0);
    }
  };
  const refreshDefaultTranform = () => {
    const childWidth =
      carouselRef.current?.childNodes[0]?.children[0]?.children[0]?.clientWidth || defaultTranformValue;
    const gap =
      (carouselRef.current?.scrollWidth - childWidth * (props.itemCount || 0)) /
      (props.itemCount ? props.itemCount - 1 : 1);
    console.log(childWidth + gap, childWidth);
    if (defaultTranformValue === childWidth + gap) {
      return;
    }
    setDefaultTranformValue(childWidth + gap);
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      refreshDefaultTranform();
      refreshOverflow();
    });
    refreshOverflow();
    refreshDefaultTranform();
  }, []);
  return (
    <>
      <div
        ref={(val) => {
          carouselRef.current = val;
        }}
        className='flex flex-row overflow-hidden relative'
      >
        <div
          style={{ transform: `translate3d(${tranformValue}px,0,0)` }}
          className='
        transition-all'
        >
          {props.childrent}
        </div>
        {isOverflown && (
          <div className='w-full h-full absolute top-0'>
            {activeItem > 0 && (
              <div
                onClick={() => {
                  handleNext();
                }}
              >
                <LeftOutlined
                  className='btn-carousel-direction btn-carousel-direction--left cursor-pointer float-left ml2 hover:!text-[32px] transition-all'
                  style={{ fontSize: '24px', marginTop: `${Math.round(carouselRef.current?.clientHeight / 2) - 32}px` }}
                />
              </div>
            )}
            {props.itemCount &&
              activeItem < props.itemCount - 1 &&
              carouselRef.current?.scrollWidth + tranformValue > carouselRef.current?.clientWidth && (
                <div
                  onClick={() => {
                    handleNext(true);
                  }}
                >
                  <RightOutlined
                    className='btn-carousel-direction btn-carousel-direction--right cursor-pointer float-right mr2 hover:!text-[32px] transition-all'
                    style={{
                      fontSize: '24px',
                      marginTop: `${Math.round(carouselRef.current?.clientHeight / 2) - 32}px`
                    }}
                  />
                </div>
              )}
          </div>
        )}
      </div>
    </>
  );
};

export default XCustomedCarousel;
