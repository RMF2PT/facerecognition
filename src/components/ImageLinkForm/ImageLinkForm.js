import React from 'react'

const ImageLinkForm = () => {
  return (
    <div className='pt-10'>
      <p className='w-screen text-2xl text-center p-6 text-gray-100'>
        {'This App detects faces on your pictures. Give it a try...'}
      </p>
      <div className="flex justify-center">
        <div className='flex flex-wrap justify-center w-full md:w-1/2 py-3 gap-4 mx-4 md:m-0 bg-black rounded-2xl'>
          <div className='relative w-3/4 pt-4'>
            <input type="text" id="file" placeholder='Choose a photo' className='peer w-full bg-transparent border-b-gray-100 border-b-2 placeholder-transparent focus:outline-none focus:border-violet-600 text-gray-100 text-2xl'/>
            <label htmlFor="file" className='absolute left-0 -top-2 text-sm text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-300'>{'Choose a photo'}</label>
          </div>
          <button type="submit" className='relative p-3 mx-3 my-3 md:m-1 hover:bg-violet-700 rounded-2xl bg-violet-600 text-gray-100 text-2xl'>{'Detect'}</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm