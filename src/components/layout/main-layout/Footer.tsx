import React from 'react';
import { logo } from '../../../assets';
import { useTranslation } from 'react-i18next';
import { FB_ICON, INS_ICON, LINKEDIN_ICON } from '../../../shared/themes/types';
import './styles.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='max-w-6xl m-auto py-4 text-[13px]'>
      <div className='flex flex-row justify-between max-md:flex-col'>
        <div className=' flex flex-row justify-between max-md:flex-col items-center'>
          <img
            src={logo}
            alt='app is coming soon'
            className='w-[200px] h-[400px] max-md:h-[260px] object-contain mx-[56px]'
          />
          <div className='flex flex-col'>
            <img src={logo} alt='logo' className='w-[360px] h-[120px] object-contain mb-8  max-md:w-full' />
            <div className='flex flex-row max-md:justify-center gap-8 mb-8'>
              {[FB_ICON, LINKEDIN_ICON, INS_ICON].map((e) => (
                <img src={e} alt='icon' className='contact-icon' key={e}/>
              ))}
            </div>
          </div>
        </div>
        <div className='font-bold gap-8 w-[25%] flex flex-col max-md:text-center max-md:w-full'>
          <div className='text-lg'> {t('label.general_information')}</div>
          <div className='font-[400]'>{t('label.information')}</div>
          <div className='font-[400]'>{t('label.online_utilities')}</div>
          <div className='font-[400]'>{t('label.gift_card')}</div>
          <div className='font-[400]'>{t('label.recruitment')}</div>
          <div className='font-[400]'>{t('label.contact_for_advertising')}</div>
        </div>
      </div>
      <hr className='border-t-gray-500 my-4 mx-8' />
      <div className='flex flex-row gap-2 items-center justify-center'>
        <p>
          {/* {t('label.company_name')}
          <br />
          {t('label.registration_certificate')}: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5
          ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
          <br />
          {t('label.address')}: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.
          <br />
          {t('label.hotline')}: 1900 6017
          <br /> */}
          COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .
        </p>
      </div>
    </div>
  );
};
export default Footer;
