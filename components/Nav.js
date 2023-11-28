// components/Nav
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "/app/globals.css"
import Sidebar from "../components/menu"


const Nav = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="bg-gray-200 p-4 flex flex-row align-middle sm:align-middle
    ">
      <div className='flex justify-start  items-start w-1/4 sm:w-2/5'>
        <button onClick={toggleSidebar} className="p-2">
          {/* Replace with your menu icon */}
          <Image src="/assets/images/menu-icon.png" alt="Menu" width={30} height={30} />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <Image src="/assets/images/CareCamLogo.png" width={50} height={70} alt="CareCam Logo" />
        <h1 className="text-3xl font-extrabold">
          <span className="text-careDarkGreen">Care</span>
          <span className="text-careLightGreen">Cam</span>
        </h1>
      </div>

      {/* The sidebar can be a separate component that you toggle via a state in the parent component */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </nav>
  );
};

export default Nav;



