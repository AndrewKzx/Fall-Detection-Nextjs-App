// app/pages.js
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

export default function Home() {



  return (
    <div>
      {/* Logo + LogoWord + Tagline */}
      <div className='flex flex-row justify-center pt-32'>
        <img src="/assets/images/CareCamLogo.png" alt="Care Cam Logo" className='w-36'></img> 
        <div className='flex items-center'>
          <div className='items-center flex flex-col'>
            <img src="/assets/images/CareCamWord.png" alt="Care Cam Word" className='w-36'></img>
            <p className='font-bold text-careNeonGreen pt-1'>Your Extra Set of Eyes</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className='flex items-center flex-col pt-32'>
        <div className='flex flex-col items-center'>
            <p className='flex font-extrabold text-3xl italic text-careDarkGreen'>Safe and Secure</p>
            <p className='flex items-center text-careLightGreen font-bold pt-1'>Providing Safety with Seamless Surveillance</p>
        </div>
      </div>


      {/* Sign in and Create New Account*/}
      <div className='flex items-center flex-col pt-32 pl-10 pr-10'> 
        <Link href='/signin'>
          <button className='bg-careDarkGreen text-white p-3 rounded-lg drop-shadow-lg w-80'>Sign In</button>
        </Link>

        <Link href='/signup'>
          <div className='pt-4'>
            <button className='font-bold text-careDarkGreen'>Create a New Account</button>
          </div>
        </Link>

      </div>
    </div>
  );
}
