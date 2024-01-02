import React from 'react'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import instagramIcon from '../images/icon-instagram.svg'
import youtubeIcon from '../images/icon-youtube.svg'
import iconDown from '../images/icon-down.svg'
import iconUp from '../images/icon-up.svg'

function TopSection() {
  return (
    <div className='flex flex-wrap items-start px-4 sm:px-28 pt-6 mb-2 justify-between w-full'>
      <div className='w-full sm:w-64 border-t-1 mb-6 sm:mb-0 rounded-md bg-[#f0f2fa] flex-col'>
        <div className='bg-[#198ff5] w-full h-1'></div>
        <div className='flex mt-6 justify-center mb-4 items-center gap-2'>
          <img src={facebookIcon} alt="" />
          <span className='text-[#63687e] text-base font-bold'>@nathanf</span>
        </div>
        <h1 className='text-5xl mb-2 text-center font-bold'>1987</h1>
        <p className='uppercase mb-4 text-[#1e202a] text-center'>followers</p>
        <div className='flex mb-6 justify-center gap-1 items-center'>
          <img src={iconUp} alt="" width={10}/>
          <small className='text-sm text-[#1db489] font-bold'>12 Today</small>
        </div>
      </div>
      <div className='w-full sm:w-64 border-t-1 mb-6 sm:mb-0 rounded-md bg-[#f0f2fa] flex-col'>
        <div className='bg-[#1ca0f2] w-full h-1'></div>
        <div className='flex mt-6 justify-center mb-4 items-center gap-2'>
          <img src={twitterIcon} alt="" />
          <span className='text-[#63687e] text-base font-bold'>@nathanf</span>
        </div>
        <h1 className='text-5xl mb-2 text-center font-bold'>1044</h1>
        <p className='uppercase mb-4 text-[#1e202a] text-center'>followers</p>
        <div className='flex mb-6 justify-center gap-1 items-center'>
          <img src={iconUp} alt="" width={10}/>
          <small className='text-sm text-[#1db489] font-bold'>99 Today</small>
        </div>
      </div>
      <div className='w-full sm:w-64 border-t-1 mb-6 sm:mb-0 rounded-md bg-[#f0f2fa] flex-col'>
        <div className='bg-[#df4996] w-full h-1'></div>
        <div className='flex mt-6 justify-center mb-4 items-center gap-2'>
        <img src={instagramIcon} alt="" />
          <span className='text-[#63687e] text-base font-bold'>@nathanf</span>
        </div>
        <h1 className='text-5xl mb-2 text-center font-bold'>11k</h1>
        <p className='uppercase mb-4 text[#1e202a] text-center'>followers</p>
        <div className='flex mb-6 justify-center gap-1 items-center'>
          <img src={iconUp} alt="" width={10}/>
          <small className='text-sm text-[#1db489] font-bold'>1099 Today</small>
        </div>
      </div>
      <div className='w-full sm:w-64 border-t-1  mb-6 sm:mb-0 rounded-md bg-[#f0f2fa] flex-col'>
        <div className='bg-[#198ff5] w-full h-1'></div>
        <div className='flex mt-6 justify-center mb-4 items-center gap-2'>
          <img src={youtubeIcon} alt="" />
          <span className='text-[#63687e] text-base font-bold'>Nathan F.</span>
        </div>
        <h1 className='text-5xl mb-2 text-center font-bold'>8239</h1>
        <p className='uppercase mb-4 text-[#1e202a] text-center'>subscribers</p>
        <div className='flex mb-6 justify-center gap-1 items-center'>
          <img src={iconDown} alt="" width={10}/>
          <small className='text-sm text-[#c4032a] font-bold'>144 Today</small>
        </div>
      </div>
    </div>
  )
}

export default TopSection


