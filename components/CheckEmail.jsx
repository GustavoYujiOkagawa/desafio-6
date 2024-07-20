'use client'
import React, { useState } from 'react'
import Validation from './Validation.js';

const CheckEmail = ({ SubmitButtonProp }) => {

    const [ data, setData ] = useState();  

    const [value, setValue] = useState({
            email: "",
        })
    const [error, setErrors] = useState({});

    const handleButtonClick  = (e) => {
        e.preventDefault();
        const errors = Validation(value);
        setErrors(errors);
        setData(true)
        if(Object.keys(error).length === 0 && data){
            SubmitButtonProp(true);
        }
        
    }

    const handleOnChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value });
    }
    

  return (
    <div>
        <form className='flex flex-col mt-7'>
            <div className='flex justify-between'>
            <label className='mb-2 text-sm font-bold text-[#262533]'>Email address</label>
            {error.email && <p className={`${error.email ? 'text-[#BE7F7A]' : 'border-[#C9C9C9]'}  text-sm font-bold`}>{error.email}</p>}
            </div>
            <input 
            value={value.email}
            onChange={handleOnChange}
            type="text" 
            placeholder='email@company.com' 
            className={` border-[#C9C9C9] border-2 ${error.email ? 'border-red-500' : 'border-[#232742]'} rounded-lg h-12 mb-3 p-4 `}
            name='email'
            />
        <button className='bg-[#232742] rounded-lg h-12 w-full mt-4' onClick={handleButtonClick}>
            <span className='text-white font-semibold text-sm'>Subcribe to monthly newslatter</span>
        </button>
        </form>
    </div>
  )
}

export default CheckEmail