import React from 'react'
import Image from 'next/image'

const home = () => {
  return (
    <div>home
      <div className='flex flex-wrap'>
          <Image src='/a4.jpg' alt='about image' width={200} height={200} >


        </Image>

      </div>
    </div>
  )
}

export default home