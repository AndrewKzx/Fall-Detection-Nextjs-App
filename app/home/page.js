//app/home/page.js
"use client"
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket'], // Use WebSockets
});

export default function Home() {
  const [fallDetected, setFallDetected] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
      router.push('/signin');
    }

    // Listen for the fall_detected event from the server
    socket.on('fall_detected', (data) => {
      setFallDetected(data.fallDetected);
    });

    // Clean up the listener when the component unmounts
    return () => {
      socket.off('fall_detected');
    };
  }, [router]);

  const handleDismissAlert = () => {
    setFallDetected(false);
  };

  return (
    <div>
      {/* Rest of the component */}
      <div className=' bg-gray-200'>
        <Nav />
      </div>
      <div className='mx-10 mt-10'>
        <p className='font-bold text-careDarkGreen text-3xl'>Cameras</p>
        <p className='font-bold text-careLightGreen text-sm'>1 Active Camera</p>
        <div className='pt-8'>
          <img src="http://localhost:5000/video_feed" alt="Live Stream" className='rounded-xl' />
          {fallDetected && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 pb-10">
                    <img src="/assets/images/emergency icon 1.png" alt="Care Cam Logo" className='w-36'></img>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Fall Detected</h3>
                  <div className="mt-2 px-7 py-3">
                    <p className="text-sm text-gray-500">
                      A fall has been detected. Please check the camera footage to verify.
                    </p>
                  </div>
                  <div className="items-center px-4 py-3">
                    <button id="ok-btn" className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-5/12 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300" onClick={handleDismissAlert}>
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <a href="tel:999" className="emergency-call-button">
            Emergency Call
          </a>
        </div>
      </div>
    </div>
  );
};
