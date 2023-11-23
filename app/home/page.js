"use client"
import React, { useEffect, useState } from 'react';
import Nav from '../../../component/Nav'

export default function Home() {

  return (
    <div className=''>
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
}
