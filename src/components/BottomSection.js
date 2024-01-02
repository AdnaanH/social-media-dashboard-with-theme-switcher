import React from 'react'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import instagramIcon from '../images/icon-instagram.svg'
import youtubeIcon from '../images/icon-youtube.svg'
import iconDown from '../images/icon-down.svg'
import iconUp from '../images/icon-up.svg'

function BottomSection() {
  return (
    <div className='flex-col px-4 sm:px-28 pt- mb-4'>
      <h2 className='font-bold text-2xl text-[#63687e] mb-3'>Overview - Today</h2>
        <div className='flex flex-wrap items-start justify-between w-full'>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Page Views</span>
                <img src={facebookIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>87</small>
                <p className='text-sm flex items-center gap-1 text-[#1db489] font-bold'><img src={iconUp} alt="" width={10}/> 3%</p>
              </div>
            </div>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Likes</span>
                <img src={facebookIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>52</small>
                <p className='text-sm flex items-center gap-1 text-[#dc414c] font-bold'><img src={iconDown} alt="" width={10}/> 2%</p>
              </div>
            </div>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Likes</span>
                <img src={instagramIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>5462</small>
                <p className='text-sm flex items-center gap-1 text-[#1db489] font-bold'><img src={iconUp} alt="" width={10}/> 2257%</p>
              </div>
            </div>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Profile Views</span>
                <img src={instagramIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>52k</small>
                <p className='text-sm flex items-center gap-1 text-[#1db489] font-bold'><img src={iconUp} alt="" width={10}/> 1375%</p>
              </div>
            </div>
        </div> 
        <div className='flex flex-wrap mt-0 sm:mt-4 items-start justify-between w-full'>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Retweets</span>
                <img src={twitterIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>117</small>
                <p className='text-sm flex items-center gap-1 text-[#1db489] font-bold'><img src={iconUp} alt="" width={10}/> 303%</p>
              </div>
            </div>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Likes</span>
                <img src={twitterIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>507</small>
                <p className='text-sm flex items-center gap-1 text-[#dc414c] font-bold'><img src={iconDown} alt="" width={10}/> 553%</p>
              </div>
            </div>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Likes</span>
                <img src={youtubeIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>107</small>
                <p className='text-sm flex items-center gap-1 text-[#1db489] font-bold'><img src={iconDown} alt="" width={10}/> 19%</p>
              </div>
            </div>
            <div className='w-full sm:w-64 mb-4 sm:mb-0 border-t-1 py-4  px-6 rounded-md bg-[#f0f2fa] flex-col'>
              <div className='flex justify-between mb-4 items-center'>
                <span className='text-[#63687e] text-base font-bold'>Total Views</span>
                <img src={youtubeIcon} alt="" />
              </div>
              <div className='flex justify-between items-end'>
                <small className='text-3xl text-black font-bold'>1407</small>
                <p className='text-sm flex items-center gap-1 text-[#1db489] font-bold'><img src={iconDown} alt="" width={10}/> 12%</p>
              </div>
            </div>
        </div>  
    </div> 
    
  )
}

export default BottomSection
