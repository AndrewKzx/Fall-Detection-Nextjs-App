//app/signup/page.js
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://kqqivmuvkyvgletojezk.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if user already exists
        let { data: existingUser } = await supabase
          .from('Users')
          .select('email')
          .eq('email', email)
          .single();
    
        if (existingUser) {
          // Handle user already exists case
          console.error('Email already in use.');
          return;
        }
    
        // Insert new user
        const { error } = await supabase.from('Users').insert([
          { name: username, email: email, password: password },
        ]);
    
        if (error) {
          console.error('Error inserting user into Supabase:', error);
          return;
        }
    
        router.push('/signin');
      };

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

            {/* Sign Up Text */}
            <div className='justify-start pt-10'>
                <p className='font-extrabold text-careDarkGreen text-2xl'> Sign Up</p>
                <p className='pt-3 font-bold text-careNeonGreen text-sm'>Sign up with username, email<br></br> and password</p>
            </div>

            {/* Sign Up Input Box*/}
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col pt-10'>
                    <div className='space-y-8'>
                        <input 
                            className='bg-gray-300 rounded-lg p-4 w-full' 
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            className='bg-gray-300 rounded-lg p-4 w-full' 
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            className='bg-gray-300 rounded-lg p-4 w-full' 
                            placeholder='Password' 
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {/* Create Account*/}
                <div className='flex flex-col pt-16'>
                    <div className='pb-4'>
                        <button type='submit' className='bg-careDarkGreen rounded-lg p-3 w-full text-white'>
                            Create Account
                        </button>
                    </div>
                </div>
            </form>


        </div>
    );
}
