import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className=' bg-[#000000] h-96'>
        <div>
            <h1>MEDSCAN AFRICA</h1>
            <img src="" alt="" />
        </div>

         <div>
            <h1></h1>
            <Link>About us</Link>
            <Link>Contact Us</Link>
            <Link>Report an Issue</Link>
        </div>
    </div>
  )
}
