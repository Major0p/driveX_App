import React from 'react'
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <div>
            {/* navbar */}
            <h1>header</h1>
            <div>
                {/* sidebar */}
              <Outlet/>  
            </div>
        </div>
    </>
  )
}
