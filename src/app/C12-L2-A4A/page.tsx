import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen bg-[#F8FAFC] flex justify-start items-center flex-col'>
        <h4 className='text-black text-3xl h-[100px] pt-10 '>Presentation Skills</h4>
        <div className='w-[700px] rounded-lg shadow-black shadow-md '>
            <video src="/videos/L2C12peanuts-presentation.mp4" controls autoPlay className='w-full h-full'></video>
        </div>
      
    </div>
  )
}

export default Page
