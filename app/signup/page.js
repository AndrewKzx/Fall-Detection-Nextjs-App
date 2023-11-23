"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Home() {
    return (
        <div className='mx-10'>
            {/* Logo + LogoWord */}
            <div className='flex flex-row justify-center pt-10'>
                <img src="/assets/images/CareCamLogo.png" alt="Care Cam Logo" className='w-36'></img>
                <div className='flex items-center'>
                    <div className='items-center flex flex-col'>
                        <img src="/assets/images/CareCamWord.png" alt="Care Cam Word" className='w-36'></img>
                    </div>
                </div>
            </div>
;
            {/* Sign Up Text */}
            <div className='justify-start pt-10'>
                <p className='font-extrabold text-careDarkGreen text-2xl'> Sign Up</p>
                <p className='pt-3 font-bold text-careNeonGreen text-sm'>Sign up with username, email<br></br> and password</p>
            </div>

            {/* Sign Up Input Box*/}
            <div>
                <div className='flex flex-col pt-10'>
                    <div className='space-y-8'>
                        <input className='bg-gray-300 rounded-lg p-4 w-full' placeholder='Username' ></input>
                        <input className='bg-gray-300 rounded-lg p-4 w-full' placeholder='Email' ></input>
                        <input className='bg-gray-300 rounded-lg p-4 w-full' placeholder='Password' ></input>
                        <input className='bg-gray-300 rounded-lg p-6 w-full' placeholder='Address' ></input>
                    </div>
                </div>
            </div>

            {/* Create Account*/}
            <div>
                <div className='flex flex-col pt-16'>
                    <div className='pb-4'>
                        <Link href='/signin'>
                            <button className='bg-careDarkGreen rounded-lg p-3 w-full text-white'>Create Account</button>
                        </Link>
                    </div>
        
                </div>
            </div>


        </div>
    );
}
