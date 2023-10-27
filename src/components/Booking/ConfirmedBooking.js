import React from 'react'
import Container from '../Container'
import FeaturedProducts from '../featuredProducts/featuredProducts'
function ConfirmedBooking() {
  return (
    <>
      <div className='_confirm py-16 bg-[#EDEFEE]  mt-2'>
        <Container>
            <h1 className='text-5xl text-center  font-medium'>Booking has been <span className='text-[#F4CE14]'>Confirmed!</span></h1>
        </Container>
        
      </div>
      <FeaturedProducts />
    </>
    
  )
}

export default ConfirmedBooking