"use client"
import React from 'react'
const Page = () => {
  return (
  <>
    <div className="relative w-full h-96 sm:h-[400px] md:h-[500px]">
        <div
          className="absolute inset-0  bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />
          <div className="relative bg-green-500 bg-opacity-70 h-full max-w-10xl text-white mx-auto py-10 sm:py-16 px-4 sm:px-6  text- space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            
          </h1>
          
        </div>
      </div>
      </>
  )
}

export default Page