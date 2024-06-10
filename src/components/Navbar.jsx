import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
    return (
        <header className='flex items-center justify-between w-full px-5 py-4 sm:px-10'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="Apple" width={13} height={17} />
                <div className='flex justify-center flex-1 max-sm:hidden '>
                    {navLists.map((nav) => (
                        <div key={nav} className='px-5 text-xs tracking-normal transition-all cursor-pointer font-sanfransiscoRegular text-gray hover:text-white'>{nav}</div>
                    ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="search" width={14} height={14} />
                    <img src={bagImg} alt="bag" width={14} height={14} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar