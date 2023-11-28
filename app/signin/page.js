// app/signin/page.js
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { LoginForm } from "../../components/GoogleLoginForm";
import { useRouter } from 'next/navigation';

// Initialize Supabase client
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://kqqivmuvkyvgletojezk.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setErrorMessage('');

        // Fetch the user details from Supabase
        let { data: Users, error } = await supabase
            .from('Users')
            .select('password')
            .eq('email', email)
            .single();

        if (error) {
            console.error('Error fetching user from Supabase:', error);
            return;
        }

        // Verify the password
        if (password === Users.password) {
            //localStorage.setItem('isAuthenticated', 'true');
            document.cookie = "isAuthenticated=true; max-age=3600; path=/";
            // Passwords match, redirect to the home page
            router.push('/home');
        } else {
            // Passwords don't match, handle error
            setErrorMessage('Invalid login credentials');
        }
    }
    
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
            <form onSubmit={handleSignIn}>
                <div>
                    <div className='flex flex-col pt-16'>
                        <div className='space-y-8'>
                            <input 
                                className='bg-gray-300 rounded-lg p-4 w-full' 
                                placeholder='Username or Email' 
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
                        <div className='pt-4 text-sm'>
                            {errorMessage && <p className="text-red-500 text-left">{errorMessage}</p>}
                        </div>

                    </div>
                </div>

                {/* ... rest of your code ... */}
                <div className='items-center justify-center flex'>
                    <div className='pt-6'>
                        <div className='pb-4'>
                            <button type="submit" className='bg-careDarkGreen rounded-lg p-3 w-full text-white'> Sign In</button>
                        </div>

                        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md text-black">
                        <LoginForm />
                        </div>
                    </div>
                </div>
            </form>




        </div>
    );
}
