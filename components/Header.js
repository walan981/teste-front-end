import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className='relative top-0 w-full flex justify-between bg-[#263252] h-[120px] md:h-[100px]'>
      <Link href='https://dynamox.net/'>
        <div className='relative w-[172px] h-[68px] ml-[10vw] md:ml-[20px] mt-[30px]'>
            <Image alt='logo' src='/../public/img/logo-dynamox.png' 
            fill objectFit='contain'/>
        </div>
      </Link>

        <div className='text-white text-[20px] md:text-[14px]  pb-[29px] md:pb-[10px]  flex items-end mr-[43px] md:mr-[20px] md:ml-[10px]'>
            <a href='https://dynamox.net/dynapredict' className='mr-[37px] md:mr-[15px]'>DynaPredict</a>
            <a href='#Products' className='mr-[37px] md:mr-[15px]'>Sensores</a>
            <a href='#Contact'>Contato</a>
        </div>
    </div>
  )
}

export default Header
