"use client";

import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SocialLogin() {
  const handleGoogleLogin = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      toast.error("Google Login Failed");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full border rounded-xl py-3"
    >
      Continue With Google
    </button>
  );
}