import React from 'react'
import { useState } from 'react';

function Contact() {
    
    
    const[name,setName] = useState('');
    const[company,setCompany] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');

    const alertData = ()=>{
        alert(name + ', '+ company + ', '+ email + ', '+ phone)
    }



  return (
    <div className='w-full bg-[#263252] py-[41px] px-[77px]' id='Contact'>
        <div className='flex flex-col justify-center items-center '>
            <div className='text-center mb-[31px]'>
                <h3 className='text-[30px] font-semibold'>
                    Ficou com dúvida?
                </h3>
                <h3 className='text-[30px] font-semibold'>
                    Nós entramos em contato com você
                </h3>
            </div>

        
                    <input 
                        placeholder='Como gostaria de ser chamado?' 
                        type='text'
                        className='inputField'
                        onChange={(e)=>{
                            setName(e.target.value)}}
                        value={name}
                    />
                    <input 
                        placeholder='Em qual empresa você trabalha?' 
                        type='text'
                        className='inputField'
                        onChange={(e)=>{
                            setCompany(e.target.value)}}
                        value={company}
                    />
                    <input 
                        placeholder='Digite aqui o seu email' 
                        type='email'
                        className='inputField'
                        onChange={(e)=>{
                            // prevents whitespace
                            if (e.target.value.indexOf(" ") > -1) {
                                setEmail(email.replace(/\s+/g, ''));
                                return;
                            }
                            setEmail(e.target.value)}}
                        value={email}
                    />
                    <input 
                        placeholder='Qual o seu telefone?' 
                        type='text'
                        className='inputField'
                        onChange={(e)=>{
                            // prevents whitespace
                            if (e.target.value.indexOf(" ") > -1) {
                                setEmail(email.replace(/\s+/g, ''));
                                return;
                            }
                            setPhone(e.target.value)}}
                        value={phone}
                    />


                    <button 
                         className='w-[183px] h-[39px] mt-[19px]
                         bg-[#0165DB] rounded-[5px]'
                        onClick={alertData}
                        >
                        ENVIAR
                    </button>

             
      


        </div>
      
    </div>
  )
}

export default Contact
