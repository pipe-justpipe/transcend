import React from 'react'
import Card from './Card'
import Heading from '../Components/Heading'

const Pricing = () => {
  return (
    <div className='bg-[#D0CCD7] mt-[150px] pt-[50px] pb-[250px]'>
        {/* <Heading speed={50}>
        Choose the <span style={{ color: '#491D8B' }}>plan</span> that’s right for you
      </Heading> */}
        <h1 className='font-[500] text-[40px] leading-[60px] mb-[70px] text-center'>Choose the <span className='text-[#491D8B]'>plan</span> that’s right for you</h1>
        <Card/>
    </div>
  )
}

export default Pricing