import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

function Products() {
  return (
    <div className='w-full bg-[#F4F7FC] px-[7.5vw] flex flex-col justify-evenly md:px-[30px]' id='Products'>
        <div className='text-center text-[#37383D]'>
            <h2 className=' text-[#37383D] text-[40px] mt-[95px] md:text-[30px]'>
                Sensores para Manutenção Preditiva
            </h2>

            <h3 className=' text-[#37383D] text-[24px] mt-[15px] md:text-[18px]'>
                Opções de sensores sem fio, ou DynaLoggers com sensores de vibração triaxial e 
                temperatura embarcados, que comunicam por Bluetooth com o App mobile ou Gateway, 
                registrando os dados monitorados em sua memória interna. 
                Por conexão internet esses dados são centralizados na Plataforma DynaPredict Web 
                para análise, prognóstico e tomada de decisão.
            </h3>
        </div>
        <Link href='https://dynamox.net/dynapredict'>
            <div className='text-center w-full flex justify-center items-center h-[39px] mt-[15px] mb-[20px]'>
                <h3 className='bg-[#263252] w-[183px] text-[20px] rounded-[5px]'>
                    VER MAIS
                </h3>
            </div>
        </Link>

        <div className='w-full flex justify-around mt-[15px] mb-[40px] md:flex-col md:items-center'>
            <div className='w-[30%] md:w-[60%] md:mb-[15px] flex flex-col'>
                <div className='w-full h-[200px] relative object-contain'>
                    <Image alt='logo' src='/../public/img/sensor-tca.png' 
                                fill objectFit='contain'/>
                </div>
                
                <div className=' text-center'>
                    <h3 className='text-[#5D7A8C] text-[40px]'>TcA+</h3>
                </div>
                
            </div>

            <div className='w-[30%] md:w-[60%] md:mb-[15px] flex flex-col'>
                <div className='w-full h-[200px] relative object-contain'>
                    <Image alt='logo' src='/../public/img/sensor-af.png' 
                                fill objectFit='contain'/>
                </div>
                
                <div className=' text-center'>
                    <h3 className='text-[#5D7A8C] text-[40px]'>AS</h3>
                </div>
                
            </div>

            <div className='w-[30%] md:w-[60%] flex flex-col'>
                <div className='w-full h-[200px] relative object-contain'>
                    <Image alt='logo' src='/../public/img/sensor-hf.png' 
                                fill objectFit='contain'/>
                </div>
                
                <div className=' text-center'>
                    <h3 className='text-[#5D7A8C] text-[40px]'>HF</h3>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Products
