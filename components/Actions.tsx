import React from 'react'
const Actions = () => {
    return (
        <div className='m-10 rounded-xl'>
            <div className="navbar  shadow-xl rounded-xl bg-secondary text-primary-content">
                <div className="fone">
                    <ul className="menu menu-horizontal">
                        <li> <a className="btn btn-ghost text-xl">Withdraw</a></li>
                        <li> <a className="btn btn-ghost text-xl">Deposit</a></li>
                        <li> <a className="btn btn-ghost text-xl">Create Order</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Actions