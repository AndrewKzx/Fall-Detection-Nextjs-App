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
      const callbackUrl = "/home"; // Specify the URL to redirect after login
      const result = await signIn("google", { redirect: false, callbackUrl: callbackUrl });
      if (result?.error) {
        setError(result.error);
      } else if (result?.url) {
        // Set isAuthenticated cookie here
        setCookie(null, 'isAuthenticated', 'true', {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        window.location.href = result.url; // Redirect to '/home' or intended URL
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
      <div className="font-bold">{loading ? "Loading..." : "Sign Up / Log in with Google"}</div>
      {error && <p className="text-red-500">{error}</p>}
    </button>
  );
};
