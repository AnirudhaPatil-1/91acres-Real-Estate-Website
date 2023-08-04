import React from "react";

import Search from "./Search";

const Banner = () => {
    return (
        <section className="h-full max-h-[640px] mb-8 xl:mb-24">
            <div className="flex justify-around items-center ">
                <h1 className="text-3xl font-bold text-gray-800">Search properties to rent</h1>
                <div className="border-2 px-4 py-2 rounded-lg text-gray-500 font-medium  hover:bg-violet-300 hover:text-white hover:cursor-text">Search with Search Bar</div>
            </div>
            <Search/>
        </section>
        
        
    )
}

export default Banner;