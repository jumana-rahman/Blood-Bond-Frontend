"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import AuthService from "@/services/auth.service";

export default function useRegister() {
  const router = useRouter();

  const register = async (data) => {
    try {
      const res = await AuthService.register(data);

      toast.success(
        res.message || "Registration successful"
      );

      router.push("/login");

      return true;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Registration failed"
      );

      return false;
    }
  };

  return { register };
}