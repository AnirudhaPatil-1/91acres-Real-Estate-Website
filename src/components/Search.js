import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import DateDropdown from "./DateDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";

import {RiSearch2Line} from 'react-icons/ri';

import {HouseContext} from './HouseContext' 


const Search = () => {
    // const{houses} = useContext(HouseContext);
    const {handleClick} = useContext(HouseContext);
    return(
        <div className="px-[20px] py-6 max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-3 lg:gap-x-3 relative  lg:bg-white rounded-lg">
            <CountryDropdown/>
            <DateDropdown/>
            <PriceRangeDropdown/>
            <PropertyDropdown />
            <button 
            onClick={() => {handleClick()}}
            className="bg-violet-600 hover:bg-violet-700 transition w-full lg:max-w-[150px] h-16 rounded-lg flex justify-center items-center text-white text-xl ">
                <RiSearch2Line/>
            </button>
        </div>
    )
}

export default Search;