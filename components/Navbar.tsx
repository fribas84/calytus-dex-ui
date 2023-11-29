import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';



const Navbar = () => {
    const { isConnected } = useAccount();
    return (
        <div className='m-10 rounded-xl'>

            <div className="navbar  shadow-xl rounded-xl bg-primary text-primary-content">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-primary-content text-3xl rounded-xl hover:scale-105">baDEX</a>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-primary-content text-xl rounded-xl hover:scale-105">Faucet</a>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-primary-content text-xl rounded-xl hover:scale-105">Dex</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {isConnected && <>
                        <a className="flex-1 btn btn-ghost normal-case text-secondary-content text-l rounded-xl hover:scale-105">Actions:</a>    
                        <li> <a className="btn btn-ghost text-xl">Withdraw</a></li>
                        <li> <a className="btn btn-ghost text-xl">Deposit</a></li>
                        <li> <a className="btn btn-ghost text-xl mr-2">Create Order</a></li>
                        </>
                        }
                        <li><ConnectButton /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar