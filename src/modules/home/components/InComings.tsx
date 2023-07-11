import React from 'react'
import { styles } from '../../../styles'
import { PlayCircleOutlined } from '@ant-design/icons'
import './styles.scss'
import { showingMovies } from '../type'
import ShowingCard from './ShowingCard'

const InComings = (props) => {
  return (
    <div className={`${props.className} relative w-full mx-auto max-w-7xl px-5`}>
      <div className='flex flex-row justify-between items-center'>
        <label className='text-[24px] font-semibold'>Coming soon</label>
        <label className='cursor-pointer'>View all</label>
      </div>
      <div className='flex flex-row gap-10 mt-10'>
        {showingMovies.map((e, index) => (
          <ShowingCard value={e} key={index} />
        ))}
      </div>
    </div>
  )
}
export default InComings
