// components/GoogleLoginForm.js
"use client";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import GoogleLogo from "../components/GoogleLogo"

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    const result = await signIn("google", { redirect: false });
    if (result?.error) {
      setError(result.error);
    } else if (result?.url) {
      // Set the cookie
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to the callback URL or default to home
      router.push(result.url || '/home');
    }
  };




  return (  
    <button
    className="flex"
    onClick={handleGoogleSignIn}>
      <div className="pr-10">
        <GoogleLogo />
      </div>

      <div className="font-bold">Sign Up / Log in with Google</div>
    </button>
    );
};