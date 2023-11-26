// components/Nav
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "/app/globals.css"


const Nav = () => {

    return (
        <div className='flex flex-between items-center justify-center pt-4 pb-8'>
            <nav className='bg-gray-200 h-16'>
                <div className='flex flex-row'>
                    <div className='flex'>
                        <Image src='/assets/images/CareCamLogo.png' width={80} height={100} alt="logo pic"></Image>
                    </div>
                    <div className='flex items-center text-3xl font-extrabold'>
                        <p className='text-careDarkGreen'>Care</p> <p className='text-careLightGreen'>Cam</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav



