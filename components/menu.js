// components/Sidebar.js
import React from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Sidebar = ({ isOpen, closeSidebar }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    closeSidebar(); // Close sidebar on logout
    router.push('/signin');
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-y-0 left-0 w-56 bg-white p-5 shadow-xl z-50">
        {/* Sidebar content */}
        <div className="flex flex-col space-y-4">
          <button onClick={closeSidebar} className="self-end text-xl font-semibold">X</button>
          <button onClick={closeSidebar} className="py-2 px-4 w-full text-left hover:bg-gray-200">Profile</button>
          <button onClick={closeSidebar} className="py-2 px-4 w-full text-left hover:bg-gray-200">Settings</button>
          <button onClick={handleLogout} className="py-2 px-4 w-full text-left hover:bg-gray-200">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
