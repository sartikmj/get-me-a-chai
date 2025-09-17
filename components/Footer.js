import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-black text-white flex items-center justify-center px-4 h-16'>
      <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved! @SartikSharma</p>    </div>
  )
}

export default Footer