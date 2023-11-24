// app/signin/page.js
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { LoginForm } from "../../component/GoogleLoginForm";


export default function Home() {



    return (
        <div className='m-10'>
            {/* Logo + LogoWord */}
            <div className='flex flex-row justify-center pt-10'>
                <img src="/assets/images/CareCamLogo.png" alt="Care Cam Logo" className='w-36'></img>
                <div className='flex items-center'>
                    <div className='items-center flex flex-col'>
                        <img src="/assets/images/CareCamWord.png" alt="Care Cam Word" className='w-36'></img>
                    </div>
                </div>
            </div>

            {/* Sign In to Account Text */}
            <div className='justify-start pt-16'>
                <p className='font-extrabold text-careDarkGreen text-2xl'> Sign In <br></br> To Account</p>
                <p className='pt-3 font-bold text-careNeonGreen text-sm'>Sign in with username or email <br></br> and password to use your account</p>
            </div>

            {/* Sign In to Account Input Box*/}
            <div>
                <div className='flex flex-col pt-16'>
                    <div className='space-y-8'>
                        <input className='bg-gray-300 rounded-lg p-4 w-full' placeholder='Username or Email' ></input>
                        <input className='bg-gray-300 rounded-lg p-4 w-full' placeholder='Password' ></input>
                    </div>
                </div>
            </div>

            {/* Sign in and Create New Account*/}
            <div className='items-center justify-center flex'>
                <div className='pt-16'>
                    <div className='pb-4'>
                        <Link href='/home'>
                            <button className='bg-careDarkGreen rounded-lg p-3 w-full text-white'> Sign In</button>
                        </Link>
                    </div>

                    <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md text-black">
                        <LoginForm />
                    </div>

                </div>
            </div>



        </div>
    );
}
