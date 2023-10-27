import React from 'react'
import Button from '../Button/button'
import ownerImg from '../../assets/owners.png'
import Container from '../Container'
function Chicago() {
  return (
    <div className="py-16 w-full">
            <Container>
                <div className="relative flex flex-col px-4 md:px-0 md:flex-row items-center">
                    {/* Banner Left Side */}
                    <div className="banner-left w-full md:w-1/2">
                        <h1 className="text-4xl font-medium text-[#F4CE14] md:text-7xl">Little Lemon</h1>
                        <h2 className="text-2xl md:text-4xl font-normal">Chicago</h2>
                        <p className="text-[#333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                        <Button link="/booking">Reserve a Table</Button>
                        
                    </div>

                    {/* Banner Right Side */}
                    <div className={`banner-right w-full md:w-1/2 text-right mt-6 md:mt-0`}>
                        <img src={ownerImg} className={`inline-block`} alt="Little Lemon" />
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default Chicago