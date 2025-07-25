import React from 'react'
import {Link} from 'react-router-dom'

export default function AccountAccess() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 px-4'>
        <div className='max-w-md w-full bg-white p-8 shadow-lg rounded-lg'>
            <h2 className="drivex text-2xl text-center font-bold mb-4 cursor-default">DriveX</h2>
            <div className="flex justify-around mt-10">
            <Link to={'/signup'} className="px-8 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Sign Up</Link>
            <Link to={'/signin'} className="px-8 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Sign In</Link>
            </div>
        </div>
    </div>
  )
}
