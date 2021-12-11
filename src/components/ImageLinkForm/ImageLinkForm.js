import React from 'react'

const ImageLinkForm = () => {
  return (
    <div>
      <p className='text-xl text-center p-6 text-gray-900'>
        {'This App detects faces one your pictures. Give it a try...'}
      </p>
      <div className='flex justify-center'>
        <div className='md:flex md:justify-center w-screen md:w-3/4 shadow-xl p-4 m-4 bg-gradient-to-br bg from-indigo-400 to-orange-400'>
          <div className='relative w-full md:w-4/6 m-4 md:mx-4'>
            <input type="text" id="file" placeholder='Choose a photo' className='peer w-full bg-transparent border-b-gray-900 border-b-2 placeholder-transparent focus:outline-none focus:border-violet-600'/>
            <label htmlFor="file" className='absolute left-0 -top-4 text-sm text-gray-800 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-800'>{'Choose a photo'}</label>
          </div>
          <button type="submit" className='w-full md:w-1/6 hover:bg-violet-700 rounded-full shadow-violet-800 bg-violet-600 text-white mx-4'>{'Detect'}</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm