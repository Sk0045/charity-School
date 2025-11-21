import React from 'react'

const Idcontact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-6 mb-6 px-4">
      
      {/* Image */}
      <div className="flex justify-center">
        <img 
          src="/images/manager1.jpeg"  
          alt="Founder" 
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-96 text-center md:text-left">
        <h1 className="font-extrabold text-2xl md:text-3xl mb-4">
          “We are praying and hoping for partners. With your help, the conditions of our school would greatly improve.”
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold">Pastor Victor Samuel</h2>

        <p className="mb-4">Grace Charity High School Pakistan</p>

        <button className="bg-green-700 text-white hover:bg-green-600 w-52 h-12 rounded-3xl shadow">
          <a className="font-medium underline" href="#">
            Learn how you can help
          </a>
        </button>
      </div>

    </div>
  )
}

export default Idcontact
