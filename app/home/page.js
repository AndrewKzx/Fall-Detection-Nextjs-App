"use client"
import React, { useEffect } from 'react';
import Nav from '../../component/Nav';
import { useSession } from "next-auth/react";

export default function Home() {

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
