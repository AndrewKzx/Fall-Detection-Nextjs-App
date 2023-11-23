"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/status";

  
  return (  
  <button
  className="flex w-full justify-center gap-5 rounded py-4 px-4 text-sm border-solid border-2 border-black border-opacity-30
  border-radius: 0.5rem font-bold drop-shadow-md hover:bg-gray-200 duration-500"
  onClick={() => signIn("google", { callbackUrl })}>
    <div className="font-extrabold">Sign Up / Log in with Google</div>
  </button>
  );
};