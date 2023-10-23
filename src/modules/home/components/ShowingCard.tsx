import React from 'react'
import { fadeIn } from '../../../utils/motion'
import { StarFilled } from '@ant-design/icons'
import './styles.scss'
import XCard from '../../../components/XCard'

export type ShowingCardProps = {
  childrent?: React.ReactElement
  isShowing?: Boolean
  value: Object
  className?: string
}
const ShowingCard = (props: ShowingCardProps) => {
  return (
    <XCard
      variants={fadeIn('up', 'spring', 2 * 0.5, 0.75)}
      mouseTransition={false}
      className={props.className}
      childrent={
        <div className='showing-card relative w-fit'>
          <img
            src={(props.value as any)?.image_url || ''}
            className='w-[400px] object-contain rounded-[6px] min-w-[140px] sm:min-w-[200px]'
          />
          <div className='rounded-[4px] showing-card__infor h-[100%] w-[100%] absolute top-0 p-4 flex-col justify-between'>
            <p className='text-[24px] font-semibold mt-[12px]'>{(props.value as any)?.name || '--'}</p>
            {props.isShowing ? (
              <div>
                {/* <p className="text-[12px] text-[#8c8c8c]">metadata</p> */}
                <div className='flex flex-row justify-between items-center mt-2'>
                  <button className='bg-tertiary py-[8px] px-[16px] rounded-[20px] outline-none w-fit text-white font-small shadow-md shadow-primary'>
                    Get Ticket
                  </button>
                  <div className='flex items-cetner gap-2'>
                    <StarFilled
                      style={{ color: 'yellow', fontSize: '24px' }}
                      rev={undefined}
                      className='text-white trailer-btn--icon'
                    />
                    <label className='font-bold'>{(props.value as any)?.star || 0}</label>
                  </div>
                </div>
              </div>
            ) : (
              <div>Coming soon</div>
            )}
          </div>
        </div>
      }
    />
  )
}

export default ShowingCard
