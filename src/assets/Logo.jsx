import React from 'react'

const Logo = () => {
  return (
    <div className='flex pb-2 justify-center items-center border-b border-gray-500 w-screen md: text-xs'>
      <img 
        src="https://images.seeklogo.com/logo-png/44/1/github-colored-logo-png_seeklogo-443793.png" 
        alt="" 
        className="w-24 rounded-full"
      />
      <h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-5xl  "> Codefolio </h1>
      <h1 className='font-extrabold lg:animate-bounce md:align-text-bottom'> "explore the person behind the GitHub" </h1>
    </div>
  )
}

export default Logo