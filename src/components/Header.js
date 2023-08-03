import React from "react";

import {Link} from "react-router-dom";

// import Logo from "../assets/img/logo.svg";

const Header = () => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center" >
                <div className="flex justify-between items-center gap-6">
                    <Link to="/">
                        {/* <img src={Logo} alt="logo"/> */}
                        <p className="text-violet-700 hover:text-violet-800 text-3xl font-bold transition">RealState</p>
                    </Link>
                    <Link className="px-4 py-3 bg-violet-300 rounded-lg" to="">Rent</Link>
                    <Link to="">Buy</Link>
                    <Link to="">Sell</Link>
                    <Link to="">Manage Property</Link>
                    <Link to="">Resources</Link>
                </div>
                <div className="flex items-center gap-6 ">
                    <Link className="border-2 text-violet-800  px-4 py-3 rounded-lg hover:bg-violet-800 hover:text-white transition" to="">Log in</Link>
                    <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition " to="">Sign up</Link>
                </div>

            </div>
        </header>
    )
}

export default Header;