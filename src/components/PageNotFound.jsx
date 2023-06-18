import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className=' text-center relative pt-12 h-full'>
        <h3 className=' text-2xl font-semibold pb-6'>Sorry, this page isn't available.</h3>
        <p className=' text-base'>The link you followed may be broken, or the page may have been removed. <Link to={"/"} className=' text-[#000052]'>Go back to Instagram</Link>.</p>
        <Footer />
    </div>
  )
}

export default PageNotFound