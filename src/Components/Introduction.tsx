import React from 'react'
import '../index.css'
function Introduction() {
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='h-[120px] border-r-[1px] mt-[-20px]' />
            <div className='w-[5px] h-[5px] bg-green-600 rounded-full'></div>
            <h2 className='mt-5 text-black font-medium text-[13px] tracking-widest text-center'>HELLO MY NAME IS</h2>
            <h2 className='text-[70px] font-bold text-black tracking-widest mt-5  text-center'>SIDDIQUAH <br></br> ANJUM</h2>
            <div className='h-[190px] w-[190px] mt-7 bg-white rounded-full overflow-hidden thick-border border-gray-200'>
                <img src='/girl.png' className='w-full h-full object-cover rounded-full' />
            </div>
        </div>
    )
}

export default Introduction