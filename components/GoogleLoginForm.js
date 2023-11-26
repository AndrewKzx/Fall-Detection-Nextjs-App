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

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/home" }); // Redirect user to the home page after signing in
  };

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/home";

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