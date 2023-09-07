import React, {useState, useContext} from 'react';

import {RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import {Menu} from '@headlessui/react';

import {HouseContext} from './HouseContext';

const PropertyDropdown = () => {
  const {property, setProperty, properties}  = useContext(HouseContext);
   
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => {setIsOpen(!isOpen)}} className="dropdown-btn w-full text-left  hover:bg-violet-400 hover:rounded-lg hover:text-white">
        <RiHome5Line className=' dropdown-icon-primary hover:text-white' />
        <div >
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select property type</div>          
        </div>
          { isOpen? (
              <RiArrowUpSLine className='dropdown-icon-secondary hover:text-white'/>
            ):(
              <RiArrowDownSLine className="dropdown-icon-secondary hover:text-white" />
            )
          }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return(
            <Menu.Item onClick={() => {setProperty(property)}} className="cursor-pointer hover:text-violet-700 transition" as='li' key={index}>
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
    // <div>PropertyDropdown</div>
  )
}

export default PropertyDropdown;