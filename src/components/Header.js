import React from "react";

import {Link} from "react-router-dom";

// import Logo from "../assets/img/logo.svg";

const Header = () => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center font-bold text-gray-800" >
                <div className="flex justify-between items-center gap-6">
                    <Link to="/">
                        {/* <img src={Logo} alt="logo"/> */}
                        <p className="text-violet-700 hover:text-violet-800 text-3xl font-bold transition">91acres</p>
                    </Link>
                    <Link className="px-4 py-3 bg-violet-300 text-white rounded-lg" to="">Rent</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="">Buy</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Sell</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Manage Property</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Resources</Link>
                </div>
                <div className="flex items-center gap-6 ">
                    <Link className="border-2 text-violet-800  px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition" to="">Log in</Link>
                    <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition " to="">Sign up</Link>
                </div>

            </div>
        </header>
    )
}

export default Header;