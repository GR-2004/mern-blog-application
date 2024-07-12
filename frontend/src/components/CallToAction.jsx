import { Button } from 'flowbite-react'
import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-[#87CEEB]'>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className='text-3xl font-bold text-white'>Want to analyze your growth</h2>
        <p className='text-gray-200 my-2 font-semibold'>Checkout these resources with </p>
        <Button gradientDuoTone={"purpleToPink"} className='rounded-tl-xl rounded-bl-none'>
            <a href="https://ai-interview-one-pied.vercel.app/" target='_blank' rel='noopener noreferrer'>
                AI Interview Mocker
            </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="/ai-interview-page.png" />
      </div>
    </div>
  )
}

export default CallToAction
