//app/home/page.js
"use client"
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import io from 'socket.io-client';


const socket = io('https://b9eb-113-23-129-82.ngrok-free.app', {
  transports: ['websocket'], // Use WebSockets
});


export default function Home() {
  const [fallDetected, setFallDetected] = useState(false);
  const [alertAcknowledged, setAlertAcknowledged] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const router = useRouter();

  const sendFallDetectedEmail = async () => {
    const recipientEmail = 'khorzx01@gmail.com';
    const response = await fetch('../api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipient: recipientEmail,
        subject: 'Fall Detected Alert',
        text: 'A fall has been detected. Please check the camera footage to verify.',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Email sent:', data.message);
    } else {
      console.error('Error sending email:', response.statusText);
      // Handle non-200 responses here
    }
  };

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    // if (!isAuthenticated) {
    //   router.push('/signin');
    // }

    const handleFallDetected = (data) => {
      if (data.fallDetected && !cooldown && !fallDetected) {
        sendFallDetectedEmail().catch(console.error);
        setFallDetected(true);
        setAlertAcknowledged(false);
        // Start cooldown timer
        setCooldown(true);
        setTimeout(() => {
          setCooldown(false);
        }, 300000); // 5 minutes = 300000 milliseconds
      }
    };

    socket.on('fall_detected', handleFallDetected);

    return () => {
      socket.off('fall_detected', handleFallDetected);
    };
  }, [router, cooldown, fallDetected]);

  const handleDismissAlert = () => {
    setFallDetected(false);
    setAlertAcknowledged(true);
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

          <div className='flex bg-red-700 text-white font-semibold rounded-md justify-center justify-items-center py-2 mt-10'>
            <a href="tel:999" className="emergency-call-button">
              Emergency Call
            </a>
          </div>
          {fallDetected && !alertAcknowledged && (
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



        </div>
      </div>
    </div>
  );
};
