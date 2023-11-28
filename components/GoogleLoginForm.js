// components/GoogleLoginForm.js
"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import GoogleLogo from "../components/GoogleLogo";
import { setCookie } from 'nookies';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signIn("google", { redirect: false, callbackUrl: "/home" });
      if (result?.error) {
        setError(result.error);
      } else if (result?.url) {
        // Set isAuthenticated cookie here directly on the client-side
        document.cookie = "isAuthenticated=true; path=/";
        // Redirect to the intended URL
        window.location.href = result.url;
      }
    } catch (error) {
      console.error("Sign in failed", error);
      setError("Sign in failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="flex" onClick={handleGoogleSignIn} disabled={loading}>
      <div className="pr-10">
        <GoogleLogo />
      </div>
      <div className="font-bold">Sign up / Log In with Google</div>
      {error && <p className="text-red-500">{error}</p>}
    </button>
  );
}
