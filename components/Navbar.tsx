import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';



const Navbar = () => {
    return (
        <div className='m-10 rounded-xl'>

            <div className="navbar  shadow-xl rounded-xl bg-primary text-primary-content">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-primary-content text-xl rounded-xl hover:scale-105">baDEX</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><ConnectButton /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar