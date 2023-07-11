import React from 'react'
import { styles } from '../../../styles'
import { Rate } from 'antd'
import './styles.scss'

const Highlights = () => {
  return (
    <div className={`relative w-full h-[60vh] sm:h-[45vh] mx-auto gradient-backgorund highlight-card`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  flex lg:flex-row md:flex-row sm:flex-row flex-col  items-start sm:justify-between justify-start gap-5 px-[24px] flex-nowrap`}
      >
        <div className='text-left sm:max-w-[40vw] max-w-[70vw]'>
          <h1 className={`${styles.heroHeadText} text-white`}>Nàng tiên cá</h1>
          <p className='font-[12px] text-white'>short description</p>
          <div className='my-xl flex flex-row gap-2'>
            <Rate disabled defaultValue={3.5} allowHalf /> <p className='text-white text-[24px]'>3.5</p>
          </div>
          <div className='flex justify-between items-center mt-8  gap-5'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              Trailer
            </button>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              Reviews
            </button>
          </div>
        </div>
        <div className='text-right  lg:max-w-[40vw] md:max-w-[40vw] sm:max-w-[30vw]'>
          <p
            className={`${styles.heroSubText} mt-2 font-[12px] text-ellipsis overflow-hidden line-clamp-3 sm:line-clamp-6 text-justify`}
          >
            “Nàng Tiên Cá” là câu chuyện được yêu thích về Ariel - một nàng tiên cá trẻ xinh đẹp và mạnh mẽ với khát
            khao phiêu lưu. Ariel là con gái út của Vua Triton và cũng là người ngang ngạnh nhất, nàng khao khát khám
            phá về thế giới bên kia đại dương. Trong một lần ghé thăm đất liền, nàng đã phải lòng Hoàng tử Eric bảnh
            bao. Trong khi tiên cá bị cấm tiếp xúc với con người, Ariel đã làm theo trái tim mình. Nàng đã thỏa thuận
            với phù thủy biển Ursula hung ác để cơ hội sống cuộc sống trên đất liền. Nhưng cuối cùng việc này lại đe dọa
            tới mạng sống của Ariel và vương miện của cha nàng.
          </p>
          <div className='flex justify-start items-center mt-8  gap-5 sm:justify-end'>
            <button
              type='submit'
              className={`${styles.gradientButton} py-3 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary`}
            >
              Đặt vé
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
      </div>
    </div>
  )
}
export default Highlights
