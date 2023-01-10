import React from 'react'
import Image from 'next/image'

function Showcase() {
  return (
    <div className='w-full h-[calc(100vh-120px)] relative md:w-[200%]'>

        <Image alt='logo' src='/../public/img/grafismo.png' 
            fill/>

        <div className='relative w-full flex justify-between content-center md:flex-col
        '>

            <div className='text-left w-[45%]  pl-[10vw] flex flex-col justify-center relative
             pb-[50px] md:pb-0 md:pl-[40px] md:pt-[40px]  md:w-1/2 '>
              
                <h2 className='text-7xl font-bold lg:text-5xl '>
                    Solução <br/> DynaPredict
                </h2>
               
                <div className='w-[150px] h-[10%] mt-[25px] md:mt-0 md:w-[150px] md:h-[50px] relative object-contain'>
                    <Image alt='logo' src='/../public/img/logo-dynapredict.png' 
                         fill objectFit='contain' />
                </div>
            </div>


            <div className='w-[53%] h-[calc(100vh-120px)] lg:w-[75%] md:w-[60%] md:h-[320px] md:mt-[-50px] text-center relative object-contain '>
                <Image alt='logo' src='/../public/img/desktop-and-mobile.png' 
                            fill objectFit='contain' />

            </div>

            
        </div>
    </div>
  )
}

export default Showcase
