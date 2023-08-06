import React from 'react';

import {BiBed, BiBath, BiArea} from 'react-icons/bi';
import {RiHeart3Line } from "react-icons/ri";

const House = ({house}) => {
    const {image, type, country, address, bedrooms, bathrooms, surface, price} = house;

    return (
        <div className='bg-white shadow-1 pb-5 rounded-lg  w-full max-w-[300px] mx-auto cursor-pointer hover:shadow-2xl transition text-gray-600'>
            <img className='w-full h-[150px] rounded-t-lg ' src={image} alt="house img"/>
            <div className='p-3'>
                <div className='flex justify-between items-center px-3'>
                    <div className='text-lg  text-violet-600 mb-4 font-bold pl-2' >${price} <span className='text-gray-500 font-light text-sm'>/month</span> </div>
                    <RiHeart3Line className='text-3xl hover:text-red-500'/>
                    
                </div>
                <div className='flex gap-x-2 ' >
                    <div className=" border-r-2 pr-2">{type} </div>

                    <div className='text-gray-900 font-bold' >{country}</div>
                </div>
                <div className=' text-xs max-w-[260]  '>{address}</div>
                <div className='flex justify-around my-1 p-1 border-t-2 ' >
                    <div className='flex items-center gap-1'>
                        <div className='text-[20px] text-violet-700' ><BiBed/> </div>
                        <div >{bedrooms}</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='text-[20px] text-violet-700' ><BiBath/> </div>
                        <div >{bathrooms}</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='text-[20px] text-violet-700' ><BiArea/> </div>
                        <div >{surface}</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default House;