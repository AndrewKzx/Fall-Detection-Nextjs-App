"use client"
import React, { useEffect, useState } from 'react';

export default function Home() {

  return (
    <div className='mt-20 mx-10'>
      <p className='font-bold text-careDarkGreen text-2xl'>Cameras</p>
      <p className='font-bold text-careLightGreen text-sm'>1 Active Camera</p>
      <div className='pt-8'>
        <img src="http://localhost:5000/video_feed" alt="Live Stream" className='rounded-xl' />
      </div>
    </div>
  );
}
