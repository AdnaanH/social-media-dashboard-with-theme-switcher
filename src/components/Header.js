import React from 'react'

function Header() {

  //const [darkMode, setDarkMode] = useState(userPreferredMode === 'false');

  return (
    <div className='flex flex-wrap items-start px-4 sm:px-28 rounded-br-md rounded-bl-md pt-6 justify-between w-full min-h-48 bg-[#f5f7ff]'>
        <div className='flex-col w-full sm:w-6/12'>
            <h1 className='font-extrabold text-2xl sm:text-3xl'>Social Media Dashboard</h1>
            <h3 className='sm:text-base text-sm font-bold text-[#63687e]'>Total followers: 23,004</h3>
        </div>
        <hr className='w-full lg:hidden'/>
        <div className='flex justify-between sm:gap-4 w-full sm:w-6/12 sm:justify-end'>
            <strong className='text-[#63687e] text-base font-bold'>Dark mode</strong>
            <div className='flex bg-[#aeb3cb] gap-1 p-1 cursor-pointer rounded-full'>
              <div className='w-4 h-4 rounded-full bg-inherit'></div>
              <div className='w-4 h-4 rounded-full bg-[#f5f7ff]'></div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
