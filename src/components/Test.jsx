import React from 'react'

export default function Test() {
  return (
    <div>
         <div className="grid grid-cols-2 gap-2 mt-5 sm:mt-8 justify-center lg:justify-start">
              <div className="rounded-md shadow-md">
                <a
                  href="/product"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Services
                </a>
              </div>
              <div className="sm:ml-3 rounded-md shadow-md">
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  View Store
                </a>
              </div>
            </div>
           
    </div>
  )
}
