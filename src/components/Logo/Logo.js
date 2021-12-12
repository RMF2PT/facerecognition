import React from 'react'
import Tilt from 'react-parallax-tilt';
import face from './face.png'

const Logo = () => {
  return (
    <div className='relative'>
      <Tilt 
        className='absolute top-0 bg-gradient-to-br bg from-indigo-400 to-orange-400 border-gray-900 border-2 m-4 p-2 h-24 w-24' 
        gyroscope={true} 
        tiltMaxAngleX={40} 
        tiltMaxAngleY={40}
      >
        <img src={face} alt={'logo'} className='p-3 -rotate-6'/>
      </Tilt>
    </div>
  )
}

export default Logo