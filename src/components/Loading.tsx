import React from 'react'
import Image from  '../assets/burger.svg'
const Loading = () => {
    return (
        <div className='w-full flex justify-center items-center h-screen'>
            <img src={Image} alt='Loading' className='h-52 animate-spin-slow ' loading="eager"/>
        </div>
    )
}

export default Loading