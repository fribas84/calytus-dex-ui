import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Link from 'next/link';



const Navbar = () => {
    const { isConnected } = useAccount();
    return (
        <div className='m-10 rounded-xl'>

            <div className="navbar shadow-xl rounded-xl bg-primary text-primary-content">
                <div className="flex-1">

                    <Link
                        className="btn btn-ghost normal-case text-primary-content text-3xl rounded-xl hover:scale-105"
                        href='/'>baDEX</Link>
                </div>
            
            <div className="flex-1">

                <Link
                    className="btn btn-ghost normal-case text-primary-content text-xl rounded-xl hover:scale-105"
                    href='/faucet'>Faucet
                </Link>
            </div>
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-primary-content text-xl rounded-xl hover:scale-105"
                    href='/dex'>
                    Dex
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li><ConnectButton /></li>
                </ul>
            </div>
            </div>
        </div >

    )
}

export default Navbar