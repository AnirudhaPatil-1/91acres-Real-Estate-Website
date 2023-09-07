import React, {useState, useContext} from 'react';

import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import {Menu} from '@headlessui/react';

import {HouseContext} from './HouseContext';

const PriceRangeDropdown = () => {
  const {price, setPrice}  = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '0 - 2000',
    },
    {
      value: '2000 - 4000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={() => {setIsOpen(!isOpen)}} className="dropdown-btn w-full text-left  hover:bg-violet-400 hover:rounded-lg hover:text-white">
        <RiWallet3Line className=' dropdown-icon-primary hover:text-white' />
        <div >
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose price</div>       
        </div>
        { isOpen? (
              <RiArrowUpSLine className='dropdown-icon-secondary hover:text-white'/>
            ):(
              <RiArrowDownSLine className="dropdown-icon-secondary hover:text-white" />
            )
          }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return(
            <Menu.Item onClick={() => {setPrice(price.value)}} className="cursor-pointer hover:text-violet-700 transition" as='li' key={index}>
               {price.value }
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
    // <div>CountryDropdown</div>
  )
}

export default PriceRangeDropdown;