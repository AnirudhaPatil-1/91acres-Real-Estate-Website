import React from "react";

import Search from "./Search";

const Banner = () => {
    return (
        <div>
            <div className="flex justify-around items-center ">
                <h1 className="text-3xl font-bold text-gray-800">Search properties to rent</h1>
                <div className="border-2 px-4 py-2 rounded-lg text-gray-500 font-medium hover:cursor-pointer">Search with Search Bar</div>
            </div>
            <Search/>
        </div>
        
    )
}

export default Banner;