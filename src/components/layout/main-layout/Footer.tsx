import React from 'react'
import { logo } from '../../../assets'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='max-w-6xl m-auto py-4 text-[13px]'>
      <div className=' flex flex-row justify-between'>
        {/* infor */}
        <div className='font-bold gap-2 w-[25%] flex flex-col'>
          {t('label.general_information')}
          <div className='font-[400]'>{t('label.information')}</div>
          <div className='font-[400]'>{t('label.online_utilities')}</div>
          <div className='font-[400]'>{t('label.gift_card')}</div>
          <div className='font-[400]'>{t('label.recuitment')}</div>
          <div className='font-[400]'>{t('label.contact_for_advertising')}</div>
        </div>
        {/* rules */}
        <div className='font-bold gap-2 w-[25%] flex flex-col'>
          {t('label.terms_and_conditions')}
          <div className='font-[400]'>{t('label.web_usage')}</div>
          <div className='font-[400]'>{t('label.term_of_use')}</div>
          <div className='font-[400]'>{t('label.payment_policy')}</div>
          <div className='font-[400]'>{t('label.privacy_policy')}</div>
          <div className='font-[400]'>{t('label.FAQ')}</div>
        </div>
        {/* contact */}
        <div className='font-bold gap-2 w-[25%] flex flex-col'>
          Follow us
          <div className='font-[400]'></div>
        </div>
        {/* customer service */}
        <div className='font-bold gap-2 w-[25%] flex flex-col'>
          {t('label.customer_service')}
          <div className='font-[400]'>{t('label.hotline')}: 1900 6017</div>
          <div className='font-[400]'>
            {t('label.working_hour')}: 8:00 - 22:00 (Monday to Sunday, including Public Holidays)
          </div>
          <div className='font-[400]'>{t('label.email')}: hoidap@cgv.vn</div>
        </div>
      </div>
      <hr className='border-t-gray-500 my-4' />
      <div className='flex flex-row gap-5 justify-center items-center'>
        <img src={logo} alt='logo' className='w-[100px] h-[100px] object-contain mx-4 my-4' />
        <p>
          {t('label.company_name')}
          <br />
          {t('label.registration_certificate')}: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5
          ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
          <br />
          {t('label.address')}: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.
          <br />
          {t('label.hotline')}: 1900 6017
          <br />
          COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .
        </p>
      </div>
    </div>
  )
}
export default Footer
