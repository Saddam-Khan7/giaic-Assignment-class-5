import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-3xl font-bold text-white hover:text-red-500 transition">Saddam</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-white hover:text-red-500">Home</Link>
      <Link href="#downloadcv" className="mr-5 text-white hover:text-red-500">About</Link>
      <Link href="#Contact" className="mr-5 text-white hover:text-red-500">Contact</Link>
      <Link href="#service" className="mr-5 text-white hover:text-red-500">Service</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-[var(--primary-color)] transition hover:text-white rounded text-base mt-4 md:mt-0">
      CV
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>
    
  )
}

export default Navbar
