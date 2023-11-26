//app/home/page.js
"use client"
import React, { useEffect } from 'react';
import Nav from '../../components/Nav';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
      router.push('/signin');
    }
  }, [router]);

  return (
    <div>
      {/* Rest of the component */}
      <div className=' bg-gray-200'>
        <Nav/>
      </div>
      <div className='mx-10 mt-10'>
        <p className='font-bold text-careDarkGreen text-3xl'>Cameras</p>
        <p className='font-bold text-careLightGreen text-sm'>1 Active Camera</p>
        <div className='pt-8'>
          <img src="http://localhost:5000/video_feed" alt="Live Stream" className='rounded-xl' />
        </div>
      </div>
    </div>
  );
};
