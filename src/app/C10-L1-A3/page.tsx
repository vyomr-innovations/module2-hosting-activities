import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen bg-[#F8FAFC] text-black flex justify-center items-center flex-col'>
      <h3 className=' text-3xl pb-[60px] font-bold'>Bubble Breathing</h3>
        <div className='grid grid-cols-12 place-items-center'>
            <div className="col-span-6">
                <Image src="/image/C10-L1-A3.jpg" className='rounded-lg shadow-lg' width={400} height={400} alt='image'/>
            </div>
            <div className="col-span-6 w-full ">
            <ul className='list-decimal text-2xl space-y-3 font-bold '>
                <li>Imagine you have a wand to blow bubbles.</li>
                <li>Take a deep breath in through your nose.</li>
                <li className='pr-[200px]'>Slowly breathe out through your mouth as if you are blowing a bubble through a wand.</li>
                <li>Repeat above steps 8 to 10 times.</li>
            </ul>


            </div>

        </div>
      
    </div>
  )
}

export default Page
