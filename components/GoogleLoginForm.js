// components/GoogleLoginForm.js
"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import GoogleLogo from "../components/GoogleLogo";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signIn("google", { redirect: false, callbackUrl: "/signup-password" });
      if (result?.error) {
        // Handle the error case here if needed
        setError(result.error);
      } else if (result?.url) {
        // This should be the URL to redirect to after sign-in
        window.location.href = result.url;
      }
    } catch (error) {
      // Handle the error case here
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
