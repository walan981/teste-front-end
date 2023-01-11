import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';



function Products() {

const [data, setData] = useState([]);
const [updateList, setUpdateList] = useState(false);
const[name, setName] = useState([]);
const[fab,setFab] = useState([]);
const[perecivel, setPerecivel] = useState([]);
const[validade,setValidade] = useState([]);
const[price, setPrice] = useState([]);
const formRef = useRef();

// json-server -p 4000 db.json
const url = 'http://localhost:4000/';

async function loadData(){
    await axios.get(url+'produtos').then(res =>
        setData(res.data))
}

const inputData = async(e)=>{
    e.preventDefault();

    let id = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }

      if(perecivel=='1'){
        var data = {
            "id":id,
            "nome": name,
            "fabricacao": fab,
            "perecivel": true,
            "validade": validade,
            "preco": price,
        }
      }else{
        var data = {
            "id":id,
            "nome": name,
            "fabricacao": fab,
            "perecivel": false,
            "preco": price,
        }
      }


    await axios.post(url+'produtos', data);
    setUpdateList(!updateList);

    setPrice('');
    setName('');
    setFab('');
    setValidade('');
    setPerecivel('0')
    
}


const deleteItem = async(id)=>{
    await axios.delete(url+`produtos/${id}`);
    setUpdateList(!updateList);
}

 useEffect(()=>{
    loadData();
 },[updateList])

 const handleChange = (e) => {
    setPerecivel(e.target.value);
  };


  return (
    <div className='bg-slate-800 flex flex-col p-7'>

    <div>
        {data.map((data)=>{
            return(
                <div key={data.id} className='bg-purple-500 p-2 flex items-center justify-between rounded-lg mb-2'>
                    <h2 className='font-bold'>{data.nome} </h2>
                    <h2 className='font-bold'>R$ {data.preco} </h2>
                    <div className='bg-red-400 py-1 px-2 rounded-md'>
                        <button onClick={()=>deleteItem(data.id)}>Delete</button>
                    </div>
                </div>
            )
        })}
    </div>

    <div className='flex flex-wrap mt-4'>
    
        <input 
            id='input-data'
            placeholder='Nome' 
            type='text'
            className='inputField'
            onChange={(e)=>{
                setName(e.target.value)}}
                value={name}
        />

        <div className='relative'>
            <label className='absolute top-[-8px] px-1 left-[20px] bg-green-400'>
                    fabricação
            </label>
        <input 
            placeholder='Fabricação' 
            type='date'
            className='inputField'
            onChange={(e)=>{
                setFab(e.target.value)}}
                value={fab}
        />
        </div>
      
        <div className='pt-3 flex items-center'>
            <select className='inputField ' value={perecivel} onChange={handleChange}>
                <option value='0'>Produto perecível</option>
                <option value='1'>Sim</option>
                <option value='2'>Não</option>
            </select>
        

        <div>
        { 
        
        perecivel=='1'?
            <div className='relative'> 
                <label className='absolute top-[-8px] px-1 left-[20px] bg-red-500'>
                    validade
                </label>
                <input 
                    id='input-data'
                    placeholder='Data de validade' 
                    type='date'
                    className='inputField w-[100px] '
                    onChange={(e)=>{
                        setValidade(e.target.value)}}
                    value={validade}
                />
            </div>   

        :

            <div></div>

        }     
        </div>   
        
       
        <input 
            id='input-data'
            placeholder='Preço (R$)' 
            type='text'
            className='inputField'
            onChange={(e)=>{
                setPrice(e.target.value)}}
            value={price}
        />
        </div>

        <div className='w-full'>
            <button 
                className='w-[183px] h-[39px] mt-[19px]
                bg-[#0165DB] rounded-[5px]'
                onClick={inputData}
                >
                    ENVIAR
            </button>
        </div>
 
    </div>

    </div>
  )
}

export default Products
