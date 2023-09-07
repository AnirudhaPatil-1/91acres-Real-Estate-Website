import React, {useState, useContext} from 'react';

import {RiCalendarLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import {Menu} from '@headlessui/react';

import {HouseContext} from './HouseContext';

const DateDropdown = () => {
  const {startDate, setStartDate}  = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const dates = [
    {
      value: 'Move-in Date (any)',
    },
    {
      value: '1',
    },
    {
      value: '2',
    },
    {
      value: '3',
    },
    {
      value: '4',
    },
    {
      value: '5',
    },
    {
      value: '6',
    },
    {
      value: '7',
    },
    {
      value: '8',
    },
    {
      value: '9',
    },
    {
      value: '10',
    },
    {
      value: '11',
    },
    {
      value: '12',
    },
    {
      value: '13',
    },
    {
      value: '14',
    },
    {
      value: '15',
    },
    {
      value: '16',
    },
    {
      value: '17',
    },
    {
      value: '18',
    },
    {
      value: '19',
    },
    {
      value: '20',
    },
    {
      value: '21',
    },
    {
      value: '22',
    },
    {
      value: '23',
    },
    {
      value: '24',
    },
    {
      value: '25',
    },
    {
      value: '26',
    },
    {
      value: '27',
    },
    {
      value: '28',
    },
    {
      value: '29',
    },
    {
      value: '30',
    },
    
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => {setIsOpen(!isOpen)}} className="dropdown-btn w-full text-left  hover:bg-violet-400 hover:rounded-lg hover:text-white ">
        <RiCalendarLine className=' dropdown-icon-primary hover:text-white' />
        <div >
          <div className='text-[15px] font-medium leading-tight'>{startDate}</div>
          <div className='text-[13px]'>Choose date</div>       
        </div>
        { isOpen? (
              <RiArrowUpSLine className='dropdown-icon-secondary hover:text-white'/>
            ):(
              <RiArrowDownSLine className="dropdown-icon-secondary hover:text-white" />
            )
          }
      </Menu.Button>
      <Menu.Items className='dropdown-menu h-[400px] overflow-scroll overflow-x-hidden'>
        {dates.map((date, index) => {
          return(
            <Menu.Item onClick={() => {setStartDate(date.value)}} className="cursor-pointer hover:text-violet-700 transition" as='li' key={index}>
              {date.value }
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
    // <div>CountryDropdown</div>
  )
}

export default DateDropdown;