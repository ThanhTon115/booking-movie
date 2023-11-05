import React from 'react';
import { StarFilled } from '@ant-design/icons';
import './styles.scss';
import XCard from '../../../components/XCard';
import { Movie } from '../../../interfaces';
import { fadeIn } from '../../../shared/utils/motion';
import { useNavigate } from 'react-router';
import { ROUTE_PRODUCT_DETAIL } from '../types';

export type ProductCardProps = {
  childrent?: React.ReactElement;
  inComing?: Boolean;
  value: Movie;
  className?: string;
};
const ProductCard = (props: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <XCard
      variants={fadeIn('up', 'spring', 2 * 0.5, 0.75)}
      mouseTransition={false}
      className={props.className}
      childrent={
        <div className='showing-card relative w-fit'>
          <img
            src={props.value?.thumbnail || ''}
            className='w-[400px] object-contain rounded-[6px] min-w-[140px] sm:min-w-[200px]
             h-[400px] sm:min-h-[250px] thumbnail-image'
          />
          <div className='rounded-[4px] showing-card__infor h-[400px] sm:min-h-[250px] w-[100%] absolute top-0 p-4 justify-end flex flex-col'>
            {props.inComing && (
              <div className='flex flex-row justify-between items-end mt-2 w-full'>
                <button
                  className='bg-tertiary py-[8px] px-[16px] rounded-[20px] outline-none w-fit text-white font-small shadow-lg hover:shadow-gray-500/50'
                  onClick={() =>
                    navigate(ROUTE_PRODUCT_DETAIL, {
                      state: {
                        id: 'hel hoaaaaaalo'
                      }
                    })
                  }
                >
                  Get Ticket
                </button>
                <div className='flex items-cetner gap-2 pb-2'>
                  <StarFilled
                    style={{ color: 'yellow', fontSize: '24px' }}
                    rev={undefined}
                    className='text-white trailer-btn--icon'
                  />
                  <label className='font-bold'>{props.value?.rating || 0}</label>
                </div>
              </div>
            )}
            <div className='py-2'>
              <p className='text-[20px] font-semibold showing-card__name'>{props.value?.name || '--'}</p>
              <p className='text-[12px] font-small showing-card__duration absolute'>{props.value?.duration || '--'}</p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ProductCard;
