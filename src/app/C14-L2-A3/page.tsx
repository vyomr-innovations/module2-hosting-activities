import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen p-5 bg-[#F8FAFC] flex flex-col justify-center items-center'>
        <h4 className='text-black text-3xl py-8'>Six Word Story</h4>
        <div className='shadow-black shadow'>
            
            <Image src="/image/C14-L2-A3.jpg" width={900} height={200} alt='image'/>
        </div>
      
    </div>
  )
}

export default Page
