import React from 'react'
import { BarLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
            <div className='w-[10vw] h-[10vw] rounded full'><BarLoader color='white' /></div>
        </div>
    )
}

export default Loader